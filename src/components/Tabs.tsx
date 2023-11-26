import { Box, VStack, Text, HStack, Flex, useBreakpointValue } from "@chakra-ui/react"
import { useState } from "react"
import { Dots } from "../Svgs/Svg"

const Tabs = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const textFontSize = useBreakpointValue({  base: '12px', sm: '16px', md:'18px' });

  return (
    <HStack gap={'30px'}>
{
    ['Last Month', 'This Month'].map((item, index) => (
            <VStack key={index} onClick={() => setSelectedIndex(index)} alignItems={'center'} >
                <Text textColor={selectedIndex === index ? '#0466C8' : '#707480' } fontSize={textFontSize} fontWeight={400}>{item} </Text>
                <Flex w={'100%'} justifyContent={'start'}>
                {
                    selectedIndex === index && (
                        <Box w={'30px'} h={'3px'} bg={'#0466C8'} borderRadius={'5px'}/>
                    )
                }
                </Flex>
            </VStack>
    ))
    }

    <Box ml={'auto'}><Dots/></Box>
  </HStack>
  )

}

export default Tabs