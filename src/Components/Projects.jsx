import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Flex,
  Button,
  Container
} from '@chakra-ui/react';
import Github from './Github';
import GithubStreak from './GithubStreak';
import GithubStateCard from './GithubStateCard';
import GithubLanguage from './GithubLanguage';


const TechTags = (props) => {
  return (
    <HStack spacing={2} mt={'-15px'} >
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

// 1st project

const handleEverythingInMe = () => {
  window.open("https://stellular-duckanoo-264787.netlify.app/");
}

const handleEverythingInMeGithub = () => {
  window.open('https://github.com/prajit96/muddled-can-9800');
}

// 2nd project

const handleFastDeal = () => {
  window.open('https://fast-deal.vercel.app/')
}

const handleFastDealGithub = () => {
  window.open('https://github.com/KoushikNiyogi/Snap-Deal-Clone')
}

// 3rd project

const handleTaxGenius = () => {
  window.open('https://elastic-behavior-9682.vercel.app/')
}

const handleTaxGeniusGithub = () => {
  window.open('https://github.com/Payalsahuj/elastic-behavior-9682')
}




const Projects = () => {
  return (
    <>
    <Container maxW={'7xl'} p="12" bg={'#ffffff'} >
    {/* 1st Project  */}
      <Heading as="h1" _hover={{color:'#00A3C4'}} color={'#03045e'} pt={'13px'}>Project Section</Heading>
      <div id='projects' >
      <Box className='.project-card'
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              
              <Image
                  borderRadius="lg"
                  transform="scale(1.0)"
                  // border={'2px solid #00A3C4'}
                  src={
                    'https://user-images.githubusercontent.com/115496998/213989666-fe253f37-d879-4663-a16e-2879163ff837.png'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading as="h2" mb={'35px'} textAlign={'left'} _hover={{color:'#03045e'}} color={'#00A3C4'} fontSize={'30px'}>
          Everything in ME
          </Heading>

          <TechTags tags={['JavaScript', 'HTML', 'CSS', 'Rest API']} mb={'10px'} border={'1px solid green'}/>
          <Text
            as="p"
            margin="10px 0px 15px 0px"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign={'left'} alignContent={'center'}>
            *Everything in ME* is India’s first hyper-local online platform that enables customers and local merchants to discover and engage with each other.
          </Text>
          <Flex >
            <Button color={"#03045e"}
                border={"1px solid #00A3C4"}
                padding={"2px 35px 3px 35px"}
                _hover={{ border: "1px solid white", color: "#00A3C4",backgroundColor:'#03045e' }}
                variant={"link"}
                cursor={"pointer"}
                borderRadius={"50px"}
                fontSize={"20px"}
                textDecoration={"none"}
                onClick={handleEverythingInMeGithub}
                mr={8}>Github</Button>
            <Button
            color={"#03045e"}
            border={"1px solid #00A3C4"}
            padding={"2px 35px 3px 35px"}
            _hover={{ border: "1px solid white", color: "#00A3C4", backgroundColor:'#03045e'}}
            variant={"link"}
            cursor={"pointer"}
            borderRadius={"50px"}
            fontSize={"20px"}
            textDecoration={"none"}
            onClick={handleEverythingInMe}
            mr={8}>Live</Button>
            
          </Flex>
        </Box>
      </Box>
      
      {/* 2nd Project */}
      
      <Box className='.project-card'
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              
              <Image
                  borderRadius="lg"
                  transform="scale(1.0)"
                  src={
                    'https://github.com/KoushikNiyogi/Snap-Deal-Clone/raw/main/fast-deal/src/assets/homepageSS.png'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading as="h2" mb={'35px'} textAlign={'left'} _hover={{color:'#03045e'}} color={'#00A3C4'} fontSize={'30px'}>
          FastDeal
          </Heading>

          <TechTags tags={['JavaScript', 'HTML', 'CSS', 'ReactJS', 'Chakraui']} mb={'10px'} border={'1px solid green'}/>
          <Text
            as="p"
            margin="10px 0px 15px 0px"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign={'left'} alignContent={'center'}>
            FastDeal is an e-commerce website that specializes in clothing. Users can sign up and browse through a variety of products, add them to their cart, and proceed to checkout. Payment and shipping information can be provided at checkout, and once the payment is processed, users will be redirected to the homepage.
          </Text>
          <Flex >
            <Button color={"#03045e"}
                border={"1px solid #00A3C4"}
                padding={"2px 35px 3px 35px"}
                _hover={{ border: "1px solid white", color: "#00A3C4",backgroundColor:'#03045e' }}
                variant={"link"}
                cursor={"pointer"}
                borderRadius={"50px"}
                fontSize={"20px"}
                textDecoration={"none"}
                onClick={handleFastDealGithub}
                mr={8}>Github</Button>
            <Button
            color={"#03045e"}
            border={"1px solid #00A3C4"}
            padding={"2px 35px 3px 35px"}
            _hover={{ border: "1px solid white", color: "#00A3C4", backgroundColor:'#03045e'}}
            variant={"link"}
            cursor={"pointer"}
            borderRadius={"50px"}
            fontSize={"20px"}
            textDecoration={"none"}
            onClick={handleFastDeal}
            mr={8}>Live</Button>
            
          </Flex>
        </Box>
      </Box>

      {/* 3rd Project */}
      
      <Box className='.project-card'
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              
              <Image
                  borderRadius="lg"
                  transform="scale(1.0)"
                  src={
                    'https://user-images.githubusercontent.com/115584065/236942350-19b18640-92db-4deb-98c4-21e0feece481.png'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading as="h2" mb={'35px'} textAlign={'left'} _hover={{color:'#03045e'}} color={'#00A3C4'} fontSize={'30px'}>
          TaxGenius
          </Heading>

          <TechTags tags={['JavaScript', 'HTML', 'CSS', 'Rest API']} mb={'10px'} border={'1px solid green'}/>
          <Text
            as="p"
            margin="10px 0px 15px 0px"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign={'left'} alignContent={'center'}>
            TaxGenius is the cloned website of TaxTim , an online digital tax assistant that helps you to make tax pay easily. TaxGenius introduces a conversational approach with its simple and intuitive interface which helps individuals compute tax returns. Thus, you enjoy the same level of interaction as an engagement with a Tax consultant.
          </Text>
          <Flex >
            <Button color={"#03045e"}
                border={"1px solid #00A3C4"}
                padding={"2px 35px 3px 35px"}
                _hover={{ border: "1px solid white", color: "#00A3C4",backgroundColor:'#03045e' }}
                variant={"link"}
                cursor={"pointer"}
                borderRadius={"50px"}
                fontSize={"20px"}
                textDecoration={"none"}
                onClick={handleTaxGeniusGithub}
                mr={8}>Github</Button>
            <Button
            color={"#03045e"}
            border={"1px solid #00A3C4"}
            padding={"2px 35px 3px 35px"}
            _hover={{ border: "1px solid white", color: "#00A3C4", backgroundColor:'#03045e'}}
            variant={"link"}
            cursor={"pointer"}
            borderRadius={"50px"}
            fontSize={"20px"}
            textDecoration={"none"}
            onClick={handleTaxGenius}
            mr={8}>Live</Button>
            
          </Flex>
        </Box>
      </Box>
       {/* project-4 */}
      <Box className='.project-card'
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              
              <Image
                  borderRadius="lg"
                  transform="scale(1.0)"
                  src={
                    'https://user-images.githubusercontent.com/115584065/236942350-19b18640-92db-4deb-98c4-21e0feece481.png'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
            </Link>
          </Box>
          
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          
          <Heading as="h2" mb={'35px'} textAlign={'left'} _hover={{color:'#03045e'}} color={'#00A3C4'} fontSize={'30px'}>
          TaxGenius
          </Heading>

          <TechTags tags={['JavaScript', 'HTML', 'CSS', 'Rest API']} mb={'10px'} border={'1px solid green'}/>
          <Text
            as="p"
            margin="10px 0px 15px 0px"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg" textAlign={'left'} alignContent={'center'}>
            TaxGenius is the cloned website of TaxTim , an online digital tax assistant that helps you to make tax pay easily. TaxGenius introduces a conversational approach with its simple and intuitive interface which helps individuals compute tax returns. Thus, you enjoy the same level of interaction as an engagement with a Tax consultant.
          </Text>
          <Flex >
            <Button color={"#03045e"}
                border={"1px solid #00A3C4"}
                padding={"2px 35px 3px 35px"}
                _hover={{ border: "1px solid white", color: "#00A3C4",backgroundColor:'#03045e' }}
                variant={"link"}
                cursor={"pointer"}
                borderRadius={"50px"}
                fontSize={"20px"}
                textDecoration={"none"}
                onClick={handleTaxGeniusGithub}
                mr={8}>Github</Button>
            <Button
            color={"#03045e"}
            border={"1px solid #00A3C4"}
            padding={"2px 35px 3px 35px"}
            _hover={{ border: "1px solid white", color: "#00A3C4", backgroundColor:'#03045e'}}
            variant={"link"}
            cursor={"pointer"}
            borderRadius={"50px"}
            fontSize={"20px"}
            textDecoration={"none"}
            onClick={handleTaxGenius}
            mr={8}>Live</Button>
            
          </Flex>
        </Box>
      </Box>
      </div>
      

    </Container>
    <Github/>
    <GithubStreak/>
    <GithubStateCard/>
    <GithubLanguage/>
    </>
  );
};

export default Projects;