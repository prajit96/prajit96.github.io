import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
    Box,
  } from '@chakra-ui/react';
  import Contacts from './Contacts';
  import GithubResumeBtn from './GithubResumeBtn';
  import Projects from './Projects';
  import Skills from './Skills';
  import About from './About';
  
  export default function Homepage() {
    return (
      <>
      <div id='home'>
      <Container maxW={'5xl'} >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={300} justifyContent={'space-between'} py={100}>
          <Stack width={'700px'} marginLeft={'0px'}>
            <Heading
        
              color={'blue.400'}
           
              fontSize={'45px'}
            
            textAlign={'left'}
            mt={'20px'}
           
              rounded={'md'}>
              Prajit Kumar Santra 👋
              
            </Heading>
            <Heading fontSize={'25px'} textAlign={'left'}>Full Stack Web Developer</Heading>
            <Text color={'gray.500'} fontSize={'lg'} width={'35rem'} textAlign={'left'} py={'25px'}>
              Hey! I am MERN Stack Developer from India, and I'm very passsionate and dedicated to my work.</Text>
            <Stack
              spacing={2}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <GithubResumeBtn/>
            </Stack>
          </Stack>
          <Box alignItems={'centet'} justifyContent={'center'}>
          <Flex size={'100px'} >    
            <Image className='home-img'
              rounded={'md'}
              alt={'feature image'}
              borderRadius={'80%'}
              
              src={
                'https://avatars.githubusercontent.com/u/115496998?v=4'
              }
            />
          </Flex>
          </Box>
        </SimpleGrid>
      </Container>
      </div>
      
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      {/* <Footer/> */}
      </>
    );
  }