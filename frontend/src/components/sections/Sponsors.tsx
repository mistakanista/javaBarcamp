import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Crown, Award } from "lucide-react";

export const Sponsors = () => {

  const [message, setMessage] = useState<string>("");
  const [goldSponsors, setGoldSponsors] = useState([]);
  const [goldSponsorsFetched, setGoldSponsorsFetched] = useState(false);

  const [silverSponsors, setSilverSponsors] = useState([]);
  const [silverSponsorsFetched, setSilverSponsorsFetched] = useState(false);
  useEffect(() => {

      const fetchGoldSponsors = async () => {
        try {
          const res = await fetch(`/api/sponsors/list?level=gold`);

          const data = await res.json();
          console.log("data", data);

          setGoldSponsors(data);
        } catch {
          setMessage("Network error");
        }
      };
      if (!goldSponsorsFetched) {
          fetchGoldSponsors();
          setGoldSponsorsFetched(true);
      }

      const fetchSilverSponsors = async () => {
              try {
                const res = await fetch(`/api/sponsors/list?level=silver`);

                const data = await res.json();   // 👈 DAS fehlt
                console.log("data", data);

                setSilverSponsors(data);

              } catch {
                setMessage("Network error");
              }
            };
            if (!silverSponsorsFetched) {
                fetchSilverSponsors();
                setSilverSponsorsFetched(true);
            }

    }, [goldSponsorsFetched, silverSponsorsFetched], );

  return (
    <section id="sponsors" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="mb-16">
          <p className="text-xs font-mono text-primary tracking-widest uppercase mb-3">Partners</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Our Sponsors
          </h2>
          <p className="text-muted-foreground max-w-md">
            Made possible by companies that care about the developer community.
          </p>
        </div>

        {/* Gold */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Crown className="text-gold" size={18} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">Gold</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {goldSponsors.map((sponsor) => (
              <Card key={sponsor.company} className="group border-gold/20 hover:border-gold/40 transition-colors">
                <CardContent className="p-8 flex flex-col items-center justify-center min-h-[140px]">
                  <img
                        key={sponsor.company}
                        src={"/sponsors/" + sponsor.logo}
                        alt={sponsor.company}
                        className="h-16 object-contain"
                      />
                  <span className="font-medium">{sponsor.company}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-silver" size={18} />
            <h3 className="text-sm font-semibold uppercase tracking-wider text-silver">Silver</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {silverSponsors.map((sponsor) => (
              <Card
                key={sponsor.company}
                className="group relative overflow-hidden border border-silver/30 hover:border-silver transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 silver-gradient opacity-5 group-hover:opacity-10 transition-opacity" />
                <CardContent className="p-6 flex flex-col items-center justify-center min-h-[120px]">
                  <img
                      key={sponsor.company}
                      src={"/sponsors/" + sponsor.logo}
                      alt={sponsor.company}
                      className="h-16 object-contain"
                    />
                  <span className="text-sm font-medium text-muted-foreground">{sponsor.company}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <p className="text-sm text-muted-foreground">
            Want to support the developer community?{" "}
            <a href="mailto:sponsors@devbarcamp-frankfurt.de" className="text-primary hover:underline">
              Become a sponsor →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
