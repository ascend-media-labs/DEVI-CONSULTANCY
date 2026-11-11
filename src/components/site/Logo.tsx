import logo from "@/assets/logo.jpg";

export function Logo({ className = "h-14 w-14" }: { className?: string }) {
  return <img src={logo} alt="DEVI CONSULTANCY logo" className={`${className} shrink-0 rounded-full object-contain`} />;
}
