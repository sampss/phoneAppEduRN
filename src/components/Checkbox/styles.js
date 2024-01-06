import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        width: 22,
        height: 22,
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 16,
    },
    innerContainer: {
        backgroundColor: colors.grey,
        width: '100%',
        height: '100%',
        borderRadius: 16,
        justifyContent: 'center',
    },
    checkIcon: {
        alignSelf: 'center',
        width: 12,
        height: 9,
    },
})