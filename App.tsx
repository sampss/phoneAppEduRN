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
      <View style={ universalStyles.mainView }>
        <StatusBar />
        <SignIn />
      </View>
    </SafeAreaView>
    
  );
};

/*
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
