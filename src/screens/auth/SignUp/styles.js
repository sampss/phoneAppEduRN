import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    scrollContent: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    container: {
        width: '100%',
        height: '100%',
        padding: 24,
        borderColor: colors.grey,
        borderWidth: 1,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        marginLeft: 8,
        fontSize: 16,
        color: colors.blue,
    },
    agreeBold: {
        fontWeight: 'bold',
    },
    button: {
        marginVertical: 16,
    },
    footerText: {
        color: colors.lightBlue,
        width: '100%',
        textAlign: 'center',
        //marginTop: 24,
        marginBottom: 36,  // needed margin on bottom to be visible by scroll view.
    },
    footerLink: {
        textDecorationLine: 'underline',
        color: colors.green,
        fontWeight: 'bold',
    },
})
