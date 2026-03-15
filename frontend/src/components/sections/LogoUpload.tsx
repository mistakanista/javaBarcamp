import { Label } from "@/components/ui/label";
import { useDropzone } from "react-dropzone";
import { Image } from "lucide-react";

export const LogoUpload = ({ formData, setFormData }) => {

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    const data = new FormData();
    data.append("file", file);

      const res = await fetch("/api/sponsors/upload/sponsor-logo", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    console.log("Upload result:", result);

    setFormData({
      ...formData,
      logo: result.filename
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="space-y-2">
      <Label className="flex items-center gap-2">
        <Image size={16} />
        Logo *
      </Label>

      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted"
      >
        <input {...getInputProps()} />

        {isDragActive ? (
          <p>Drop the logo here ...</p>
        ) : (
          <p>Drag & drop sponsor logo here, or click to upload</p>
        )}
      </div>

      {formData.logo && (
        <img
          src={`http://localhost:8080/sponsors/${formData.logo}`}
          className="h-16 mt-2 object-contain"
        />
      )}
    </div>
  );
};