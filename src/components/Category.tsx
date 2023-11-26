import { Text, HStack, Heading, VStack, CircularProgress, CircularProgressLabel, Box, useBreakpointValue } from "@chakra-ui/react"
import { CatIcon1, CatIcon2 } from "../Svgs/Svg"

const Category = () => {
    const headingFontSize = useBreakpointValue({ base: '18px', md: '21px' });
    const textFontSize = useBreakpointValue({ base: '12px', md: '14px' });
    const circularProgressSize = useBreakpointValue({ base: '40px', md: '50px' });
    const labelFontSize = useBreakpointValue({ base: '24px', md: '36px' });
    const size = useBreakpointValue({ base: '50px', sm: '70px' });
  
  
    return (
        <VStack alignItems={'start'} pb={'100px'}>
            <Heading fontSize={['21px', '28px']} textColor={'#001233'} textAlign={'left'} fontWeight={500}>Category Breakdown</Heading>

            <HStack mt={'30px'} mb={'17px'} w={'100%'}>

            <Box className="savings" h={['40px', '60px']} w={['40px', '60px']} borderRadius={'100%'} bg={'#F4E9CD'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                <CircularProgress value={49} color='#C89104' size={size} thickness={'5px'} borderRadius={'10px'}>
                    <CircularProgressLabel textColor={'#0466C8'} fontSize={'36px'} fontWeight={700} >
                        <CatIcon1 />
                            </CircularProgressLabel>
                </CircularProgress>
                </Box>

                <VStack alignItems={'start'} gap={0} fontSize={['14px', '18px']}>
                    <Text  w={'max-content'} fontWeight={500}>Food and Drink</Text>
                    <Text fontWeight={400}  >40%</Text>

                </VStack>

                <HStack flexDirection={['column', "row"]} justifyContent={'center'} w={'max-content'} fontSize={['16px','20px']} gap={0} ml={'auto'}>
                    <Text textColor={'#001233'}>₦20,000</Text>
                    <Text textColor={'#C1C4CD'}>/₦42,000</Text>

                </HStack>
            </HStack>


            <HStack w={'100%'}>

            <Box h={['40px', '60px']} w={['40px', '60px']} borderRadius={'100%'} bg={'#038A3933'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                <CircularProgress value={20} color='#038A39' size={size} thickness={'5px'} borderRadius={'10px'}>
                    <CircularProgressLabel textColor={'#0466C8'} fontSize={'36px'} fontWeight={700} >
                        <CatIcon2 />
                            </CircularProgressLabel>
                </CircularProgress>
                </Box>

                <VStack alignItems={'start'} gap={0}>
                    <Text fontSize={['14px', '18px']} w={'max-content'} fontWeight={500}>Savings</Text>
                    <Text fontWeight={400} fontSize={['14px', '18px']} >20%</Text>

                </VStack>

                <HStack flexDirection={['column', "row"]} justifyContent={'center'} w={'max-content'} fontSize={['16px', '20px']} gap={0} ml={'auto'}>
                    <Text textColor={'#001233'}>₦10,000</Text>
                    <Text textColor={'#C1C4CD'}>/₦24,000</Text>

                </HStack>
            </HStack>
         




        </VStack>
    )
}

export default Category