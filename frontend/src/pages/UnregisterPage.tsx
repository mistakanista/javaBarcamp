import { ScrollToHash } from "@/components/ScrollToHash";
import { Navigation } from "@/components/Navigation";
import { UnRegistration } from "@/components/sections/UnRegistration";
import { Footer } from "@/components/sections/Footer";

export default function UnregisterPage() {

  return (

    <div className="min-h-screen code-pattern-bg">
      <ScrollToHash />
      <Navigation />
      <UnRegistration />
      <Footer />
    </div>

  );
}
