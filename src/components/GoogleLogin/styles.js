import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create ({
    container: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGrey,
        borderRadius: 14,
        borderColor: colors.green,
        borderWidth: 1,
        width: '40%',
        paddingVertical: 16,
        //marginBottom: 16,
    },
    image:{
        width: 30,
        height: 30,
    },
})