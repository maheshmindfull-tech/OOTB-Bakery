export default function Logo({ light = false }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 72 72" className="h-11 w-11 shrink-0" aria-hidden="true">
        <circle cx="28" cy="16" r="4.2" fill="#f2d27a" />
        <circle cx="38" cy="13" r="4.6" fill="#e7b15a" />
        <circle cx="48" cy="17" r="4" fill="#d98a4a" />
        <circle cx="20" cy="24" r="4.4" fill="#efc56a" />
        <circle cx="31" cy="23" r="5" fill="#e08a3c" />
        <circle cx="42" cy="22" r="4.8" fill="#c96a32" />
        <circle cx="52" cy="26" r="3.8" fill="#f0c36b" />
        <circle cx="16" cy="33" r="3.6" fill="#e7a24a" />
        <circle cx="25" cy="32" r="4.6" fill="#f4d48a" />
        <circle cx="36" cy="31" r="5.2" fill="#d06a38" />
        <circle cx="47" cy="33" r="4.2" fill="#e8b15c" />
        <circle cx="22" cy="41" r="3.8" fill="#c9843e" />
        <circle cx="32" cy="40" r="4.4" fill="#f0c56e" />
        <circle cx="43" cy="41" r="3.6" fill="#de8a45" />
        <rect x="33" y="44" width="3.2" height="8" rx="1.2" fill="#8a5a32" />
        <path d="M24 54h16l2 8H22l2-8z" fill="#e07a3a" />
        <path d="M26 54h12l1.4 5.2H24.6L26 54z" fill="#f2c14e" />
        <path d="M22 62h20v4.5a2 2 0 0 1-2 2H24a2 2 0 0 1-2-2V62z" fill="#c4512d" />
      </svg>
      <span className={`leading-[0.9] ${light ? "text-ink" : "text-white"}`}>
        <span className="block text-[1.35rem] font-extrabold tracking-[-0.045em]">OOTB</span>
        <span className="mt-0.5 block text-[0.92rem] font-extrabold tracking-[0.12em]">BAKERY</span>
        <span className={`mt-1 block text-[0.58rem] font-semibold tracking-[0.22em] ${light ? "text-ink/55" : "text-white/70"}`}>
          NUT-FREE
        </span>
      </span>
    </span>
  );
}
