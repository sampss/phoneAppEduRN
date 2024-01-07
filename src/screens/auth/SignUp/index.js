import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import { Input } from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import SignWithSeperator from "../../../components/SignWithSeperator";
import GoogleLogin from "../../../components/GoogleLogin";
import { universalStyles } from "../../../utils/universalStyles";

const SignUp = ({navigation}) => {

    const [checked, setChecked] = useState(false);

    const onSignIn = () => { navigation.navigate('SignIn') }
    const onBack = () => { navigation.goBack() }

    return (
        
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
            <AuthHeader onBackPress={onBack} title='Sign Up' /> 
        
            <Input labelText='Name' placeholder='John Doe' />

            <Input labelText='Email' placeholder='name@email.com' />

            <Input isPass labelText='Password' placeholder='****' />

            <View style={[styles.agreeRow, universalStyles.margins1]}>
                <Checkbox checked={checked} onChecked={setChecked} />
                <Text style={styles.agreeText}>I agree with the <Text style={styles.agreeBold}>Terms</Text> & <Text style={styles.agreeBold}>Conditions</Text>.</Text>
            </View>
            
            <Button styleProp={[styles.button, universalStyles.margins1]} buttonText={'Sign Up'} />

            <SignWithSeperator text='Sign Up With' marginProp={universalStyles.margins1} />

            <GoogleLogin marginProp={universalStyles.margins1} />

            <Text style={[styles.footerText, universalStyles.margins1]}>
                Already have an account?
                <Text onPress={onSignIn} style={[styles.footerLink]}> Sign In!</Text>
            </Text>

        </ScrollView>

    )
}

export default React.memo(SignUp);