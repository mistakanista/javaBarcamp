import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Building, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Registration = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    agreeTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({
        title: t("missingInformation"),
        description: t("emailMissing"),
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeTerms) {
      toast({
        title: t("termsRequired"),
        description: t("agreeTerms"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const response = await fetch("/api/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        acceptConditions: formData.agreeTerms,
      }),
    });
    console.log("resp", response);
    if (response.status === 409) {
      toast({
        title: t("alreadyRegistered"),
        description: t("emailRegistered"),
        variant: "destructive",
      });
    } else if (response.status >= 400) {
      toast({
        title: t("registrationFailed"),
        description: t("registrationError"),
        variant: "destructive",
      });
    } else {
      toast({
        title: t("registrationSuccess"),
        description: t("checkEmail"),
      });
    }

    setFormData({ name: "", email: "", company: "", agreeTerms: false });
    setIsSubmitting(false);
  };

  return (
    <section id="register" className="py-24 bg-muted/50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t("join")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("reserve")}
            </p>
          </div>

          <Card className="glass-card shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="text-primary" />
                {t("registrationForm")}
              </CardTitle>
              <CardDescription>
                {t("formDetails")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User size={16} />
                    {t("name")} *
                  </Label>
                  <Input
                    id="name"
                    placeholder={t('yourName')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail size={16} />
                    {t("email")} *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building size={16} />
                    {t("company")}
                  </Label>
                  <Input
                    id="company"
                    placeholder={t("yourCompany")}
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    {t("terms")}
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <CheckCircle size={18} />
                      {t("completeRegistration")}
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
