import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Input,
  ButtonGroup,
  Divider,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon ,MoonIcon,SunIcon} from '@chakra-ui/icons';
// import {Link as }
import { Link as RouterLink } from "react-router-dom";
import source from "../Images/img1.png";
import Source2 from "../Images/img2.png";
import {
    MDBContainer,
    MDBNavbar,
    MDBBtn,
    MDBInputGroup
  } from 'mdb-react-ui-kit';
import BelowNavbar from './BelowNavbar';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthCotext';
import { useEffect } from 'react';
import { useState } from 'react';
import { CartContext } from '../Contexts/CartContext';
import { Navigate } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import myImage from "../Images/subodh.png";

const Links = ['𝐵𝑒 𝒻𝒶𝓈𝒽𝒾𝑜𝓃𝒶𝒷𝓁𝑒', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    fontSize={"20"}
    href={'#'}>
    {children}
  </Link>
);

const getData = async (val) => {
  if(val){
    const res = await fetch(`https://test-api-2.onrender.com/products?q=${val}`);
    const data = await res.json();
    return data; 
  }

}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const {authState,loginUser,logoutUser} = useContext(AuthContext);
  // const { searchData,setSearchData } = useContext(SearchContext);
  const [inputData,setInputData] = useState("");
  const {searchData,setSearchData} = useContext(CartContext);
  // const data

  const fetchedData =async (inputData) => {
    const result = await getData(inputData);
    // console.log(result);
    setSearchData(result);
  }

 useEffect(() => {
  fetchedData(inputData);
 },[inputData]);
console.log(inputData);

// if(inputData !== ""){
//  <Navigate to={"/products"} />
// }
  

  return (
    <>
      <Image src={Source2}  alt={"Error"}/>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <RouterLink to="/">
              <Image w={"200px"} height={"66px"} src={source} alt={"error"} />
              </RouterLink>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          {/* <ButtonGroup bg={"blue"} border={"1px solid blue"} tag="form" className='d-flex w-auto mb-3'>
            <Input border={"none"} w={"300px"} className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
            <Button border={"none"} outline>Search</Button>
           </ButtonGroup> */}
           <Flex w={"50%"}>
           <input onChange={(e) => setInputData(e.target.value)} placeholder='Search Here' style={{width: "100%",border:"1px solid grey"}} _focus={"none"} borderRadius={"none"} />
           <Button border={"1px solid blue"} borderRadius={"none"}>Search</Button>
           </Flex>

           <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
         
         <RouterLink to={"/cart"}>
         <Image  h={"350px"} w={"35px"} size={'sm'} src={"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1sYWJlbD0iTXkgU2hvcHBpbmcgQ2FydCIgcm9sZT0iaW1nIiBmb2N1c2FibGU9ImZhbHNlIj48cGF0aCBkPSJNMTQuNzggNi40OVY1LjE4NUMxNC43OCAyLjYwMSAxMi42MzcuNSAxMCAuNVM1LjIyIDIuNjAxIDUuMjIgNS4xODR2MS4zMDdIMHY3Ljk3M0MwIDE3LjI0IDIuMzU3IDE5LjUgNS4yNTQgMTkuNWg5LjQ5M2MyLjg5NyAwIDUuMjUzLTIuMjYgNS4yNTMtNS4wMzZWNi40OXpNNi4yMiA1LjE4NUM2LjIyIDMuMTUzIDcuOTE0IDEuNSAxMCAxLjVzMy43OCAxLjY1MyAzLjc4IDMuNjg0djEuMzA3SDYuMjJ6TTE5IDE0LjQ2NGMwIDIuMjI1LTEuOTA4IDQuMDM2LTQuMjUzIDQuMDM2SDUuMjU0QzIuOTA4IDE4LjUgMSAxNi42OSAxIDE0LjQ2NFY3LjQ5aDQuMjJ2Mi40MjdoMVY3LjQ5MWg3LjU2djIuNDI3aDFWNy40OTFIMTl6Ii8+PC9zdmc+"}  alt={"error"}/>
         </RouterLink>
          
          <Flex  alignItems={'center'}>
            <Menu  > 
                {/* <Box> */}
             {/* </Box> */}

              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}> 
                {authState.isAuth ? (<Avatar
                  size={'md'}
                  src={
                    myImage
                  }
                />) : (   
                    <FaUserAlt marginLeft={"20px"} size={"25px"} />    
                )}
                
              </MenuButton>
              <MenuList >
                {/* <MenuItem> */}
                <MenuItem>
                   <RouterLink to="/login">

                       Login
                    
                    </RouterLink>
             </MenuItem>
             <MenuItem onClick={logoutUser}>
                  LogOut
             </MenuItem>
                {/* <MenuItem>SignUP</MenuItem> */}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      {/* <Box p={4}> */}
        {/* Main Content Here */}
        {/* <BelowNavbar/> */}
    {/* </Box> */}
    </>
  );
}