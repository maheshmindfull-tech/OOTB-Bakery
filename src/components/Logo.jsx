export default function Logo({ className = "h-14 md:h-16" }) {
  return (
    <img
      src="/media/brand/logo.png"
      alt="OOTB Bakery"
      className={`w-auto object-contain ${className}`}
    />
  );
}
