import { ScrollToHash } from "@/components/ScrollToHash";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { HandleTopics } from "@/components/sections/HandleTopics";

export default function Sponsors() {

  return (

    <div className="min-h-screen code-pattern-bg">
      <ScrollToHash />
      <Navigation />
      <HandleTopics />
      <Footer />
    </div>

  );
}
