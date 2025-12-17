import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <div className="group p-6 rounded-lg border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-sm">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted transition-colors duration-300 group-hover:bg-foreground/5">
        <Icon className="h-6 w-6 text-foreground/70" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
