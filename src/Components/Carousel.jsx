import { Button, HStack, Stack, Text } from "@chakra-ui/react"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from "react-redux";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import SearchIcon from '@mui/icons-material/Search';

export const Carousel = ()=> {
  const iconColor = useSelector((state)=>state.iconColor)
  return (
    <Stack className='carousel' width='100%' minHeight='95vh' backgroundImage='url(/assets/carousel.jpg)'  backgroundSize='cover'  backgroundPosition='center' >
      <Stack className='carousel-stack' borderRadius='10px' backgroundColor='rgba(255, 255, 255, 0.92)' marginTop='auto' marginBottom='auto'>
        <Text lineHeight='100%' as='b' fontSize='34px'>Discover a place</Text>
        <Text lineHeight='100%' as='b' fontSize='34px' marginBottom='30px'>You will love to live</Text>

        <Text>Connect with more than 75 million renter looking for new homes using our comprehensive marketing platform </Text>

        <HStack >
          <HStack spacing={10} flexWrap='wrap' className='carousel-layer' justifyContent='space-between' padding='20px' borderRadius='10px' backgroundColor='white' marginBottom='30px' marginTop='30px'>
            <HStack>
              <LocationOnIcon sx={{ color:iconColor }} />
              <Stack>
                <Text as='b' lineHeight='0%'>Location</Text>
                <Text color='gray'>Bali Indonesia</Text>
              </Stack>
            </HStack>
            
            <HStack>
              <AttachMoneyIcon sx={{ color:iconColor }} />
              <Stack>
                <Text as='b' lineHeight='0%'>Price</Text>
                <Text color='gray'>$5,000 - $10,000</Text>
              </Stack>
            </HStack>
            
            <HStack>
              <WarehouseIcon sx={{ color:iconColor }} />
              <Stack>
                <Text as='b' lineHeight='0%'>Type of Home</Text>
                <Text color='gray'>Apartment</Text>
              </Stack>
            </HStack>
            <Button colorScheme='blue'>
              <SearchIcon />
            </Button>
          </HStack>
          
        </HStack>
        

        <HStack spacing={10}>
          <HStack>
            <Text lineHeight='100%' as='b' fontSize='24px'>1500+</Text>
            <Text>Property ready</Text>
          </HStack>
          <HStack>
            <Text lineHeight='100%' as='b' fontSize='24px'>500+</Text>
            <Text>Happy Customer</Text>
          </HStack>
          
        </HStack>
        
      </Stack>
    </Stack>
  )
}