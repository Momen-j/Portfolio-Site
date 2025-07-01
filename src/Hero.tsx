import PFP from "../src/assets/pfp copy.jpg";
import Links from "./Links.tsx";

function Hero() {
  return (
    <>
      <div className="pb-4 text-app-text flex flex-col md:flex-row  md:justify-between gap-4 max-w-none mx-auto">
        <div className="order-2 md:order-1 flex-1">
          <div className="text-6xl font-black pb-4">Hi, I'm Moses</div>
          <div className="text-xl pb-4">
            I am a software developer from Boston, MA and lover of all things
            programming. <br />
            Recently, I have been writing a lot of TypeScript and Kotlin.
          </div>
          <div className="text-xl pb-6">
            Some projects I've worked on include:
            <li className="pt-3">
              A{" "}
              <a
                href="https://convertaphile.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>website</u>
              </a>{" "}
              for converting multimedia files 
            </li>
            <li>
              A{" "}
              <a
                href="https://discordbotlist.com/bots/atlus-navigator"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>Discord bot</u>
              </a>{" "}
              for that generates enemy weakness guides for{" "}
              <a
                href="https://atlus.com/games/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <u>Atlus Video Games</u>
              </a>
            </li>
            <li>
              Systems tracking & reporting inputs from over 2,500 suppliers
            </li>
          </div>
          <Links />
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="ml-8 w-32 h-32 md:w-100 md:h-100 rounded-full overflow-hidden  shadow-lg">
            <img src={PFP} alt="PFP" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
