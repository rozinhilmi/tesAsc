import { HStack, Stack, Text } from "@chakra-ui/react"
import WarehouseIcon from '@mui/icons-material/Warehouse';
import WindowIcon from '@mui/icons-material/Window';
import WalletIcon from '@mui/icons-material/Wallet';
import { useSelector } from "react-redux";

export const Benefit = ()=> {
  const iconColor = useSelector((state)=>state.iconColor)
  const appName = useSelector((state)=>state.appName)
  
  return (
    <Stack width="100%" minHeight='90vh' padding='50px' backgroundColor='white'>

      <Text as='b' fontSize='20' color={iconColor}>Why Choose {appName}</Text>
      <HStack justifyContent='space-between' marginBottom='40px' alignItems='start' flexWrap='wrap' spacing={5}>
        <Text width='600px' lineHeight='100%' as='b' fontSize='34px'>Provides the most complete list of property</Text>
        <Text width='500px' color='gray'>Find the ideal property that is most sustainable for you. Starting from houses for sale that are minimalist. Apartment for sale that are exclusive</Text>
      </HStack>

      <HStack flexWrap='wrap' justifyContent='space-around'>
        <Stack className="benefit-box"  borderRadius='10px'  cursor='pointer' boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px' padding='25px' width='400px' spacing={5} margin='15px'>
          <WarehouseIcon sx={{ fontSize:'44px',color:iconColor }} />
          <Text lineHeight='100%' as='b' fontSize='30px' >Find your dream house</Text>
          <Text color='gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore labore sint deleniti nobis nihil nostrum velit quo autem id quas, voluptate numquam provident officiis, nam ex quis veritatis tempore debitis.</Text>
        </Stack>
        <Stack className="benefit-box"  borderRadius='10px'  cursor='pointer' boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px' padding='25px' width='400px' spacing={5} margin='15px'>
          <WindowIcon sx={{ fontSize:'44px',color:iconColor }} />
          <Text lineHeight='100%' as='b' fontSize='30px' >Find your dream house</Text>
          <Text color='gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore labore sint deleniti nobis nihil nostrum velit quo autem id quas, voluptate numquam provident officiis, nam ex quis veritatis tempore debitis.</Text>
        </Stack>
        <Stack className="benefit-box"  borderRadius='10px'  cursor='pointer' boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px' padding='25px' width='400px' spacing={5} margin='15px'>
          <WalletIcon sx={{ fontSize:'44px',color:iconColor }} />
          <Text lineHeight='100%' as='b' fontSize='30px' >Find your dream house</Text>
          <Text color='gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore labore sint deleniti nobis nihil nostrum velit quo autem id quas, voluptate numquam provident officiis, nam ex quis veritatis tempore debitis.</Text>
        </Stack>
      </HStack>

    </Stack>
  )
}
