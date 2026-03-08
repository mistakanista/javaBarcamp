import { UnRegistration } from "@/components/sections/UnRegistration";
import { Footer } from "@/components/sections/Footer";

export default function UnregisterPage() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <UnRegistration />
        <Footer />
      </div>
    </div>
  );
}
