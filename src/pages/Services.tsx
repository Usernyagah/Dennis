import { ArrowLeft, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ThemeToggle from "@/components/ThemeToggle";

const asset = (relativePathFromPublicRoot: string) =>
  `${import.meta.env.BASE_URL}${relativePathFromPublicRoot.replace(/^\//, "")}`;

const services = [
  {
    title: "ERP System Integration",
    description: "Comprehensive ERP solutions that unify your business operations. We specialize in integrating payment processing, inventory management, accounting, and customer relationship management into one seamless system.",
    image: asset("services/erp.svg"),
  },
  {
    title: "Business Process Automation",
    description: "Streamline your workflows with intelligent automation. Our ERP solutions automate repetitive tasks across departments, from order processing to financial reporting, saving you time and reducing errors.",
    image: asset("services/automation.svg"),
  },
  {
    title: "Financial Management Suite",
    description: "End-to-end financial management including accounts payable/receivable, M-Pesa and bank payment processing, payroll, and financial reporting - all integrated within your ERP system.",
    image: asset("services/finance.svg"),
  },
  {
    title: "Inventory & Supply Chain",
    description: "Real-time inventory tracking, supplier management, and order fulfillment solutions. Our ERP systems provide complete visibility into your supply chain, from procurement to delivery.",
    image: asset("services/inventory.svg"),
  },
  {
    title: "Custom ERP Development",
    description: "Tailored ERP solutions designed for your specific business needs. We build custom modules that integrate with your existing systems, including payment gateways, e-commerce platforms, and third-party services.",
    image: asset("services/custom-dev.svg"),
  },
  {
    title: "Business Intelligence & Analytics",
    description: "Turn your business data into actionable insights. Our ERP solutions include powerful analytics dashboards that help you track KPIs, monitor sales trends, and make data-driven decisions.",
    image: asset("services/analytics.svg"),
  }
];

const clients = [
  { name: "Nikas Realty", phone: "0710132320", industry: "Real Estate" },
  { name: "Kote Kwema", phone: "0710746917", industry: "Architecture" },
  { name: "Safenest", phone: "0702970187", industry: "DeFi" },
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
                <span className="text-base font-semibold text-foreground mb-1">
                  {client.name}
                </span>
                <span className="text-xs text-primary font-medium mb-3">
                  {client.industry}
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
