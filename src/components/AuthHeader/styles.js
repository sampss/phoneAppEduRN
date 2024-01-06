import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        //backgroundColor: 'blue',
    },
    image: {
        width: 18,
        height: 18,
    },
    title:{
        color: colors.blue,
        fontSize: 24,
        paddingHorizontal: 16,
        },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        //backgroundColor: 'green'
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        //backgroundColor: 'red',
    },
    centerContainer:{

    },
})