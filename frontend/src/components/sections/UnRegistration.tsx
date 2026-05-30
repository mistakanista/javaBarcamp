import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export const UnRegistration = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      toast({
        title: t("missingInformation"),
        description: t("emailMissing"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
      const response = await fetch("/api/registrations/unregister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
      }),
    });
    console.log("resp", response);
    if (response.status >= 400) {
      toast({
        title: t("unregisterFailure"),
        description: t("unregisterFailureText"),
        variant: "destructive",
      });
    } else {
      toast({
        title: t("unregisterSuccess"),
        description: t("unregisterSuccessText"),
      });
    }

    setFormData({ email: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="register" className="py-24 mesh-bg">
      <div className="section-container">
        <div className="max-w-lg mx-auto">
          <div className="mb-10">
            <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Registration</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              {t("unregisterTitle")}
            </h2>
            <p className="text-muted-foreground">
              {t("unregisterText")}
            </p>
          </div>

          <Card className="border border-border shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-base">{t("unregisterDetail")}</CardTitle>
              <CardDescription className="text-sm">
                {t("unregisterConfirmation")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">


                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm flex items-center gap-1.5">
                    <Mail size={14} className="text-muted-foreground" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Unregistering…" : (
                    <>
                      {t("unregisterSend")}
                      <ArrowRight size={16} />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
