import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const test = decodeURIComponent("%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ctext x='25' y='30' text-anchor='middle' font-family='monospace' font-size='14' font-weight='bold' fill='%23ffffff' opacity='0.09'%3E%26lt;/%26gt;%3C/text%3E%3C/svg%3E")

console.log("test",test);
export const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden flex items-center">
      {/* Repeating </> pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Ctext x='25' y='30' text-anchor='middle' font-family='monospace' font-size='14' font-weight='bold' fill='%23ffffff' opacity='0.09'%3E%26lt;/%26gt;%3C/text%3E%3C/svg%3E")`,
      }} />

      {/* Gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative section-container py-32">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground/80 px-3 py-1.5 rounded-full text-xs font-mono mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span>Software Developer Unconference</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1] tracking-tight animate-slide-up">
            Developer
            <br />
            Barcamp
            <span className="text-primary"> Frankfurt</span>
            <br />
            <span className="font-mono text-3xl md:text-5xl font-light text-primary-foreground/60">
              2026
            </span>
          </h1>

          <p className="text-lg text-primary-foreground/60 mb-10 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            An open space for developers to share ideas, learn from peers, and shape the agenda together. No speakers, no spectators — just participants.
          </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 mb-10 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            {[
              { icon: Calendar, text: "October 15, 2026" },
              { icon: MapPin, text: "Frankfurt am Main" },
              { icon: Users, text: "100 Developers" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-primary-foreground/50 text-sm">
                <Icon size={16} className="text-primary/70" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
            >
              Register Now
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              onClick={() => document.getElementById("topics")?.scrollIntoView({ behavior: "smooth" })}
            >
              Suggest a Topic
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-primary-foreground/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
