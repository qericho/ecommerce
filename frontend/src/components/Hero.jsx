import Hero_Img from "../assets/hero_image.png";
import Hand_Icon from "../assets/hand_icon.png";
import Arrow from "../assets/arrow.png";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-pink-100 to-white relative">
      <div className="h-full w-full flex items-center justify-between px-10 lg:px-40">
        {/* Right */}
        <div className="w-full">
          <h4 className="text-xl font-medium uppercase">New Arrivals Only</h4>
          <h1 className="w-full lg:w-90 text-5xl md:text-6xl font-medium leading-tight mt-5 mb-8">
            New{" "}
            <span
              className="inline-block"
              style={{
                display: "inline-block",
                animation: "wave 1s infinite",
                transformOrigin: "70% 70%",
              }}
            >
              <img src={Hand_Icon} alt="hand-icon" className="w-10 md:w-12" />
            </span>
            <br />
            Collection For Everyone
          </h1>
          <button
            className="bg-[#c23231] text-white px-10 py-2 rounded-full 
           hover:scale-105 transition-all cursor-pointer duration-150"
          >
            <div className="flex items-center justify-center gap-x-3">
              <span className="text-sm font-medium">Latest Collection</span>
              <img className="w-4" src={Arrow} alt="arrow" />
            </div>
          </button>
        </div>

        {/* Left */}
        <div className="size-150 lg:flex hidden">
          <img
            className="w-full h-full object-contain"
            src={Hero_Img}
            alt="hero-image"
          />
        </div>
      </div>

      {/* Wave animation keyframes */}
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            15% { transform: rotate(14deg); }
            30% { transform: rotate(-8deg); }
            40% { transform: rotate(14deg); }
            50% { transform: rotate(-4deg); }
            60% { transform: rotate(10deg); }
            70% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
