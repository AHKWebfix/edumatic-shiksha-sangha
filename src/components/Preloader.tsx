
import { Loader2 } from "lucide-react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
        <p className="text-sm text-muted-foreground">পেজ লোড হচ্ছে...</p>
      </div>
    </div>
  );
};

export default Preloader;
