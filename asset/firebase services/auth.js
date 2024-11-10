import auth from "@react-native-firebase/auth";
export const registerUser=async(email,password)=>{
try{
 const userCredential=await auth().createUserWithEmailAndPassword(email,password);
 await userCredential.user.sendEmailVerification();
 return userCredential.user;


}catch(error){
    let errMessage;
    switch(error.code){
        case 'auth/email-already-in-use':
            errMessage="this email is used use different email .."
        case 'auth/invalid-email':
            errMessage="You entered invalid email"
        case 'auth/weak-password':
            errMessage="password is too weak"
        default:
            errMessage="Please Use another Email"

    }
    throw new Error(errMessage);
}

};