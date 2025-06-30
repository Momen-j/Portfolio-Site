import PFP from "../src/assets/pfp copy.jpg"

function Hero() {
  return (
    <>
      <div className="pb-2 text-app-text flex flex-col md:flex-row  md:justify-between gap-6 max-w-7xl">
        <div className="order-2 md:order-1 flex-1">
          <h1 className="text-6xl font-black pb-2.5">Hi, I'm Moses</h1>
          <h2 className="text-2xl">
            I am a software developer from Boston, MA and lover of all things
            programming. <br />
            Lately I have been writing a lot of TypeScript and Kotlin.
          </h2>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="w-32 h-32 md:w-112 md:h-112 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
            <img 
              src={PFP} 
              alt="PFP"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
