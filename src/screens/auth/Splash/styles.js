import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import { Dimensions } from "react-native";

export const styles = StyleSheet.create ({
    container:{
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'center', // cannot place here, causes error
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: Dimensions.get('screen').height,
        borderWidth: 1,
        borderColor: colors.white,
    },
    image: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
        //marginBottom: '5%',
    },
    titleTextContainer: {
        marginVertical: '10%',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.lightBlue,
    },
    innerTitle: {
        color: '#FCA340',
        textDecorationLine: 'underline',
    },
    loadedText: {
        fontSize: 20,
        color: colors.yellow,
        paddingBottom: 8,
    },
    signInText: {
        color: colors.green2,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
    },
})