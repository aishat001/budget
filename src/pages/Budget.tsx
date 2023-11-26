import { Box, HStack, Heading, ScaleFade, Stack, Text } from "@chakra-ui/react"
import { NairaSvg } from "../Svgs/Svg"
import Tabs from "../components/Tabs"
import Progress from "../components/Progress"
import Category from "../components/Category"

const Budget = ({ loading }: any) => {

    return (
        <Stack px={'30px'} py={'20px'} gap={0} bg={'#FCFCFC'}>
            <ScaleFade initialScale={0.1} in={!loading} transition={{ exit: { delay: 1 }, enter: { duration: 0.5 } }}>

                <Heading fontSize={['28px', '36px']} fontWeight={700} textAlign={"left"} letterSpacing={'-1.4px'} textColor={'#001233'}>Budget</Heading>
            </ScaleFade>

            <ScaleFade initialScale={0.1} in={!loading} transition={{ exit: { delay: 2 }, enter: { duration: 0.5 } }}>

                <Box mt={'28px'} mb={'10px'}>
                    <HStack gap={'10px'}>
                        <NairaSvg />
                        <Text fontSize={['14px', '16px']} textColor={'#707480'}>Monthly Budget</Text>
                    </HStack>
                </Box>

                <Box boxShadow={'0px 5px 10px 2px rgba(0, 0, 0, 0.03)'} px={'20px'} py={'9px'} maxW={'315px'} borderRadius={'10px'} mb={'30px'} bg={'#FFF'}>
                    <Text fontSize={'28px'} fontWeight={700} textColor={'#001233'} textAlign={'left'}> ₦120,000</Text>
                </Box>
            </ScaleFade>


            <Tabs />
            <ScaleFade initialScale={0.1} in={!loading} transition={{ exit: { delay: 3 }, enter: { duration: 0.8 } }}>

                <Progress />
            </ScaleFade>
            <Box my={'20px'}>
                <Text textColor={'#707480'} fontSize={['16px', '24px']}>Amount spent so far</Text>
                <HStack justifyContent={'center'} gap={0} fontSize={['16px', '22px']}>
                    <Text textColor={'#0466C8'}>₦50,000</Text>
                    <Text textColor={'#67A2DC'}>/₦120,000</Text>

                </HStack>
            </Box>

            <ScaleFade initialScale={0.1} in={!loading} transition={{ exit: { delay: 4 }, enter: { duration: 0.8 } }}>

            <Category />
</ScaleFade>
        </Stack>
    )
}

export default Budget