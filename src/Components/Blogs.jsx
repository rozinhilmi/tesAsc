
import { useDispatch, useSelector } from 'react-redux'

import { HStack, Stack, Text } from '@chakra-ui/layout'
import { Button, Table, Td, Tr } from '@chakra-ui/react'



import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Blogs = () => {
  const iconColor = useSelector((state)=>state.iconColor)
  const blogs = useSelector((state)=>state.blogs)
  return (
    <Stack width="100%" minHeight='90vh' padding='50px' backgroundColor='white'>
      <Text as='b' fontSize='20' color={iconColor}>Blog</Text>
      <HStack justifyContent='space-between' marginBottom='40px' alignItems='start' flexWrap='wrap' spacing={5}>
        <Text width='600px' lineHeight='100%' as='b' fontSize='34px'>Article Releated to Aestetic Home Design</Text>
        <Button variant='ghost'>
          <Text color='gray'>Explore all properties</Text>
          <ArrowForwardIcon sx={{ color:'gray' }} />
        </Button>
      </HStack>
      <div alignItems='flex-start' className='blogs'>
        <Stack className='blog-primary'>
          <img src="/assets/carousel.jpg" style={{ width:'90%',aspectRatio:'5/3',objectFit:'cover',borderRadius:'10px' }} alt="" />
          <Text color='gray'>August 10, 2022</Text>
          <Text fontSize='24px' as='b'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, non.</Text>
          <Text color='gray'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet exercitationem necessitatibus natus, laudantium nesciunt. Maxime quod consectetur impedit consequatur ratione, quas quaerat doloremque labore natus unde repudiandae ipsa ipsam?</Text>
        </Stack>
        <Stack className='blog-cards'>
          {blogs.map(blog=>
            <HStack alignItems='start'  boxShadow= 'rgba(0, 0, 0, 0.16) 0px 1px 4px' cursor='pointer'>
              <img src="/assets/carousel.jpg" style={{ width:'200px',aspectRatio:'5/3',objectFit:'cover',borderRadius:'10px' }} alt="" />
              <Stack padding='5px'>
                <Text color='gray'>{blog.date}</Text>
                <Text as='b'>{blog.title}</Text>
              </Stack>
            </HStack>  
          )}
          
          
        </Stack>
      </div>
      
    </Stack>
  )
}

export default Blogs