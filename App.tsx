import { View, StatusBar, RecyclerViewBackedScrollView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
// import { Loading } from '@components/Loading';

import { Theme } from './src/theme';

// import {AuthContext, AuthContextProvider} from '@contexts/AuthContext';

import { Routes } from './src/routes';
import { SignIn } from '@screens/SignIn';
import { SignUp } from '@screens/SignUp';
// import { Home } from '@screens/Home';

export default function App() {

  const [fontsloaded] = useFonts({Karla_400Regular, Karla_700Bold})

  return (

    <NativeBaseProvider theme={Theme}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      {/* //Lembrar de colocar o loading */}
      { fontsloaded ? <Routes/> : null}  
            
    </NativeBaseProvider>
  );
}