
import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumb?: Array<{
    label: string;
    href?: string;
  }>;
  icon?: ReactNode;
  backgroundPattern?: boolean;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  description, 
  breadcrumb, 
  icon,
  backgroundPattern = true 
}: PageHeaderProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/8 via-primary/5 to-accent/10 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full translate-x-32 translate-y-32"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-primary/30 rounded-full -translate-x-20 -translate-y-20"></div>
        </div>
      )}
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(154,100,15,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(154,100,15,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              {breadcrumb.map((item, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className="hover:text-primary transition-colors font-medium"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-primary font-semibold">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </nav>
        )}

        {/* Header Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          {icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full mb-4 sm:mb-6">
              <div className="text-primary [&>svg]:w-8 [&>svg]:h-8 sm:[&>svg]:w-10 sm:[&>svg]:h-10">
                {icon}
              </div>
            </div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <div className="mb-3 sm:mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm sm:text-base font-semibold tracking-wide">
                {subtitle}
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="page-title-mobile mb-4 sm:mb-6">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <div className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">
                {description}
              </p>
            </div>
          )}

          {/* Decorative Line */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <div className="h-2 w-2 bg-primary rounded-full mx-4"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-primary to-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
