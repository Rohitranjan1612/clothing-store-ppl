export default function HeroBanner() {
  return (
    <section className="relative w-full h-[420px] overflow-hidden">
      <img
        src="https://picsum.photos/1920/700"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-10">
          <div className="text-white max-w-xl">
            <h1 className="text-[64px] md:text-[80px] lg:text-[96px] font-light leading-[1.05] tracking-tight">
              Simple
            </h1>
            <h1 className="text-[64px] md:text-[80px] lg:text-[96px] font-light leading-[1.05] tracking-tight">
              is More
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
