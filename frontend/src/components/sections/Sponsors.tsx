import { Card, CardContent } from "@/components/ui/card";
import { Crown, Award } from "lucide-react";

const goldSponsors = [
  { name: "Oracle", logo: "☕" },
  { name: "JetBrains", logo: "🧠" },
  { name: "Red Hat", logo: "🎩" },
];

const silverSponsors = [
  { name: "Amazon AWS", logo: "☁️" },
  { name: "Microsoft Azure", logo: "💠" },
  { name: "Spring", logo: "🌱" },
  { name: "Gradle", logo: "🐘" },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Sponsors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thanks to our amazing sponsors who make this event possible
          </p>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Crown className="text-gold" size={28} />
            <h3 className="text-2xl font-bold">Gold Sponsors</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {goldSponsors.map((sponsor) => (
              <Card 
                key={sponsor.name} 
                className="group relative overflow-hidden border-2 border-gold/30 hover:border-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 gold-gradient opacity-5 group-hover:opacity-10 transition-opacity" />
                <CardContent className="p-8 flex flex-col items-center justify-center min-h-[160px]">
                  <span className="text-5xl mb-4">{sponsor.logo}</span>
                  <span className="text-xl font-semibold">{sponsor.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="text-silver" size={24} />
            <h3 className="text-xl font-bold text-muted-foreground">Silver Sponsors</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {silverSponsors.map((sponsor) => (
              <Card 
                key={sponsor.name} 
                className="group relative overflow-hidden border border-silver/30 hover:border-silver transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 silver-gradient opacity-5 group-hover:opacity-10 transition-opacity" />
                <CardContent className="p-6 flex flex-col items-center justify-center min-h-[120px]">
                  <span className="text-3xl mb-2">{sponsor.logo}</span>
                  <span className="text-sm font-medium text-muted-foreground">{sponsor.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring Java Barcamp Frankfurt?
          </p>
          <a 
            href="mailto:sponsors@javabarcamp-frankfurt.de" 
            className="text-primary font-semibold hover:underline"
          >
            Contact us for sponsorship opportunities →
          </a>
        </div>
      </div>
    </section>
  );
};
