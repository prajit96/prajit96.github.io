import React from "react";
import "./skills.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  //SiMaterialui,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiChakraui
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { Text } from "@chakra-ui/react";

const Skills = () => {
  return (
    <>
      <Text
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
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <SiChakraui />
            <h5>Chakra UI</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>Typescript</h5>
          </div>
          <div>
            <SiNextdotjs />
            <h5>NextJs</h5>
          </div>

          <div>
            <FaNodeJs />
            <h5>Node.js</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDB</h5>
          </div>
          <div>
            <SiRedux />
            <h5>Redux</h5>

          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            {/* <SiMaterialui /> */}
            <h5>Material UI</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;