import resume from "../../src/Components/utils/Resume.pdf";

import {
    Box,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import { NavLink } from "react-router-dom";
  
  const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/skills", title: "Skills" },
    { path: "/projects", title: "Projects" },
    { path: "/contacts", title: "Contacts" },
  ];
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Box bg={useColorModeValue("#03045e")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              bg={"#03045e"}
              icon={
                isOpen ? (
                  <CloseIcon color={"#00A3C4"} />
                ) : (
                  <HamburgerIcon color={"#00A3C4"} />
                )
              }
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"} ml={5}>
              <Box
                fontWeight="bold"
                fontSize={"27px"}
                _hover={{ color: "#00A3C4" }}
                color={"white"}
                // border={'1px solid red'}
                padding={"0px 2px 15px 2px"}
              >
                PS<span style={{ color: "#00A3C4", fontSize: "40px" }}>.</span>
              </Box>
            </HStack>
            <Flex alignItems={"center"}>
              <HStack mr={7} fontWeight={"bolder"} fontSize={"19px"}>
                <HStack
                  as={"nav"}
                  spacing={4}
                  display={{ base: "none", md: "flex" }}
                  // color={"#00A3C4"}
                >
                  {Links.map((link) => (
                    <NavLink
                      key={link.path}
                      px={2}
                      py={1}
                      rounded={"md"}
                      style={({ isActive }) => ({
                        color: isActive ? 'white' : '#00A3C4'
                      })}
                      to={link.path}
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </HStack>
              </HStack>
              <Menu>
                
                <a href={resume} download="Prajit-Santra-Resume" >
                <MenuButton
                  // as={Button}
                  color={"white"}
                  border={"1px solid #00A3C4"}
                  padding={"2px 35px 3px 35px"}
                  _hover={{ border: "1px solid white", color: "#00A3C4" }}
                  variant={"link"}
                  cursor={"pointer"}
                  borderRadius={"50px"}
                  fontSize={"20px"}
                  textDecoration={"none"}
                  mr={8}
                > Resume
                </MenuButton>
                
                   </a>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4} fontSize={"19px"} fontWeight={"bold"}>
                {Links.map((link) => (
                  <NavLink
                    key={link.path}
                    px={2}
                    py={1}
                    rounded={"md"}
                    style={({ isActive }) => ({
                      color: isActive ? 'white' : '#00A3C4'
                    })}
                    to={link.path}
                  >
                    {link.title}
                  </NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
        
      </>
    );
  }