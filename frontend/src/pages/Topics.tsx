import { ScrollToHash } from "@/components/ScrollToHash";
import { NavigationSubpages } from "@/components/NavigationSubPages";
import { Footer } from "@/components/sections/Footer";
import { HandleTopics } from "@/components/sections/HandleTopics";

export default function Sponsors() {

  return (

    <div className="min-h-screen code-pattern-bg">
      <ScrollToHash />
      <NavigationSubpages />
      <HandleTopics />
      <Footer />
    </div>

  );
}
