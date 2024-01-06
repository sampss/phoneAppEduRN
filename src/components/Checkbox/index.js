import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const Checkbox = ({checked, onChecked}) => {

    console.log('checkbox changed');

    return(

    <TouchableOpacity activeOpacity={0.6} onPress={() => onChecked( !checked ) } style={styles.container}>
        {checked ?
        <View style={styles.innerContainer}>
            <Image style={styles.checkIcon} source={ require('../../assets/checkMark.png')} />   
        </View>
        : null }
    </TouchableOpacity>

)}

export default React.memo(Checkbox);