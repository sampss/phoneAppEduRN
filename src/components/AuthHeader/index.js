import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

const AuthHeader = ({title, onBackPress}) => {
    return (

        <View style={styles.container}>
                <View style={ styles.leftContainer }>
                    <Pressable hitSlop={30} onPress={onBackPress}>
                        <Image style={styles.image} source={require('../../assets/left_arrow.png')} />
                    </Pressable>
                </View>
                <View style={ styles.centerContainer}>
                    <Text style={styles.title}> { title } </Text>
                </ View>
                <View style={ styles.rightContainer } />
        </View>

    )
}

export default AuthHeader;