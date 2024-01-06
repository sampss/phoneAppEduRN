import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";

const Splash = (props) => {
    const { loadedBy } = props; 
    return (
        <View style={styles.container}>

            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/spash_image.png')} />
            {//C:\Users\samps\Expo Phone Projects\NoExpoProject1\src\assets\spash_image.png
            }
            <View style={styles.titleTextContainer}>
                <Text style={styles.titleText}>You'll Find</Text>
                <Text style={[styles.titleText, styles.innerTitle]}>All</Text>
                <Text style={styles.titleText}>You Need Here!</Text>
                <Text style={[styles.titleText, styles.loadedText]}>{ loadedBy ? "Loaded by TypeScript." : "Loaded by js."}</Text>
            </View>

            <Button buttonText={'A Button'} />

            <Pressable hitSlop={20} >
                <Text style={ styles.signInText }>Sign In</Text>
            </Pressable>

        </View>
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