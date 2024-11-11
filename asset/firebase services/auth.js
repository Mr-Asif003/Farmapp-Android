import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
export const registerUser=async(email,password)=>{
try{
 const userCredential=await auth().createUserWithEmailAndPassword(email,password);
 await userCredential.user.sendEmailVerification();
 return userCredential.user;
}catch(error){
    let errMessage;
    switch(error.code){
        case 'auth/email-already-used':
            errMessage="This email is used use different email .."
            break;
        case 'auth/invalid-email':
            errMessage="You entered invalid email"
            break;
        case 'auth/weak-password':
            errMessage="password is too weak"
            break;
        default:
            errMessage=error.code;
           

    }
    Alert.alert('Error',errMessage );
    throw new Error(errMessage);
}

};