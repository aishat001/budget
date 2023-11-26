import { Box, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import BudgetSvg, { ChatSvg, HomeSvg, Profile, ReportSvg } from '../Svgs/Svg'
import { Link, useLocation } from 'react-router-dom'


const Menu = () => {
    const [, setSelectedIndex] = useState(0)
    const location = useLocation()
    const path = location.pathname

    return (
        <Box display={'flex'} bg={'white'} flexDirection={'row'} justifyContent={'space-between'} w={'100%'} bottom={0} position={'absolute'} px={'30px'} py={'24px'} boxShadow={'0px -5px 20px 5px rgba(0, 0, 0, 0.04)'}>

            {
                menuItems.map((item, index) => (
                    <Link to={item.title === 'Home' ? '/' : `${item.title.toLowerCase()}`} key={index} onClick={() => setSelectedIndex(index)}>
                        {
                            index === 0 ?
                                <VStack gap={'10px'}>
                                    <item.icon fill={(path === `/`) ? '#0466C8' : '#C1C4CD'} />
                                    <Text fontSize={'12px'} fontWeight={450} textColor={path === `/` ? '#001233' : '#C1C4CD'}>{item.title}</Text>

                                </VStack>
                                :
                                index === 2 ?
                                    <VStack gap={'0px'}>
                                        <item.icon fill={(path === `/${item.title.toLowerCase()}`) ? '#0466C8' : '#C1C4CD'} />
                                        <Text fontSize={'12px'} fontWeight={450} textColor={path === `/${item.title.toLowerCase()}` ? '#001233' : '#C1C4CD'}>{item.title}</Text>

                                    </VStack>
                                    :
                                    <VStack gap={'10px'}>
                                        <item.icon fill={(path === `/${item.title.toLowerCase()}`) ? '#0466C8' : '#C1C4CD'} />
                                        <Text fontSize={'12px'} fontWeight={450} textColor={path === `/${item.title.toLowerCase()}` ? '#001233' : '#C1C4CD'}>{item.title}</Text>

                                    </VStack>
                        }

                    </Link>
                ))
            }
        </Box>
    )
}

export default Menu

const menuItems = [
    {
        icon: HomeSvg,
        title: 'Home'
    },
    {
        icon: ReportSvg,
        title: 'Reports'
    },
    {
        icon: ChatSvg,
        title: 'Chat'
    },
    {
        icon: BudgetSvg,
        title: 'Budget'
    },
    {
        icon: Profile,
        title: 'Profile'
    }
]