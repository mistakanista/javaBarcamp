import { ScrollToHash } from "@/components/ScrollToHash";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { AddSponsor } from "@/components/sections/AddSponsor";

export default function Sponsors() {

  return (

    <div className="min-h-screen code-pattern-bg">
      <ScrollToHash />
      <Navigation />
      <AddSponsor />
      <Footer />
    </div>

  );
}
