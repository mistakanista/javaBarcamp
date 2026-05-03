import { ScrollToHash } from "@/components/ScrollToHash";
import { NavigationSubpages } from "@/components/NavigationSubPages";
import { Footer } from "@/components/sections/Footer";
import { AddSponsor } from "@/components/sections/AddSponsor";

export default function Sponsors() {

  return (

    <div className="min-h-screen code-pattern-bg">
      <ScrollToHash />
      <NavigationSubpages />
      <AddSponsor />
      <Footer />
    </div>

  );
}
