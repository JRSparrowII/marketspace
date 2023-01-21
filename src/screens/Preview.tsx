import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Header } from '@components/Header';
import { Text, HStack, Icon, VStack, ScrollView, Image, Avatar, Box, Center, Heading, View } from 'native-base';
import { FontAwesome5} from '@expo/vector-icons';
import { ButtonDefault } from '@components/Button'
import { Status } from '@components/Status'
import BackgroundImg from '@assets/produto_2.png';

import { ArrowLeft, ArrowRight, Bank, Barcode, CreditCard, 
Money, QrCode, MagnifyingGlass, Plus, Sliders, Tag, X } from 'phosphor-react-native';

import React, { useState } from "react";
import { useTheme } from 'native-base';

export function Preview(){

    const navigation = useNavigation<AppNavigatorRoutesProps>(); 
    const {colors, sizes} = useTheme();  
    const [userPhoto, setUserPhoto] = useState('https://github.com/JRSparrowII.png');

    function handleOpenPreview() { 
        navigation.navigate('preview');
    } 

    function handleOpenMyAdsDetails() { 
        navigation.navigate('myadsdetails');
    } 

    function handleOpenNewAd() { 
        navigation.navigate('newad');
    }

    return(
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }} 
            showsVerticalScrollIndicator={false}>

            <VStack flex={1}>

                <Center bg="blue.500" h={32} pt={8}>
                    <Heading fontSize="md" color="gray.100">
                        Pré visualização do anúncio
                    </Heading>

                    <Text fontSize="sm" color="gray.100">
                        É assim que seu produto vai aparecer!
                    </Text>
                </Center>

                <View h='300px' >
                    <Image
                        w='full'
                        h='full'
                        // rounded="lg"                       
                        source={BackgroundImg}
                        alt="Tenis vermelho"              
                        resizeMode="cover"         
                    />
                </View>                

                <VStack             
                    flex="1"
                    padding={8}
                    backgroundColor='gray.200'
                >                    
                    <HStack space={3} mb={3}>
                        <Avatar 
                            h={5} w={5} 
                            rounded="full" 
                            bg="gray.100" 
                            source={{ uri: userPhoto }}
                        />          
                    
                        <Text color="gray.700">
                            Maria Gomes
                        </Text> 
                    </HStack>

                    <Status
                        title='Usado'
                        variant='Used'
                    />

                    <HStack justifyContent="space-between" mt={3}>
                        <Text color="gray.700" fontFamily="heading" fontSize="lg">
                            Luminaria Pendente
                        </Text>

                        <Text color="blue.700" fontWeight="bold" fontSize="lg">
                            R$ 45,00
                        </Text>
                    </HStack>

                    <Text color="gray.700" mt={3}>
                        Este e um produto muito legal, pois ele pode ser usado 
                        em qualquer lugar e em qualqer momento e por qualquer pessoa, 
                        muito facil e pratico s de ser usado. Aproveite voce tambem!
                    </Text> 

                    <HStack space={3} mt={5}>
                        <Text color="gray.700" fontWeight="bold">
                            Aceita troca?
                        </Text>         
                    
                        <Text color="gray.700" >
                            Não
                        </Text> 
                    </HStack>                                     
       
                    <Text color="gray.700" mb={5} fontWeight="bold" mt={3}>
                        Meios de pagamentos aceitos:
                    </Text>

                    <VStack mt={2}>
                        
                        <HStack space={2}>
                            <Barcode size={sizes[5]} color={colors.gray[700]} />

                            <Text fontSize="sm" color="gray.700">
                                Boleto
                            </Text>
                        </HStack>
                        
                        <HStack space={2}>
                            <QrCode size={sizes[5]} color={colors.gray[700]} />

                            <Text fontSize="sm" color="gray.700">
                                Pix
                            </Text>
                        </HStack>                 
                        
                        <HStack space={2}>
                            <Money size={sizes[5]} color={colors.gray[700]} />

                            <Text fontSize="sm" color="gray.700">
                                Dinheiro
                            </Text>
                        </HStack>
                                                
                        <HStack space={2}>
                            <CreditCard size={sizes[5]} color={colors.gray[700]} />

                            <Text fontSize="sm" color="gray.700">
                                Cartão de crédito
                            </Text>
                        </HStack>
                                               
                        <HStack space={2}>
                            <Bank size={sizes[5]} color={colors.gray[700]} />

                            <Text fontSize="sm" color="gray.700">
                                Depósito bancário
                            </Text>
                        </HStack>
                        
                     </VStack>
                        
                </VStack>

                {/* //QUANDO FOR MEXER AQUI, OLHE ISSO NO APP ROUTES */}
                <HStack justifyContent="space-between" pr={8} pl={8}space={2}>

                    <ButtonDefault 
                        title="Voltar e Editar" 
                        size="half"                             
                        variant="default"  
                        leftIcon={<ArrowLeft color={colors.gray[500]} size={sizes[5]} />}
                        onPress={handleOpenNewAd}                    
                    />          

                    <ButtonDefault 
                        title="Publicar" 
                        size="half"                             
                        variant="base1" 
                        onPress={handleOpenMyAdsDetails}
                        leftIcon={<Tag color={colors.gray[200]} size={sizes[5]} /> }                                         
                    />                    
                </HStack>  
            </VStack> 
        </ScrollView>       
    )        
}