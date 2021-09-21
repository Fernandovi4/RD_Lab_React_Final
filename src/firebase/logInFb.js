import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'

export const logInFb = (email, password) => {

  const auth = getAuth(app)

  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => userCredential.user)
    .catch(er => console.log(er.code, er.message))
}

