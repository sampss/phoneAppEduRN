import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create ({
    container: {
        backgroundColor: colors.green,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        width: '100%',
    },
    buttonText: {
        color: colors.yellow,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
})