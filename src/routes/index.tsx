import { useTheme, Box } from 'native-base';
import { useContext } from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {

  const {colors} = useTheme(); //Usando UseTheme podemos mudar a cor de fundo das telas

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[200];

  return (
     //Usando a BOX por volta da tela evita fundos brancos na passagem de uma tela a outra
    <Box flex={1} bg="gray.200"> 
        <NavigationContainer theme={theme}>
          <AppRoutes/>          
        </NavigationContainer>
    </Box>
  );
}