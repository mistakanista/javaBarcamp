import { Button } from "@/components/ui/button";
import { Coffee, Calendar, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Hero = () => {

  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Coffee Beans */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <Coffee size={80} />
      </div>
      <div className="absolute bottom-32 right-16 text-primary/15 animate-float" style={{ animationDelay: '2s' }}>
        <Coffee size={60} />
      </div>

      <div className="relative section-container pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Coffee size={16} />
            <span>{t('ultimative')}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground mb-6 animate-slide-up">
            Java Barcamp
            <span className="block">FFM 2027</span>
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
