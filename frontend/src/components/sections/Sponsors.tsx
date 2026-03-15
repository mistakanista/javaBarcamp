import { Card, CardContent } from "@/components/ui/card";
import { Crown, Award } from "lucide-react";

const goldSponsors = [
    { name: "SQ-Solutions", logo: "SQ-solutions.png" },
  { name: "Accenture", logo: "accenture-logo.png" },
  { name: "Codecentric", logo: "codecentric.svg" },
];

const silverSponsors = [
  { name: "Vercel", logo: "▲" },
  { name: "Netlify", logo: "◆" },
  { name: "DigitalOcean", logo: "🌊" },
  { name: "Atlassian", logo: "🔷" },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {goldSponsors.map((sponsor) => (
              <Card key={sponsor.name} className="group border-gold/20 hover:border-gold/40 transition-colors">
                <CardContent className="p-8 flex flex-col items-center justify-center min-h-[140px]">
                  <img
                        key={sponsor.name}
                        src={"/sponsors/" + sponsor.logo}
                        alt={sponsor.name}
                        className="h-16 object-contain"
                      />
                  <span className="font-medium">{sponsor.name}</span>
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
