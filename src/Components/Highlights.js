import {Box, Heading, Button, HStack, Image, Link} from '@chakra-ui/react'
import greekSalad from './img/greek-salad.png'
import bruschetta from './img/bruschetta.png'
import lemonDessert from './img/lemon-dessert.png'

function Highlights() {
    return(
        <Box width='100%' display='flex' flexDirection='column' alignItems='center' gap='30px' id='menu-section'>

            <HStack spacing='100px'>
                <Heading as='h1' size='2xl' color='#333333'>This Week's Specials!</Heading>
                <Button size='lg' bg='#F4CE14'>Order Online</Button>                
            </HStack>

            <HStack>
                <Box borderRadius='10px' width='300px' height='500px' bg='#EDEFEE' display='flex' flexDirection='column' justifyContent='space-between' padding='10px'>
                    <Image src={greekSalad} alt='Greek Salad' borderRadius='10px'></Image>
                    <Heading size='xl' color='#333333'>Greek Salad</Heading>
                    <Heading size='sm' color='#333333'>The famous Greek Salad with crispy lettuce, peppers and olives.</Heading>
                    <Heading size='lg'  color='#d65804' >$12.99</Heading>
                    <Button fontSize='24px' color='#333333' fontWeight='bold'>Order a Delivery</Button>
                </Box>

                <Box borderRadius='10px' width='300px' height='500px' bg='#EDEFEE' display='flex' flexDirection='column' justifyContent='space-between' padding='10px'>
                    <Image src={bruschetta} alt='Bruschetta' borderRadius='10px'></Image>
                    <Heading size='xl' color='#333333'>Bruschetta</Heading>
                    <Heading size='sm' color='#333333'>Our Bruschetta is made from grilled bread that has been smeared wirh garlic and seasoned with salt and olive oil.</Heading>
                    <Heading size='lg' color='#d65804'>$5.99</Heading>
                    <Button fontSize='24px' color='#333333' fontWeight='bold'>Order a Delivery</Button>
                </Box>
                
                <Box borderRadius='10px' width='300px' height='500px' bg='#EDEFEE' display='flex' flexDirection='column' justifyContent='space-between' padding='10px'>
                    <Image src={lemonDessert} alt='Lemon Dessert' borderRadius='10px'></Image>
                    <Heading size='xl' color='#333333'>Lemon Dessert</Heading>
                    <Heading size='sm' color='#333333'>This comes straight from Grandma's recipe book, every single ingredient has been sourced and is as authentic as can be imagined.</Heading>
                    <Heading size='lg' color='#d65804'>$5.00</Heading>
                    <Button fontSize='24px' color='#333333' fontWeight='bold'>Order a Delivery</Button>
                </Box>
                
            </HStack>

        </Box>
    )
}

export default Highlights