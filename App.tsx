import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from './src/utils/colors';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { envVars } from './src/utils/envVars';
import { universalStyles } from './src/utils/universalStyles';
import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

const App = () => {


  useEffect( () => {

    GoogleSignin.configure({
      webClientId: envVars.GOOGLE_WEB_CLIENT_ID,
      offlineAccess: true,
    });

  }, [])

  /* //used to create a theme for navigation container
  const theme = {
    colors: {
        background: colors.white,
    }
  }
  */
  return (
    
    <SafeAreaProvider>
    <NavigationContainer theme={DarkTheme} >
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false,}}/>
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false,}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>

  );
};

/*



      <View style={ universalStyles.mainView }>
        <StatusBar />
        <SignIn />
      </View>


----------------------------------------
<Splash loadedBy={false}/>

  // Using typesctript stricter language, requires : type 
function App(): React.JSX.Element {
  return (
    <SafeAreaView >
      <StatusBar />
      <Splash loadedBy={true} />
    </SafeAreaView>
  );
};
*/
export default App;
