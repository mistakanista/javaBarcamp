import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Crown, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Sponsors = () => {

  const { t } = useTranslation();
  const [message, setMessage] = useState<string>("");
  const [goldSponsors, setGoldSponsors] = useState([]);
  const [goldSponsorsFetched, setGoldSponsorsFetched] = useState(false);

  const [silverSponsors, setSilverSponsors] = useState([]);
  const [silverSponsorsFetched, setSilverSponsorsFetched] = useState(false);
  const host = "http://localhost:8080/"
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
    <section id="sponsors" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("sponsors")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("sponsorsIntro")}
          </p>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Crown className="text-gold" size={28} />
            <h3 className="text-2xl font-bold">{t("goldSponsors")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {goldSponsors.map((sponsor) => (
              <Card key={sponsor.company} className="group border-gold/20 hover:border-gold/40 transition-colors">
                <CardContent className="p-8 flex flex-col items-center justify-center min-h-[140px]">
                  <img
                        key={sponsor.company}
                        src={host + "sponsors/" + sponsor.logo}
                        alt={sponsor.company}
                        className="h-16 object-contain"
                      />
                  <span className="font-medium">{sponsor.company}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="text-silver" size={24} />
            <h3 className="text-xl font-bold text-muted-foreground">{t("silverSponsors")}</h3>
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
                      src={host + "sponsors/" + sponsor.logo}
                      alt={sponsor.company}
                      className="h-16 object-contain"
                    />
                  <span className="text-sm font-medium text-muted-foreground">{sponsor.company}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            {t("sponsorsInterest")}
          </p>
          <a
            href="mailto:sponsors@javabarcamp-frankfurt.de"
            className="text-primary font-semibold hover:underline"
          >
            {t("sponsorsContact")}  →
          </a>
        </div>
      </div>
    </section>
  );
};
