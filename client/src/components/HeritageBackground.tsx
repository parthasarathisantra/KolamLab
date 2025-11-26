interface HeritageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function HeritageBackground({ children, className = "" }: HeritageBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-kolam-ivory via-background to-kolam-ivory/50 -z-10" />
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          color: "#8c2f0c",
        }}
      />
      {children}
    </div>
  );
}
