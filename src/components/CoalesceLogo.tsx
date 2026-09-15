interface LogoMarkProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export function CoalesceLogoMark({
  className = "w-8 h-8",
  size,
  color = "currentColor",
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 176 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke={color}
        strokeWidth="16"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        transform="translate(-164, -144)"
      >
        {/* 'A' Left outer leg and tail */}
        <path d="M 208 154 L 174 188 L 256 270" />
        {/* 'A' Right leg */}
        <path d="M 208 154 L 274 220" />
        {/* 'A' Crossbar */}
        <path d="M 197 211 L 235 173" />

        {/* 'W' interlocking chevron strokes */}
        <path d="M 235 154 L 273 192 L 293 172" />
        <path d="M 264 154 L 295 185 L 326 154" />
      </g>
    </svg>
  );
}

interface CoalesceFullLogoProps {
  className?: string;
  markClassName?: string;
  textColor?: string;
  showTagline?: boolean;
}

export function CoalesceFullLogo({
  className = "flex items-center gap-3",
  markClassName = "w-8 h-8 text-black",
  textColor = "text-black",
  showTagline = true,
}: CoalesceFullLogoProps) {
  return (
    <div className={`group flex items-center ${className}`}>
      <CoalesceLogoMark className={`${markClassName} transition-transform duration-300 group-hover:scale-105`} />
      <div className="flex flex-col text-left leading-none">
        <span className={`font-poppins font-bold tracking-[0.14em] uppercase text-sm sm:text-base ${textColor}`}>
          COALESCE
        </span>
        {showTagline && (
          <span className="font-poppins font-medium tracking-[0.28em] uppercase text-[9px] text-neutral-500">
            DIGITAL
          </span>
        )}
      </div>
    </div>
  );
}
