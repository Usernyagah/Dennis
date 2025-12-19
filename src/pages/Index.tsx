import { Mail, MessageCircle, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedServicesBackground from "@/components/AnimatedServicesBackground";

const Index = () => {
  const whatsappNumber = "254742628137";
  const whatsappMessage = encodeURIComponent("Hello, I'd like to discuss a project with you.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 relative overflow-hidden">
      <AnimatedServicesBackground />
      <ThemeToggle />
      
      <main className="text-center max-w-2xl mx-auto relative z-10">
        {/* Name & Title */}
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
            Dennis Nyagah
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium" style={{ fontFamily: "'Caveat', cursive" }}>
            Software Engineer & Business Intelligence Analyst
          </p>
        </div>

        {/* Value Proposition */}
        <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-in-delay font-bold" style={{ fontFamily: "'Caveat', cursive" }}>
          Building simple, scalable digital solutions for small and medium businesses.
        </p>

        {/* Contact Info */}
        <div className="mt-10 flex flex-col items-center gap-4 animate-fade-in-delay">
          <a
            href="mailto:nyagahtradings@yahoo.com"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:bg-muted hover:border-foreground/20"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <Mail className="h-5 w-5" />
            <span className="text-sm">nyagahtradings@yahoo.com</span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:bg-muted hover:border-foreground/20"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm">0742628137</span>
          </a>
          <a
            href="https://github.com/Usernyagah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:bg-muted hover:border-foreground/20"
            aria-label="GitHub Profile"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            <Github className="h-5 w-5" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-12 animate-fade-in-delay-2">
          <Button
            asChild
            size="lg"
            className="px-8 py-6 text-base font-medium btn-guide"
          >
            <Link to="/services">View Services</Link>
          </Button>
        </div>
      </main>

      {/* Subtle Footer */}
      <footer className="absolute bottom-6 text-center relative z-10">
        <p className="text-xs text-muted-foreground inline-flex items-center gap-1" style={{ fontFamily: "'Caveat', cursive" }}>
          <span>©</span> <span>{new Date().getFullYear()} Dennis Nyagah</span>
        </p>
      </footer>
    </div>
  );
};

export default Index;
