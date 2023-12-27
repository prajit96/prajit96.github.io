import { Container, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "../Components/ProjectCard";
import { IoLogoJavascript } from "react-icons/io";
import { SiAngular, SiBootstrap, SiOpenai, SiTypescript } from "react-icons/si";
import { SiNetlify } from 'react-icons/si'
import { SiChakraui } from 'react-icons/si'
import { SiReact } from 'react-icons/si'

import CodeConverter from "../Components/Images/CodeConverter.png"
import BookHavenX from "../Components/Images/BookHavenX.png"
import Food2Door from "../Components/Images/Food2Door.png"
import fastDeal from "../Components/Images/FastDeal.png"
import taxgenious from "../Components/Images/TaxGenious.png"
import Gamezy from "../Components/Images/Gamezy.png"

import Github from "../Components/Github";
import GithubStreak from "../Components/GithubStreak";
import GithubStateCard from "../Components/GithubStateCard";
import GithubLanguage from "../Components/GithubLanguage";
import { FaNodeJs } from "react-icons/fa";
const Projects = () => {
  return (
    <>
      <Container maxW={"4xl"} marginTop={60}>
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
          title="Code Converter App"
          discription="Developed a web-based Code Converter App to facilitate seamless code conversion between various programming languages"
          jsIcon={SiReact}
          htmlIcon={FaNodeJs}
          cssIcon={SiOpenai}
          githubUrl="https://github.com/prajit96/Code_converter_app"
          netlifyUrl="https://code-converter-app-prajit96.vercel.app/"
          banner={CodeConverter}
        />
        <ProjectCard
          title="BookHavenX"
          discription="BookHavenX is a dynamic online platform seamlessly merging an extensive bookstore with a vibrant reading community. Explore, engage, and connect with fellow book enthusiasts while enjoying a personalized and immersive book-shopping experience."
          jsIcon={SiAngular}
          htmlIcon={SiTypescript}
          cssIcon={SiOpenai}
          githubUrl="https://github.com/prajit96/BookHavenX-online-book-store"
          netlifyUrl="https://bookhavenx.vercel.app/"
          banner={BookHavenX}
        />
        <ProjectCard
          title="Food2Door"
          discription="Food2Door are passionate about delivering the most delicious and healthy food options to our customers."
          jsIcon={SiReact}
          htmlIcon={IoLogoJavascript}
          cssIcon={SiChakraui}
          githubUrl="https://github.com/prajit96/food_app"
          netlifyUrl="https://food2door-prajit96.vercel.app/"
          banner={Food2Door}
        />
        <ProjectCard 
          title="FastDeal"
          discription="FastDeal is a collaborative e-commerce website project, inspired by Snapdeal, with a focus on clothing. The platform provides users with a seamless shopping experience, allowing them to sign up, explore a diverse range of products, add items to their cart, and complete the checkout process."
          jsIcon={SiReact}
          htmlIcon={IoLogoJavascript}
          cssIcon={SiBootstrap}
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
          githubUrl="https://github.com/prajit96/Taxtim-tax-asssitant-clone"
          netlifyUrl="https://elastic-behavior-9682.vercel.app/"
          banner={taxgenious}
        />
        <ProjectCard 
          title="Gamezy"
          discription="Gamezy is an immersive online gaming and movie streaming platform, meticulously crafted to deliver a seamless blend of interactive gaming and entertainment."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={FaNodeJs}
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