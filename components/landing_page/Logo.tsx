'use client';

type LogoProps = {
  className?: string;
  onDark?: boolean; // set true when sitting on a dark/hero background
};

export function Logo({ className = '', onDark = false }: LogoProps) {
  const titleColor = onDark ? 'text-slate-50' : 'text-slate-900';
  const subtitleColor = onDark ? 'text-slate-300' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex flex-col leading-tight">
        <h2 className={`text-lg font-semibold tracking-tight ${titleColor}`}>
          Harmey
        </h2>
        <span className={`text-[11px] mt-0.5 ${subtitleColor}`}>
          Build • Lend • Grow
        </span>
      </div>
    </div>
  );
}
