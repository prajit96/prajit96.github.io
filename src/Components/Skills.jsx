import React from "react";
import "./skills.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiChakraui,
  SiMui, 
  SiBootstrap,
  SiOpenai,
  SiAngular,
  SiTailwindcss
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { Text } from "@chakra-ui/react";

const Skills = () => {
  return (
    <>
      <Text id="skills"
          as={"span"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "blue.400",
            zIndex: -1,
          }}
        >
          Skills Section
        </Text>
      <div className="skills-card" data-aos="fade-right">
        <div className="skillsection" >
          <div>
            <SiHtml5 />
            <h5 className="skills-card-name">HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5 className="skills-card-name">CSS</h5>
          </div>
          <div>
            <SiJavascript />
            <h5 className="skills-card-name">Javascript</h5>
          </div>
          <div>
            <FaReact />
            <h5 className="skills-card-name">React</h5>
          </div>
          <div>
            <SiChakraui />
            <h5 className="skills-card-name">Chakra UI</h5>
          </div>
          <div>
            <SiTypescript />
            <h5 className="skills-card-name">Typescript</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5 className="skills-card-name">NextJs</h5>
          </div>

          <div>
            <FaNodeJs />
            <h5 className="skills-card-name">Node.js</h5>
          </div>
          <div>
            <DiMongodb />
            <h5 className="skills-card-name">MongoDB</h5>
          </div>
          <div>
            <SiRedux />
            <h5 className="skills-card-name">Redux</h5>

          </div>
          <div>
            <SiExpress />
            <h5 className="skills-card-name">Express</h5>
          </div>
          <div>
            <SiMui  />
            <h5 className="skills-card-name">Material UI</h5>
          </div>
          <div>
            <SiBootstrap /> 
            <h5 className="skills-card-name">Bootstrap</h5>
          </div>
          <div>
            <SiOpenai /> 
            <h5 className="skills-card-name">OpenAI</h5>
          </div>
          <div>
            <SiAngular/> 
            <h5 className="skills-card-name">Angular</h5>
          </div>
          <div>
            <SiTailwindcss/> 
            <h5 className="skills-card-name">Tailwind CSS</h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;