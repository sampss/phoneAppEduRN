import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { envVars } from './src/utils/envVars';
import { universalStyles } from './src/utils/universalStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {


  useEffect( () => {

    GoogleSignin.configure({
      webClientId: envVars.GOOGLE_WEB_CLIENT_ID,
      //webClientId: '974433214073-5ntuu3rgipiadepk2ujukgar6craq50l.apps.googleusercontent.com',
      //androidClientId: '974433214073-d95slgorspbrkc8ghunhr89gcj5v2kik.apps.googleusercontent.com',
      offlineAccess: true,
    });

  }, [])

  return (
    
    <SafeAreaView  >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    
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
