import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Building, Image, BadgeEuro, ListOrdered, CheckCircle } from "lucide-react";
import { LogoUpload } from "@/components/sections/LogoUpload";

export const AddSponsor = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    logo: "",
    level: "",
    sort: "",
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

    if (!formData.logo) {
          toast({
            title: "Logo Required",
            description: "Please upload a logo.",
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
        sort: formData.sort,
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

    setFormData({ name: "", email: "", company: "", logo: "", level: "", sort: "" });
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

                <LogoUpload formData={formData} setFormData={setFormData} />


                <div className="space-y-2">
                  <Label htmlFor="level" className="flex items-center gap-2">
                    <BadgeEuro size={16} />
                    Level *
                  </Label>
                  <Select
                      value={formData.level}
                      onValueChange={(value) => setFormData({ ...formData, level: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select sponsor level" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="gold">Gold</SelectItem>
                        <SelectItem value="silver">Silver</SelectItem>
                      </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sort" className="flex items-center gap-2">
                    <ListOrdered size={16} />
                    Sort Order
                  </Label>
                  <Select
                      value={formData.sort}
                      onValueChange={(value) => setFormData({ ...formData, sort: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select sort order" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                      </SelectContent>
                    </Select>
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
