import { Button, Flex } from '@chakra-ui/react';
import { FiDownload, FiGithub } from "react-icons/fi";

export default function GithubResumeBtn(props) {
  return (
    <Flex h="20vh" justifyContent="left" gap={10} alignItems="left" width={'40%'} mt={'16px'}>
      <Button
        {...props}
        /* flex={1} */
       
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
            <Flex justify={"space-between"} gap={2} align={"center"}>
                <FiDownload />
                Resume
            </Flex>
        
      </Button>

      <Button
        {...props}
        /* flex={1} */
        
        fontSize={'sm'}
        rounded={'full'}
        bg={'blue.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'blue.500',
        }}
        _focus={{
          bg: 'blue.500',
        }}>
       <Flex justify={"space-between"} gap={3} align={"center"}>
            <FiGithub />
            GitStat
        </Flex>
      </Button>
    </Flex>
  );
}