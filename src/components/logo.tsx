import Image from "next/image";

export function Logo({ width, height, className }: { width: number, height: number, className?: string }) {
    return (
      <Image
        src="/192x192.png"
        alt="Visible Clinic Logo"
        width={width}
        height={height}
        className={className}
      />
    );
  }
