import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export async function signUp(email, password) {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            localStorage.setItem('uid', userCredentials.user.uid);
            localStorage.setItem('accessToken', userCredentials.user.accessToken)
        });
}

export function signIn(email, password) {



    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {

            localStorage.setItem('uid', userCredentials.user.uid)
            localStorage.setItem('accessToken', userCredentials.user.accessToken);

            return userCredentials.user;

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });



}

export async function logout() {
    await signOut(auth)
        .then(() => {
            console.log('Logout succesfully');
            localStorage.clear();
        })
}