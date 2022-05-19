import { ButtonArgs } from ".";

const PrimaryButton = ({
  children,
  className,
  disabled,
  onClick,
  onKeyDown,
  prefix,
  suffix,
}: ButtonArgs) => (
  <button
    onClick={onClick}
    onKeyDown={onKeyDown}
    className="mt-8 mb-24 group bg-accent rounded-lg py-3 px-4 font-semibold text-sm group relative isolate overflow-hidden transition-colors"
  >
    <div className="absolute h-full w-[200%] bg-gradient-to-r from-[#f20c3a3d] via-[#f20c3a3d] to-transparent -left-[125%] top-0 group-hover:left-0 transition-all" />
    <div className="relative inline-block z-10 text-white">
      <span className="inline-block">
        {prefix} {children} {suffix}
      </span>
      <span className="ml-2 not-sr-only">&rsaquo;</span>
    </div>
  </button>
);

export default PrimaryButton;
