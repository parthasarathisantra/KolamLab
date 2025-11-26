interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-8 ${centered ? "text-center" : ""}`}>
      <div className="flex items-center gap-4 mb-2">
        {!centered && (
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-kolam-gold to-transparent" />
        )}
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-kolam-maroon">
          {title}
        </h2>
        {!centered && (
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-kolam-gold to-transparent" />
        )}
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-lg leading-relaxed mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
