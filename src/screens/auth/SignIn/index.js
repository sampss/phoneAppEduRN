import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import AuthHeader from "../../../components/AuthHeader";
import { Input } from "../../../components/Input";
import SignWithSeperator from "../../../components/SignWithSeperator";
import GoogleLogin from "../../../components/GoogleLogin";
import { universalStyles } from "../../../utils/universalStyles";


const onSignUp = () => {}

const SignIn = () => {

    return (
        
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}> 
            <AuthHeader title='Sign In' /> 
        
            <Input labelText='Email' placeholder='name@email.com' />

            <Input isPass labelText='Password' placeholder='****' />
            
            <Button styleProp={[styles.button, universalStyles.margins1]} buttonText={'Sign In'} />

            <SignWithSeperator text='Sign In With' marginProp={universalStyles.margins1} />

            <GoogleLogin marginProp={universalStyles.margins1} />

            <Text style={[styles.footerText, universalStyles.margins1]}>
                Dont have an Account!  <Text onPress={onSignUp}  style={[styles.footerLink]}>Sign Up!</Text>
            </Text>

        </ScrollView>

    )
}

export default React.memo(SignIn);