import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from './firebase'


export const registerNewUser = (email, password) => {

  const auth = getAuth(app)

  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => userCredential.user)
    .catch(er => console.log(er.code, er.message))
}
