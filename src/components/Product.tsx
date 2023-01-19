import { View, Text, HStack, ScrollView, VStack, Box, Image, Icon, useToast, Pressable, Avatar} from 'native-base';
import { useState } from 'react';
import { ImageBackground, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import BackgroundImg from '@assets/produto_1.png';

type PropsProduct = {
    image: string;
    status: 'NOVO' | 'USADO';
    avatar: string;
    title: string;
    price: number;
};

export function Product({image, status = 'NOVO', avatar, title, price, ...rest}: PropsProduct){

    const [userPhoto, setUserPhoto] = useState('https://github.com/JRSparrowII.png');

    return(
               
        <VStack
           w={'50%'}
           pr={3}
        >        
            <Pressable>
                
                <VStack  
                    justifyContent="space-between" 
                    w='full'
                    h={120}
                    mt={5}
                    rounded="lg"         
                > 
                    <VStack>
                        <Image
                            w='full'
                            h='full' 
                            rounded="lg"                       
                            source={BackgroundImg}
                            alt="Tenis vermelho"              
                            resizeMode="cover"         
                        />
                    </VStack>
                    <HStack 
                        justifyContent="space-between" 
                        mt={0} 
                        bgColor="transparent"  
                        padding={2}
                        top={-120}
                    >
                        <Avatar h={5} w={5} rounded="full" bg="gray.100" source={{ uri: userPhoto }}>
                            {avatar}
                        </Avatar>

                        <Box
                            bg={status === 'NOVO' ? 'blue.500' : 'gray.600'} 
                            color="white"                       
                            fontSize={5} 
                            rounded={8}
                            h={5}
                            w={10}
                            textAlign="center"
                        >
                            {status}
                        </Box>
                    </HStack>   
                    
                </VStack>
            </Pressable>

            <Text fontSize={15} mt={2}>{title}</Text>  

            <Text fontSize={20} fontWeight="bold"> {price} </Text> 
        </VStack>        
    )
}

    