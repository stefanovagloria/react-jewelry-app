import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export function signUp(email, password) {

   return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            localStorage.setItem('uid', userCredentials.user.uid);
            localStorage.setItem('accessToken', userCredentials.user.accessToken);

            return userCredentials.user;
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

export  function logout() {
    return signOut(auth)
        .then(() => {
            console.log('Logout succesfully');
            localStorage.clear();
            return true;
        })
}