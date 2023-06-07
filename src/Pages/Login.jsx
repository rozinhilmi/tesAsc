import { Button, HStack, Input, Stack, Text, useToast } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { NavbarMobile, NavbarWide, Sidebar } from "../Components/Navbar";
import { useState } from "react";

const Login = () => {
  const appName = useSelector((state)=>state.appName)
  const [username,setUserName] = useState('') 
  const [password,setPassword] = useState('') 
  const toast = useToast()
  const handleChange = (event)=>{
    event.preventDefault()
    
    if(username === '' || password === ''){
      
      toast({
        title: `username atau password tidak boleh kosong`,
        status: 'error',
        duration:3000
      })
    }
    else{ 
      const res = fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res=>{
          if(res.status !== 200){
            toast({
              title: `API sedang dalam masalah dengan staus ${res.status}`,
              status: 'error',
              isClosable: true,
              duration:2000
            })
          }
          else{
            (res=>res.json())
              .then(res=>{
                toast({
                  title: `Login Success`,
                  status: 'success',
                  isClosable: true,
                  duration:1000
                })
              }) 
            
          }
        })
        
      
       
    }
  }
  
  return (
    
    <Stack width='100%' minHeight='100vh' >
      <NavbarWide/>
      <NavbarMobile />
      <Sidebar />
      <form style={{ margin:'auto' }} action="" onSubmit={(e)=>handleChange(e)}>
        <Stack className="form-login" spacing={4}  padding='30px'boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px'>

          <HStack justifyContent='center'>
            <AcUnitIcon sx={{ fontSize:"30px" }} />
            <Text as='b' fontSize='30px'>{appName}</Text>
          </HStack>
          <Stack>
            <Text>Username</Text>
            <Input name="username" value={username} variant='outline' onChange={(e)=>setUserName(e.target.value)}  />
          </Stack>
          <Stack>
            <Text>Password</Text>
            <Input name="password" value={password} variant='outline' type="password" onChange={(e)=>setPassword(e.target.value)}  />
          </Stack>
          <Button type="submit" name="signIn" colorScheme="blue">SignIn</Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default Login