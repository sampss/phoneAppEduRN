import React from "react";
import { Image, Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

const GoogleLogin = ({marginProp}) => {

    const handleGoogleLogin = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          //if (userInfo) await GoogleSignin.signOut();
          console.log( 'User Info: >>', userInfo);
          //setState({ userInfo, error: undefined }); //not saving state at this time
        } catch (error) {
            console.log(error);
          
        }
      };

    return (
        <TouchableOpacity onPress={handleGoogleLogin} activeOpacity={0.5} style={[styles.container, marginProp ]}>
            <Image style={styles.image} source={require('../../assets/googleG.png')} />
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin);