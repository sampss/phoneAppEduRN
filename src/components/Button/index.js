import React from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Button = ({buttonText, onPress, styleProp}) => {

    console.log('button Changed');  // changes in style prop make reload

    return (
        <TouchableOpacity activeOpacity={0.5} style={[styles.container, styleProp]} onPress={onPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>

        /*
        <Pressable hitSlop={100} style={styles.container} onPress={handlePress}>
            <Text>{buttonText}</Text>
        </Pressable> 
        */

    )
}

export default React.memo(Button);