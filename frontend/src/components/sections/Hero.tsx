import { Button } from "@/components/ui/button";
import { Coffee, Calendar, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Hero = () => {

  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
      {/* Repeating AI / {} / </> / ML pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg font-family='monospace' font-weight='bold' fill='%23ffffff' opacity='0.07'%3E%3Ctext x='25' y='30' text-anchor='middle' font-size='13'%3EAI%3C/text%3E%3Ctext x='75' y='30' text-anchor='middle' font-size='14'%3E%7B%7D%3C/text%3E%3Ctext x='25' y='80' text-anchor='middle' font-size='14'%3E%26lt;/%26gt;%3C/text%3E%3Ctext x='75' y='80' text-anchor='middle' font-size='13'%3EML%3C/text%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative section-container py-32">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 px-3 py-1.5 rounded-full text-xs font-mono mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span>{t("ultimative")}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1] tracking-tight animate-slide-up">
            KI_Code_Camp
            <span className="text-primary"> Frankfurt</span>
            <br />
            <span className="font-mono text-3xl md:text-5xl font-light text-primary-foreground/60">
              2026
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('brew')}
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Calendar className="text-primary" size={20} />
              <span>{t('date')}</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <MapPin className="text-primary" size={20} />
              <span>Frankfurt am Main</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Users className="text-primary" size={20} />
              <span>{t('developer')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('registerNow')}
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('suggestTopic')}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
