import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ConfirmPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!token) return;

    const fetchConfirm = async () => {
      try {
        const res = await fetch(`/api/registrations/confirm?token=${token}`);
        setStatus(res.status);

        const text = await res.text(); 
        console.log("test", text)// Body auslesen
        setMessage(text);
      } catch {
        setMessage("Network error");
      }
    };

    fetchConfirm(); // ⚡ Aufrufen
  }, [token]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Registration confirmation</h1>
        {status !== null && <p className="mb-4 text-xl text-muted-foreground">Status: {status}</p>}
        <p className="mb-4 text-xl text-muted-foreground">{message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
}
