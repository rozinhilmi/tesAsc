import { useDispatch, useSelector } from 'react-redux'
import { HStack, Stack, Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Footer = () => {
  const iconColor = useSelector((state)=>state.iconColor)
  const appName = useSelector((state)=>state.appName)
  return (
    <Stack width='100%' minHeight='50vh' backgroundColor='black' padding='50px'>
        
      <HStack justifyContent='space-between' flexWrap='wrap'>
        <Stack width='400px' marginBottom='50px' marginTop='50px'>
          <HStack>
            <AcUnitIcon sx={{ color:'white' }} />
            <Text as='b' color='rgba(201, 201, 201, 1)'>{appName}</Text>
          </HStack>
          
          <Text color='rgba(201, 201, 201, 1)'>Jl Raya Meruya lir no 88</Text>
          <Text color='rgba(201, 201, 201, 1)'>Kebon Jeruk, Jakarta Barat</Text>
          <Text color='rgba(201, 201, 201, 1)'>Jakarta 1166, Indonesia</Text>
        </Stack>
        <Stack width='500px' borderBottom='none' spacing={5}>
          <HStack spacing={15} justifyContent='space-between'>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Home</Text></Link>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Blogs</Text></Link>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Privacy and Policy</Text></Link>
          </HStack>
          <HStack spacing={15} justifyContent='space-between'>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Home</Text></Link>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Blogs</Text></Link>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Privacy and Policy</Text></Link>
          </HStack>
          <HStack spacing={15} justifyContent='space-between'>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Home</Text></Link>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Blogs</Text></Link>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Privacy and Policy</Text></Link>
          </HStack>
          <HStack spacing={15} justifyContent='space-between'>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Home</Text></Link>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Blogs</Text></Link>
            <Link><Text fontSize='18px'  color='rgba(201, 201, 201, 1)'>Privacy and Policy</Text></Link>
          </HStack>
        </Stack>
        
      </HStack>
    </Stack>

  )
}

export default Footer