import { UnRegistration } from "@/components/sections/UnRegistration";

export default function UnregisterPage() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <UnRegistration />
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
}
