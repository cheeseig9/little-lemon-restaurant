import {Box, HStack, VStack, Input, Text, Heading, Textarea, Button} from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

function Reservation() {
    
    return(

    <Box width='100%' bg='#495E57' display='flex' flexDirection='column' alignItems='center' gap='30px' padding='10px' id='reservation-section'>

        <Heading as='h2' size='3xl' color='#F4CE14'>Reserve a Table</Heading>

        <Box display='flex' alignItems='flex-start' gap='20px' color='white'>

            <VStack display='flex' alignItems='flex-start' border='1px solid #EDEFEE' borderRadius='10px' padding='10px'>                
                <Heading as='h4' size='xl' color='white'>Responsible Details</Heading>
                <Text>First Name*</Text>            
                <Input type='text' placeholder='First Name' size='md' required></Input>
                <Text>Last Name*</Text>
                <Input type='text' placeholder='Last Name' size='md' required></Input>
                <Text>E-mail*</Text>
                <Input type='text' placeholder='E-mail' size='md' ></Input>
                <Text>Phone Number*</Text>
                <Input type='tel' placeholder='Phone Number' size='md' ></Input>
                
            </VStack>

            <VStack display='flex' alignItems='flex-start' border='1px solid #EDEFEE' borderRadius='10px' padding='10px'>
                <Heading as='h4' size='xl' color='white'>Reservation Details</Heading>
                <Text>Date*</Text>               
                <Input type='date' placeholder='Date*' size='md' ></Input>
                <Text>Time*</Text>
                <Input type='time' placeholder='Time*' size='md' ></Input>
                <Text>Table for*</Text>
                <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
                <Text>Special Requests (optional)</Text>
                <Textarea placeholder='Special Resquests (optional)'></Textarea>
                
            </VStack>

        </Box>

        <Button size='lg' bg='#F4CE14'>Confirm Reservation</Button>

    </Box>  
 
    )
}

export default Reservation