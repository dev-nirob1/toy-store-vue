import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from './firebase.config'

export const registerUser = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log('error while registering', error)
  }
}

export const loginUser = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log('error while login', error)
  }
}
export const googleLogin = async () => {
  try {
    const googleProvider = new GoogleAuthProvider()
    return await signInWithPopup(auth, googleProvider)
  } catch (error) {
    console.log('error while login', error)
  }
}
