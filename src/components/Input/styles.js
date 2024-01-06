import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
    },
    label: {
       // marginTop: 20,
        marginBottom: 8,
        paddingLeft: 1,
        fontWeight: '400',
    },
    inputField: {
        flexGrow: 1,
        padding: 8,
    },
    passIsVisibleImage: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },
})