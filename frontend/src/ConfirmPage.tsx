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
    <div>
      <h1>Confirmation</h1>
      {status !== null && <p>Status: {status}</p>}
      <p>{message}</p>
    </div>
  );
}
