import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8, // min margin adjusted using cascading prop.
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.lightGrey,
    },
    text: {
        fontWeight: '500',
        color: colors.blue,
        marginHorizontal: 8,
    },
})