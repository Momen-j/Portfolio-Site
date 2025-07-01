import Project from "./Project";
import { FaReact, FaNode, FaDiscord } from "react-icons/fa";
import Morgana from "../src/assets/morgana.jpg";
import Convertaphile from "../src/assets/convertaphile-logo.png";
import {
  SiFfmpeg,
  SiKotlin,
  SiKtor,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { FaLinux } from "react-icons/fa6";

// Make project component pass in props
// props will be icon, link, descrition, tools and whatever else

function Projects() {
  return (
    <>
      <div className="pb-8 ">
        <div className="text-app-text text-5xl font-bold mb-8">Projects</div>
        <div className="flex flex-col md:flex-row gap-5">
          <Project
            image={Convertaphile}
            title="Convertaphile"
            description="A multimedia file conversion website for converting image, audio, and video files"
            projectLink="https://convertaphile.com/"
            tools={[
              <SiKotlin />,
              <FaReact />,
              <SiTypescript />,
              <FaNode />
            ]}
          />
          <Project
            image={Morgana}
            title="Atlus Navigator"
            description="A TypeScript-Powered Discord bot for discovering enemy & persona weaknesses in Atlus Games"
            projectLink="https://discordbotlist.com/bots/atlus-navigator"
            tools={[
              <FaNode />,
              <SiTypescript />,
              <GrDocker />,
              <FaLinux />,
              <SiPostgresql />,
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
