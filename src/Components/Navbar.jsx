import { Button, HStack, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useSelector } from "react-redux";

export const NavbarWide = ()=>{
  const appName = useSelector((state)=>state.appName)
  return(
    <div className='navbar-wide'>
      <Link to="/">
        <HStack>
          <AcUnitIcon />
          <Text as='b' fontSize='18px'>{appName}</Text>
        </HStack>
      </Link>
      
      <HStack spacing={4}>
        <Link to='#properties'><Button variant='ghost'><Text color='gray' as='b'>For Sell</Text></Button></Link>
        <Link><Button variant='ghost'><Text color='gray' as='b'>For rent</Text></Button></Link>
        <Link><Button variant='ghost'><Text color='gray' as='b'>Blogs</Text></Button></Link>
        <Link><Button variant='ghost'><Text color='gray' as='b'>KPR</Text></Button></Link>
        <Link to='/ListUser'><Button variant='ghost'><Text color='gray' as='b'>List Users API</Text></Button></Link>
      </HStack>

      <HStack>
        <Link to='/Login'>
          <Button colorScheme='blue' borderRadius='15'>Login</Button>
        </Link>
        <Link to='/SignUp'>
          <Button colorScheme='blue' borderRadius='15'>SignUp</Button>
        </Link>
      </HStack>
      
      
    </div>
  )
}

export const NavbarMobile = ()=>{
  return (
    <div className="navbar-mobile">
      <HStack>
        <AcUnitIcon />
        <Text as='b' fontSize='18px'>Olinarom</Text>
      </HStack>
      <Button variant='outline' onClick={()=>document.getElementsByClassName('sidebar')[0].style.transform = 'translateX(0%)'}>
        <MenuIcon color='black'/>
      </Button>
    </div>
  )
}

export const Sidebar = ()=> {
  return (
    <div className="sidebar">
      <HStack justifyContent='space-between' alignItems='center'>
        <HStack height='1.5cm'>
          <AcUnitIcon />
          <Text as='b' fontSize='18px'>Olinarom</Text>
        </HStack>
        <Button variant='outline' onClick={()=>document.getElementsByClassName('sidebar')[0].style.transform = 'translateX(-100%)'}>
          <HighlightOffIcon color='black'/>
        </Button>
      </HStack>
      <Stack spacing={4}>
        <Link><Button width='100%' variant='ghost'><Text color='gray' as='b'>For Sell</Text></Button></Link>
        <Link><Button width='100%' variant='ghost'><Text color='gray' as='b'>For rent</Text></Button></Link>
        <Link><Button width='100%' variant='ghost'><Text color='gray' as='b'>New Property</Text></Button></Link>
        <Link><Button width='100%' variant='ghost'><Text color='gray' as='b'>Blogs</Text></Button></Link>
        <Link><Button width='100%' variant='ghost'><Text color='gray' as='b'>KPR</Text></Button></Link>
        <Link to='/ListUser'><Button width='100%' variant='ghost'><Text color='gray' as='b'>List Users API</Text></Button></Link>
        <HStack justifyContent='center'>
          <Link to='/Login'>
            <Button colorScheme='blue' borderRadius='15'>Login</Button>
          </Link>
          <Link to='/SignUp'>
            <Button colorScheme='blue' borderRadius='15'>SignUp</Button>
          </Link>
        </HStack>
      </Stack>
    </div>
  )
}