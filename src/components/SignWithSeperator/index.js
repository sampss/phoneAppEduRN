import React from "react";
import { Text, View, } from "react-native";
import { styles } from "./styles";

const SignWithSeperator = ({text, marginProp}) => {
    //console.log(marginProp);
    
    return (
        <View style={[ styles.container, marginProp]}>
            <View style={styles.line}></View>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.line}></View>
        </View>
    )
}

export default SignWithSeperator;