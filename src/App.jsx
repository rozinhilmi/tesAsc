import { actions } from './store'
import { useDispatch, useSelector } from 'react-redux'
import { Stack, Text } from '@chakra-ui/layout'
import { Button, Table, Td, Tr } from '@chakra-ui/react'
import { NavbarMobile, NavbarWide, Sidebar } from './Components/Navbar';
import { Carousel } from './Components/Carousel';
import { Benefit } from './Components/Benefit';
import Properties from './Components/Properties';
import Blogs from './Components/Blogs';
import Footer from './Components/Footer';


function App() {
  const dispatch = useDispatch()
  const iconColor = useSelector((state)=>state.iconColor)
  const increment = ()=>{
    dispatch(actions.increment())
  }

  return (
    <div className="App" >

      <NavbarWide />
      <NavbarMobile />
      <Sidebar />
      
      <Carousel />
      <Benefit />  
      <Properties />
      <Blogs />
      <Stack className='carousel' width='100%' minHeight='40vh' backgroundImage='url(/assets/interior.jpg)' backgroundSize='cover' backgroundPosition='center' backgroundAttachment= 'fixed' backgroundRepeat= 'no-repeat'>
        <Stack className='carousel-stack' borderRadius='10px' backgroundColor='rgba(255, 255, 255, 0.42)' marginTop='auto' marginBottom='auto'>
          <Text fontSize='18px'>Find Home With Us</Text>
          <Text lineHeight='100%' as='b' fontSize='34px' marginBottom='30px'>Find the right house over 40,000 property options</Text>
          <Button width='200px' borderRadius='15px' backgroundColor='black'><Text color='white' as='b'>Find Now</Text></Button>
        </Stack>
      </Stack>
      
      <Footer />

      

    </div>
  )
}

export default App
