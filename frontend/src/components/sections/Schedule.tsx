import { Card, CardContent } from "@/components/ui/card";
import { 
  Coffee, 
  Users, 
  ClipboardList, 
  Presentation, 
  UtensilsCrossed, 
  GraduationCap,
  Clock
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight?: boolean;
}



export const Schedule = () => {
  const { t } = useTranslation();
  const scheduleItems: ScheduleItem[] = [
    {
      time: "08:30 - 09:00",
      title: t("eventWelcome"),
      description: t("eventWelcomeDescription"),
      icon: <Coffee className="text-primary" size={24} />,
    },
    {
      time: "09:00 - 09:30",
      title: t("eventOpening"),
      description: t("eventOpeningDescription"),
      icon: <Users className="text-primary" size={24} />,
    },
    {
      time: "09:30 - 10:30",
      title: t("eventTopicPitching"),
      description: t("eventTopicPitchingDescription"),
      icon: <ClipboardList className="text-primary" size={24} />,
      highlight: true,
    },
    {
      time: "10:30 - 11:00",
      title: t("eventPlanning"),
      description: t("eventPlanningDescription"),
      icon: <Clock className="text-primary" size={24} />,
    },
    {
      time: "11:00 - 12:00",
      title: t("eventMorning"),
      description: t("eventMorningDescription"),
      icon: <Presentation className="text-primary" size={24} />,
      highlight: true,
    },
    {
      time: "12:00 - 13:00",
      title: t("eventMorning2"),
      description: t("eventMorning2Description"),
      icon: <Presentation className="text-primary" size={24} />,
      highlight: true,
    },
    {
      time: "13:00 - 14:00",
      title: t("eventLunch"),
      description: t("eventLunchDescription"),
      icon: <UtensilsCrossed className="text-primary" size={24} />,
    },
    {
      time: "14:00 - 15:00",
      title: t("eventAfternoon"),
      description: t("eventAfternoonDescription"),
      icon: <Presentation className="text-primary" size={24} />,
      highlight: true,
    },
    {
      time: "15:00 - 16:00",
      title: t("eventAfternoon4"),
      description: t("eventAfternoon4Description"),
      icon: <Presentation className="text-primary" size={24} />,
      highlight: true,
    },
    {
      time: "16:00 - 16:30",
      title: t("eventCoffee"),
      description: t("eventCoffeeDescription"),
      icon: <Coffee className="text-primary" size={24} />,
    },
    {
      time: "16:30 - 17:30",
      title: t("eventAfternoon5"),
      description: t("eventAfternoon5Description"),
      icon: <GraduationCap className="text-primary" size={24} />,
      highlight: true,
    },
    {
      time: "17:30 - 18:00",
      title: t("eventClosing"),
      description: t("eventClosingDescription"),
      icon: <Users className="text-primary" size={24} />,
    },
  ];
  return (
    <section id="schedule" className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("eventSchedule")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("eventScheduleIntro")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {/* Schedule Items */}
            <div className="space-y-4">
              {scheduleItems.map((item, index) => (
                <Card 
                  key={index} 
                  className={`relative glass-card transition-all duration-300 hover:shadow-md animate-fade-in ${
                    item.highlight ? 'border-primary/30 bg-primary/5' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[31px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                  
                  <CardContent className="p-4 md:p-5 md:ml-16">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-1">
                          <span className="text-sm font-mono text-primary font-semibold">
                            {item.time}
                          </span>
                          <h4 className="font-semibold text-lg">{item.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
