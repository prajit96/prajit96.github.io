import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import resume from "../../src/Components/utils/Resume.pdf";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import '../Components/Resume.css'
import { NavLink } from 'react-router-dom';
import { SlDocs } from "react-icons/sl";
import "./Navbar.css";
import Name from "./Name";
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="nav-menu">
      <Box bg={useColorModeValue("white", "#1a202c")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={{sm:"space-around",lg:"space-around"}}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            fontSize={{ base: "lg", md: "lg", lg: "2x1" }}
            fontWeight={"bold"}
          >
            <Box>
              <Name />
            </Box>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              <Button className="nav-link home">
                <a href="#home">
                  {" "}
                  <b>Home</b>
                </a>
              </Button>

              <Button className="nav-link about">
                <a href="#about">
                  <b>About</b>
                </a>
              </Button>

              <Button className="nav-link skills">
                <a href="#skills">
                  {" "}
                  <b>Skills</b>
                </a>
              </Button>

              <Button className="nav-link projects">
                <a href="#projects">
                  <b>Projects</b>
                </a>
              </Button>

              <Button className="nav-link contact">
                <a href="#contact">
                  <b>Contact</b>
                </a>
              </Button>
            </HStack>
          </HStack>
          <Flex alignItems={"center"} columnGap={2}>
             <Button
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />} 
             </Button> 
            <NavLink to="https://drive.google.com/file/d/1Pk27NS0okJla8RlboCOtZfzXNIIYWWn-/view?usp=sharing">
            <button
            id="resume-button-1"
            className="nav-link resume"
          >
            <SlDocs/>
            <a href={resume} download={"Prajit-Santra-Resume"}>RESUME</a>
          </button>
        </NavLink>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Button className="nav-link home">
                <a href="#home">
                  {" "}
                  <b>Home</b>
                </a>
              </Button>

              <Button className="nav-link about">
                <a href="#about">
                  <b>About</b>
                </a>
              </Button>

              <Button className="nav-link skills">
                <a href="#skills">
                  {" "}
                  <b>Skills</b>
                </a>
              </Button>

              <Button className="nav-link projects">
                <a href="#projects">
                  <b>Projects</b>
                </a>
              </Button>

              <Button className="nav-link contact">
                <a href="#contact">
                  <b>Contact</b>
                </a>
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}