import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-[160px] pb-[60px] container">
      <div className="flex justify-center">
        <span className="mx-auto inline-block">
          <h1 className="text-2xl font-semibold text-tp text-center">UNICORP</h1>
          <img
            className="animate-bounce duration-[2000ms] mx-auto mt-8"
            src="/assets/shapes/arrow.svg"
            alt="arrow"
          />
          <h1 className="text-center font-semibold text-fs60">Empowering businesses through <br/> technology</h1>
        </span>
      </div>

      <Image unoptimized src='/assets/temp/hero-temp-image.png' alt="hero" width={0} height={700} className="w-full h-[700px] mt-[60px]" />
    </section>
  );
};

export default HeroSection;
