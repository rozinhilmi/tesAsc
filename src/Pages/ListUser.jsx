import { Button, HStack, Input, Stack, Table, Td, Text, Tr, useDisclosure,useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { NavbarMobile, NavbarWide, Sidebar } from "../Components/Navbar"
import { Link, useParams } from "react-router-dom"
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const ListUser = () => {
  const iconColor = useSelector((state)=>state.iconColor)
  const toast = useToast()
  const [Users,setUsers] = useState([])
  const params = useParams()
  const slug = ()=>{
    if(params.slug === undefined){
      return 0
    }
    else{
      return params.slug-1
    }
  }
  const [detailUser,setDetailUser] = useState('')
  const [modal,setModal] = useState('')
  const openModalDetailUser = ()=>{
    setModal('detail user')
    onOpen()
  }
  const openModalUpdateUser = ()=>{
    setModal('update user')
    onOpen()
  }
  const updateUser = (event)=>{
    let id = event.target[0].value
    let firstname = event.target[2].value
    let lastname = event.target[3].value
    let phone = event.target[4].value
    let email = event.target[5].value
    fetch(`https://fakestoreapi.com/users/7${id}`,{
            method:"PUT",
            body:JSON.stringify(
                {
                email:email,
                username:detailUser.username,
                password:detailUser.password,
                name:{
                    firstname:firstname,
                    lastname:lastname
                },
                address:detailUser.address,
                phone:phone
                }
            )
        })
            .then(res=>res.json())
              .then(json=>{
                    toast({
                      title: `berhasil fetch update PUT ke Api fakestoreapi`,
                      status: 'success',
                      isClosable: false,
                      duration:4000
                    });
                    onClose()
                  }
                )
    
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(()=>{
    fetch('https://fakestoreapi.com/users')
      .then(res=>res.json())
        .then(res=> {
          const resData = []
          for (let i = 0; i < res.length; i+=3) {
            const pagination = []
            for (let j = i; j < i+3; j++) {
              if(res[j] !== undefined){
                pagination.push(res[j])
              }
            }
            resData.push(pagination)
          }
          console.log(resData)
          setUsers(resData)
        })
  },[])
  return (
    <Stack width='100%' minHeight='100vh' >
      <NavbarWide/>
      <NavbarMobile />
      <Sidebar />
      <Stack marginTop='2cm' marginBottom='2cm' padding='20px'>
        {
          Users.length !== 0 ?
              <Stack >
                <Text as='b' fontSize='24px'>Data Users</Text>
                
                <Stack spacing={6}>
                {Users[slug()].map((user,i)=>
                  <HStack justifyContent='space-between' className="card-user" key={i} boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' padding='20px' cursor='pointer' width='100%' >
                    <Text>{user.name.firstname} {user.name.lastname}</Text>
                    <HStack>
                      <Button colorScheme="blue" onClick={()=>{
                        fetch(`https://fakestoreapi.com/users/${user.id}`)
                          .then(res=>res.json())
                            .then(res=>{setDetailUser(res);openModalDetailUser()})
                      }}>
                        <InfoIcon />
                      </Button>
                      <Button colorScheme="teal" onClick={()=>{
                          fetch(`https://fakestoreapi.com/users/${user.id}`)
                            .then(res=>res.json())
                              .then(res=>{setDetailUser(res);openModalUpdateUser()})
                        }}>
                        <EditIcon />
                      </Button>
                      <Button colorScheme="red" onClick={()=>{
                        fetch(`https://fakestoreapi.com/users/${user.id}`,{
                          method:"DELETE"
                        })
                            .then(res=>res.json())
                              .then(json=>{
                                console.log(json)
                                toast({
                                  title: `berhasil fetch Delete ke Api fakestoreapi`,
                                  
                                  isClosable: false,
                                  duration:4000
                                });
                                onClose()
                              })
                      }}>
                        <DeleteIcon />
                      </Button>
                    </HStack>
                    
                  </HStack>
                  )}
                </Stack>

                <HStack marginTop='40px'>
                  {
                    Users.map((pagination,i)=>
                      <Link to={`/ListUser/${i+1}`}>
                        <Button colorScheme="blue" key={i} variant={(i) === slug() ? 'solid' : 'outline'}>{i+1}</Button>
                      </Link>
                      
                    )
                  }
                  
                </HStack>
                
              </Stack>
            
          :null
        }
      </Stack>

      {
        
          modal === 'detail user' ?
            detailUser !== ''?
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Detail User</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Table>
                      <Tr>
                        <Td>name</Td>
                        <Td>: {detailUser.name.firstname} {detailUser.name.lastname}</Td>
                      </Tr>
                      <Tr>
                        <Td>phone</Td>
                        <Td>: {detailUser.phone}</Td>
                      </Tr>
                      <Tr>
                        <Td>email</Td>
                        <Td>: {detailUser.email}</Td>
                      </Tr>
                    </Table>
                  </ModalBody>
      
                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                      Close
                    </Button>
                    
                  </ModalFooter>
                </ModalContent>
              </Modal>
            :null


          :modal === 'update user' ?
            detailUser !== ''?
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <form action="" onSubmit={(e)=>{e.preventDefault();updateUser(e)}}>
                    <input type="hidden" name="id" value={detailUser.id} />
                  <ModalHeader>Detail User</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    
                      <Table>
                        <Tr>
                          <Td>First Name</Td>
                          <Td><Input name="firstname" defaultValue={detailUser.name.firstname}/></Td>
                        </Tr>
                        <Tr>
                          <Td>Last Name</Td>
                          <Td><Input name="lastname" defaultValue={detailUser.name.lastname}/></Td>
                        </Tr>
                        <Tr>
                          <Td>phone</Td>
                          <Td><Input name="phone" defaultValue={detailUser.phone}/></Td>
                        </Tr>
                        <Tr>
                          <Td>email</Td>
                          <Td><Input type="email" name="email" defaultValue={detailUser.email}/></Td>
                        </Tr>
                      </Table>
                    
                  </ModalBody>
      
                  <ModalFooter>
                    <Button type="submit" colorScheme="blue">Update</Button>
                    
                  </ModalFooter>
                  </form>
                </ModalContent>
              </Modal>
            :null
          :null
        
        
        
      }
      
    </Stack>
  )
}

export default ListUser