import { Container, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNetlify } from 'react-icons/si'
import { SiChakraui } from 'react-icons/si'
import { SiReact } from 'react-icons/si'

import Food2Door from "../Components/Images/Food2Door.png"
import fastDeal from "../Components/Images/FastDeal.png"
import taxgenious from "../Components/Images/TaxGenious.png"
import Gamezy from "../Components/Images/Gamezy.png"

import Github from "../Components/Github";
import GithubStreak from "../Components/GithubStreak";
import GithubStateCard from "../Components/GithubStateCard";
import GithubLanguage from "../Components/GithubLanguage";
const Projects = () => {
  return (
    <>
      <Container maxW={"4xl"} marginTop={50}>
        <Text
          className="project-title"
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
          Project Section
        </Text>
        <ProjectCard
          title="Food2Door"
          discription="Food2Door are passionate about delivering the most delicious and healthy food options to our customers."
          jsIcon={SiReact}
          htmlIcon={IoLogoJavascript}
          cssIcon={SiCss3}
          githubUrl="https://github.com/prajit96/food_app"
          netlifyUrl="https://food2door-prajit96.vercel.app/"
          banner={Food2Door}
        />
        <ProjectCard 
          title="FastDeal"
          discription="FastDeal is an e-commerce website that specializes in clothing. Users can sign up and browse through a variety of products, add them to their cart, and proceed to checkout. Payment and shipping information can be provided at checkout, and once the payment is processed, users will be redirected to the homepage."
          jsIcon={IoLogoJavascript}
          htmlIcon={SiHtml5}
          cssIcon={SiCss3}
          githubUrl="https://github.com/KoushikNiyogi/Snap-Deal-Clone"
          netlifyUrl="https://fast-deal.vercel.app/"
          banner={fastDeal}
        />
        <ProjectCard  
          title="TaxGenious"
          discription="TaxGenius is the cloned website of TaxTim , an online digital tax assistant that helps you to make tax pay easily. TaxGenius introduces a conversational approach with its simple and intuitive interface which helps individuals compute tax returns. Thus, you enjoy the same level of interaction as an engagement with a Tax consultant."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://github.com/Payalsahuj/elastic-behavior-9682"
          netlifyUrl="https://elastic-behavior-9682.vercel.app/"
          banner={taxgenious}
        />
        <ProjectCard 
          title="Gamezy"
          discription="GAMEZY is a online gaming and movies platform. it's provides to the user play online gaming and movies."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://github.com/prajit96/gamezy_movies_game_clone"
          netlifyUrl="https://comforting-chaja-8614b3.netlify.app/"
          banner={Gamezy}
        />
        <Github/>
        <GithubStreak/>
        <GithubStateCard/>
       </Container>
      <GithubLanguage/>
     </>
  );
};

export default Projects;