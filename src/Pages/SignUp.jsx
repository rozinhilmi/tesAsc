import { Button, HStack, Input, Stack, Text, useToast } from "@chakra-ui/react"
import { NavbarMobile, NavbarWide, Sidebar } from "../Components/Navbar"
import { useSelector } from "react-redux"
import { useState } from "react"
import AcUnitIcon from '@mui/icons-material/AcUnit';

const SignUp =  () => {
  const appName = useSelector((state)=>state.appName)
  const toast = useToast()
  const handleChange = async  (event)=>{
    event.preventDefault()
    let email = event.target[0].value;
    let username = event.target[1].value
    let password = event.target[5].value
    let firstname = event.target[2].value
    let lastname = event.target[3].value
    let phone = event.target[4].value
    

    if(email === '' || username === '' || password === '' || firstname === '' || lastname === '' || phone === ''){
      toast({
        title: `semua form harus terisi`,
        status: 'error',
        isClosable: true,
        duration:1000
      })
    }
    else{
      const res =  await fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(
            {
                email:email,
                username:username,
                password:password,
                name:{
                    firstname:firstname,
                    lastname:lastname
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:phone
            }
        )
      })
      console.log(res.status)
      if(res.status !== 200){
        toast({
          title: res.status,
          status: 'error',
          isClosable: true,
          duration:2000
        })
      }
      else{
        res.json()
          .then(res=>{
            toast({
              title: `Berhasil Sign Up ke Fakestore APi method POST add`,
              status: 'success',
              isClosable: true,
              duration:1000
            })
            console.log(res)
          }) 
        
      }
    }
    
    
  }
  return (
    <Stack width='100%' minHeight='100vh' >
      <NavbarWide/>
      <NavbarMobile />
      <Sidebar />
      <form style={{ margin:'auto' }} action="" onSubmit={(e)=>handleChange(e)}>
        <Stack spacing={4}  padding='30px' className="form-login" boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' marginTop='2cm' marginBottom='2cm'>

          <HStack justifyContent='center'>
            <AcUnitIcon sx={{ fontSize:"30px" }} />
            <Text as='b' fontSize='30px'>{appName}</Text>
          </HStack>
          <Stack>
            <Text>Email</Text>
            <Input name="email" defaultValue='' variant='outline'/>
          </Stack>
          <Stack>
            <Text>Username</Text>
            <Input name="username" defaultValue='' variant='outline'/>
          </Stack>
          <Stack>
            <Text>First Name</Text>
            <Input name="firstname" defaultValue='' variant='outline'/>
          </Stack>
          <Stack>
            <Text>Last Name</Text>
            <Input name="lastname" defaultValue='' variant='outline'/>
          </Stack>
          <Stack>
            <Text>Phone</Text>
            <Input name="phone" defaultValue='' variant='outline'/>
          </Stack>
          <Stack>
            <Text>Password</Text>
            <Input name="password" defaultValue='' variant='outline' type="password"/>
          </Stack>
          <Button type="submit" name="signIn" colorScheme="blue">Sign Up</Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default SignUp