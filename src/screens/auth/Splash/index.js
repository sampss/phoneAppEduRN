import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Splash = ({navigation}) => {

    const onSignIn = () => { navigation.navigate('SignIn') }

    const onSignUp = () => { navigation.navigate('SignUp') }

    return (

        <ScrollView>
        <View style={styles.container}>

            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/spash_image.png')} />
            {//C:\Users\samps\Expo Phone Projects\NoExpoProject1\src\assets\spash_image.png
            }
            <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>You'll Find</Text>
                <Text style={[styles.titleText, styles.innerTitle]}>All</Text>
                <Text style={styles.titleText}>You Need Here!</Text>
            </View>

            <Button buttonText={'Sign In'} onPress={onSignIn} />

            <Pressable hitSlop={30} >
                <Text style={ styles.signInText } onPress={onSignUp}>Sign Up</Text>
            </Pressable>

        </View>
        </ScrollView>
    )
}

export default React.memo(Splash);


/*
<View>
<Image resizeMode='contain' style={styles.image} source={require('../../../assets/spash_image.png')} />, //<-- if not in array [] make sure to remove comma
{//C:\Users\samps\Expo Phone Projects\NoExpoProject1\src\assets\spash_image.png  -- Had to move curly bracket one line as comment continues to end of line.
} 
<Text>You'll Find All You Need Here!  { loadedBy ? "loaded by TypeScript." : "loaded by js."}</Text>
</View>
*/