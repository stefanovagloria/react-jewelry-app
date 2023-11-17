import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export async function signUp(email, password) {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            localStorage.setItem('uid', userCredentials.user.uid);
            localStorage.setItem('accessToken', userCredentials.user.accessToken)
        });
}

export async function signIn(email, password) {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            localStorage.setItem('uid', userCredentials.user.uid)
            localStorage.setItem('accessToken', userCredentials.user.accessToken)
        })
}

export async function logout() {
    signOut(auth)
        .then(() => {
            console.log('Logout succesfully');
            localStorage.clear();
        })
}