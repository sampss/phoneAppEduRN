import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create ({
    container:{
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center', // cannot place here, causes error
        alignItems: 'center',
        height: '100%',
        borderWidth: 1,
        borderColor: colors.white,
    },
    image: {
        width: '100%',
        height: 200,
        alignSelf: 'center',
        marginBottom: 16,
    },
    titleTextContainer: {
        marginVertical: 54,
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
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