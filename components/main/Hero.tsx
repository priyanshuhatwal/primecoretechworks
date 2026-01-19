import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative h-full w-full overflow-hidden" id="home">
      <video
        autoPlay
        muted
        loop
        className="
          rotate-100 
          absolute 
          top-[-180px]          /* 📱 Mobile FIX */
          md:top-[-240px]       /* 🖥 Desktop same */
          lg:top-[-335px] 
          left-0 
          z-[0] 
          w-full 
          h-[120vh]             /* 📱 Mobile FIX */
          md:h-full              /* 🖥 Desktop same */
          object-cover
        "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};

export default Hero;
