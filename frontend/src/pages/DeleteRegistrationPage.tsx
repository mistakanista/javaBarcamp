import { ScrollToHash } from "@/components/ScrollToHash";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DeleteRegistration() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { t } = useTranslation();

  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!token) return;

    const fetchConfirm = async () => {
      try {
        const res = await fetch(`/api/registrations?token=${token}`, {
            method: "DELETE",
        });
        setStatus(res.status);

        const text = await res.text(); 
        console.log("text", text)// Body auslesen
        setMessage(text);
      } catch {
        setMessage("Network error");
      }
    };

    fetchConfirm(); // ⚡ Aufrufen
  }, [token]);

  return (
    <div className="min-h-screen code-pattern-bg">
        <ScrollToHash />
        <Navigation /><div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold">{t("unregisterConfirmed")}</h1>
              {status !== null && <p className="mb-4 text-xl text-muted-foreground">{t("status")} {status}</p>}
              <p className="mb-4 text-xl text-muted-foreground">{message}</p>
              <a href="/" className="text-primary underline hover:text-primary/90">
                {t("backToHome")}
              </a>
            </div>
        </div>
        <Footer />
    </div>

  );
}
