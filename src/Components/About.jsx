import React from "react";
import "./About.css";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Heading, Button } from "@chakra-ui/react";
import resume from "../../src/Components/utils/Resume.pdf"
const handleDownloadResume = () => {
  
}

const About = () => {
  return (
    <>
      <Heading as="h1" _hover={{color:'#00A3C4'}} color={'#03045e'} pt={'13px'}>About Me</Heading>
      <section id="#about">
        <div className="section" data-aos="fade-right">
        
          <div className="about">
            <div className="about_logoCont">
              <img
                src= "https://avatars.githubusercontent.com/u/115496998?v=4"
                alt="Images"
              />
            </div>
            <div className="about_dataCont" style={{textAlign:"left", fontWeight:'bolder', color:'#4A5568'}}>
              <h4 >
                Hi Everyone, I am{" "}
                <span style={{color:'#00A3C4'}}>Prajit Kumar Santra </span> from{" "}Kolkata, West Bengal. A passionate Full Stack web developer specializing in {" "}
                  <span style={{color:'#00A3C4'}}>MERN Stack from Masai School</span>. Having excellent
                  problem-solving skills and also perform well in a team. 

              </h4>
              <h1 style={{fontSize:'23px', marginTop:'13px', color:'#03045e'}}>
                Here are a Few Highlights
              </h1>
              
              <div style={{display:'flex', marginTop:'2px'}}>
               <BsBoxArrowInRight style={{display:'flex', marginTop:'5px', color:'#03045e', width:'60px', height:'20px', textAlign:'center'}}/>
              <h4 style={{fontSize:'20px', color:'#00A3C4', fontWeight:'lighter'}} >Full Stack Web Development</h4>
              </div>

              <div style={{display:'flex', marginTop:'2px'}}>
               <BsBoxArrowInRight style={{display:'flex', marginTop:'5px', color:'#03045e', width:'60px', height:'20px', textAlign:'center'}}/>
              <h4 style={{fontSize:'20px', color:'#00A3C4', fontWeight:'lighter'}} >1200+ Hours of Coding</h4>
              </div>

              <div style={{display:'flex', marginTop:'2px'}}>
               <BsBoxArrowInRight style={{display:'flex', marginTop:'5px', color:'#03045e', width:'60px', height:'20px', textAlign:'center'}}/>
              <h4 style={{fontSize:'20px', color:'#00A3C4', fontWeight:'lighter'}} >300+ Hours of DSA</h4>
              </div>

              <div style={{display:'flex', marginTop:'2px'}}>
               <BsBoxArrowInRight style={{display:'flex', marginTop:'5px', color:'#03045e', width:'60px', height:'20px', textAlign:'center'}}/>
              <h4 style={{fontSize:'20px', color:'#00A3C4', fontWeight:'lighter'}} >50+ Mini Projects</h4>
              </div>

              <div style={{display:'flex', marginTop:'2px'}}>
               <BsBoxArrowInRight style={{display:'flex', marginTop:'5px', color:'#03045e', width:'60px', height:'20px', textAlign:'center'}}/>
              <h4 style={{fontSize:'20px', color:'#00A3C4', fontWeight:'lighter'}} >5+ Big Projects</h4>
              </div>

              <div style={{display:'flex', marginTop:'2px'}}>
               <BsBoxArrowInRight style={{display:'flex', marginTop:'5px', color:'#03045e', width:'60px', height:'20px', textAlign:'center'}}/>
              <h4 style={{fontSize:'20px', color:'#00A3C4', fontWeight:'lighter'}} >Soft Skill Development</h4>
              </div>
              <a href={resume} download="Prajit-Santra-Resume"> 
              <Button color={"#03045e"}
                border={"1px solid #03045e"}
                backgroundColor={'#00A3C4'}
                padding={"2px 35px 3px 35px"}
                _hover={{ border: "1px solid white", color: "#00A3C4",backgroundColor:'#03045e' }}
                variant={"link"}
                cursor={"pointer"}
                borderRadius={"50px"}
                fontSize={"20px"}
                textDecoration={"none"}
                onClick={handleDownloadResume}
                mt={'20px'}
                height={'40px'}
                with={'80px'}
                mr={8}>Resume</Button>
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;