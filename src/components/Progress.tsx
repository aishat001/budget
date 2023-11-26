import { Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const Progress = () => {
    return (
        <Box w={'150px'} h={'150px'} borderRadius={'100%'} bg={'#0466C866'} display={'flex'} justifyContent={'center'} alignItems={'center'} mx={'auto'} mt={'30px'}>
            <Box w={'130px'} h={'130px'} borderRadius={'100%'} bg={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                <CircularProgress value={49} color='#0466C8' size={'150px'} thickness={'5px'} borderRadius={'10px'}>
                    <CircularProgressLabel textColor={'#0466C8'} fontSize={'36px'} fontWeight={700}>49%</CircularProgressLabel>
                </CircularProgress>
            </Box>
        </Box>
    )
}

export default Progress