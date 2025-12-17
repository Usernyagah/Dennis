import { ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ThemeToggle from "@/components/ThemeToggle";

const services = [
  {
    title: "Business Websites & Landing Pages",
    description: "Professional, fast-loading websites that establish credibility and convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Internal Business Systems & Dashboards",
    description: "Custom dashboards and tools to streamline operations and give you real-time business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "E-commerce Solutions",
    description: "Online stores that make it easy for your customers to browse, buy, and come back for more.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "Process Automation & Integrations",
    description: "Automate repetitive tasks and connect your tools to save time and reduce errors.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
  },
  {
    title: "Custom Software for Business Operations",
    description: "Tailored software solutions designed specifically for your unique business processes.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
  },
  {
    title: "API Development & Third-Party Integrations",
    description: "Connect your systems with external services and build powerful data workflows.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "Ongoing Maintenance & Scaling Support",
    description: "Keep your systems running smoothly and scale confidently as your business grows.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
];

const clients = [
  { name: "Nikas Realty", phone: "0712345678" },
  { name: "Kote Kwema", phone: "0723456789" },
  { name: "Safenest", phone: "0734567890" },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      
      {/* Header */}
      <header className="pt-6 px-6">
        <Button variant="ghost" asChild className="gap-2 text-muted-foreground hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        {/* Page Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
            Business Solutions for Small & Medium Enterprises
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical digital solutions focused on efficiency, growth, and automation for your business.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-24 animate-fade-in-delay">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
              />
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section className="animate-fade-in-delay-2">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Clients & Collaborations
            </h2>
            <p className="text-muted-foreground">
              Trusted by businesses across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg border border-border bg-card/50 transition-colors duration-300 hover:bg-muted"
              >
                <span className="text-base font-semibold text-foreground mb-2">
                  {client.name}
                </span>
                <a 
                  href={`tel:${client.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {client.phone}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 text-center">
          <div className="p-8 md:p-12 rounded-2xl border border-border bg-card">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
              Ready to discuss your project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Let's talk about how I can help your business grow with the right digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <a href="mailto:nyagahtradings@yahoo.com">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild size="lg" className="px-8">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dennis Nyagah. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Services;
