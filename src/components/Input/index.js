import React, { useState } from "react";
import { View, TextInput, Image, Text, Pressable } from "react-native";
import { styles } from "./styles";

export const Input = ({ labelText, placeholder, isPass}) => {

    const [passVisible, setPassVisible] = useState(false); 

    let paths = ['../../assets/eye.png' , '../../assets/eye_closed.png'];

    const setEye = () => { 
        setPassVisible(!passVisible)
    }

    return(
        <View styles={styles.container}>
            <Text style={ styles.label}>{labelText}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPass && !passVisible} style={styles.inputField} placeholder={placeholder}></TextInput>
                { isPass ? 
                <Pressable onPress={setEye}>
                    <Image style={styles.passIsVisibleImage} source={ passVisible ? require('../../assets/eye_closed.png') : require('../../assets/eye.png')} />
                </Pressable>
                : null } 
            </View>
        </ View>
    )
}

//passVisible ? '../../assets/eye.png' : 