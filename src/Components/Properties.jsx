
import { useDispatch, useSelector } from 'react-redux'
import { HStack, Stack, Text } from '@chakra-ui/layout'

import { Button, Table, Td, Tr } from '@chakra-ui/react'



import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KingBedIcon from '@mui/icons-material/KingBed';
import ShowerIcon from '@mui/icons-material/Shower';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { actions } from '../store';
const Properties = () => {
  const iconColor = useSelector((state)=>state.iconColor)
  const properties = useSelector((state)=>state.properties)
  const dispatch = useDispatch()
  return (
    <Stack width="100%" minHeight='90vh' padding='50px' background='rgba(247, 251, 255, 1)'>
        
        <Text as='b' fontSize='20' color={iconColor}>Property</Text>
        <HStack justifyContent='space-between' marginBottom='40px' alignItems='start' flexWrap='wrap' spacing={5}>
          <Text width='600px' lineHeight='100%' as='b' fontSize='34px'>Property in Cities and Provinces in Indonesia</Text>
          <Button variant='ghost'>
            <Text color='gray'>Explore all properties</Text>
            <ArrowForwardIcon sx={{ color:'gray' }} />
          </Button>
          
        </HStack>

        <HStack spacing={5} justifyContent='space-around' flexWrap='wrap'>
        {properties.map((property,index)=>
        
          <HStack key={index} flexWrap='wrap' justifyContent='space-around'>
            <Stack position='relative' cursor='pointer' boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px' borderRadius='10px' width='250px' height='auto' marginBottom='30px'>
              <Button onClick={()=>dispatch(actions.setLiked({index:index,value:!property.isLiked}))} position='absolute' variant='solid' right='0' backgroundColor={property.isLiked ? 'pink' : 'white'}>
                <FavoriteBorderIcon />
              </Button>
              <img src="/assets/carousel.jpg" style={{ width:'100%',aspectRatio:'4/3',objectFit:'cover',borderRadius:'10px' }} alt="" />
              <Stack padding='10px'>
                <HStack flexWrap='wrap'>
                  {property.categories.map(category=>
                    <Button>
                      <Text fontSize='12px' color='gray'>{category}</Text>
                    </Button>
                  )}
                  
                </HStack>
                <Text fontSize='18px' as='b'>${property.price}</Text>
                <Text fontSize='12px' color='gray'>{property.description}</Text>
                <HStack flexWrap='wrap'>
                  <HStack>
                    <KingBedIcon sx={{ color:iconColor }} />
                    <Text fontSize='12px' color='gray'>{property.totalBedroom} bedroom</Text>
                  </HStack>
                  <HStack>
                    <ShowerIcon sx={{ color:iconColor }} />
                    <Text fontSize='12px' color='gray'>{property.totalBathRoom} bathroom</Text>
                  </HStack>
                </HStack>
              </Stack>
            </Stack>
          </HStack>
        )}
        </HStack>

        
      </Stack>
  )
}

export default Properties