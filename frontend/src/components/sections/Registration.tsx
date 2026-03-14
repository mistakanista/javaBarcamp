import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Building, CheckCircle } from "lucide-react";

export const Registration = () => {
  const { toast } = useToast();
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
        title: "Missing Information",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms to register.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
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
        title: "Already registered",
        description: "This email is already registered.",
        variant: "destructive",
      });
    } else if (response.status >= 400) {
      toast({
        title: "Registration failed",
        description: "There was an error when trying to register.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Registration Successful! ☕",
        description: "Please check your emails to complete the registration for Java Barcamp Frankfurt 2026!",
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
              Join the Community
            </h2>
            <p className="text-lg text-muted-foreground">
              Reserve your spot at Frankfurt's premier Java unconference
            </p>
          </div>

          <Card className="glass-card shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="text-primary" />
                Registration Form
              </CardTitle>
              <CardDescription>
                Fill in your details to secure your spot. It's free!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User size={16} />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail size={16} />
                    Email Address *
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
                    Company (Optional)
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
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
                    I agree to participate in the barcamp and understand that session topics are proposed on the day of the event.
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
                      Complete Registration
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
