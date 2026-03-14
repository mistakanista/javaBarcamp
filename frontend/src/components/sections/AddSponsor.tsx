import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Building, CheckCircle } from "lucide-react";

export const AddSponsor = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    logo: "",
    level: "",
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

    if (!formData.company) {
      toast({
        title: "Company Required",
        description: "Please add a company name.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    const response = await fetch("/api/sponsors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        logo: formData.logo,
        level: formData.level,
      }),
    });
    console.log("resp", response);
    if (response.status === 409) {
      toast({
        title: "Already registered",
        description: "This company is already registered.",
        variant: "destructive",
      });
    } else if (response.status >= 400) {
      toast({
        title: "Sponsor adding Failed",
        description: "There was an error when trying to add a sponsor.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sponsor added successfully! ☕",
        description: "Please check the sponsor page!",
      });
    }

    setFormData({ name: "", email: "", company: "", logo: "", level: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="register" className="py-24 bg-muted/50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sponsors
            </h2>
            <p className="text-lg text-muted-foreground">
              Add a sponsor for Frankfurt's premier Java unconference
            </p>
          </div>

          <Card className="glass-card shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="text-primary" />
                Sponsor Form
              </CardTitle>
              <CardDescription>
                Fill in the sponsor details!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building size={16} />
                    Company *
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="h-12"
                  />
                </div>

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
                  <Label htmlFor="logo" className="flex items-center gap-2">
                    <Mail size={16} />
                    Logo *
                  </Label>
                  <Input
                    id="logo"
                    placeholder="google.jpg"
                    value={formData.logo}
                    onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
                    className="h-12"
                  />
                </div>


                <div className="space-y-2">
                  <Label htmlFor="level" className="flex items-center gap-2">
                    <Mail size={16} />
                    Level *
                  </Label>
                  <Input
                    id="level"
                    placeholder="gold"
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="h-12"
                  />
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
                      Add sponsor
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
