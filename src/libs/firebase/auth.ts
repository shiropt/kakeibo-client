import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  UserInfo,
  User,
  signInWithEmailAndPassword,
  signOut as signOutByAuth,
} from "firebase/auth";
import { app } from "./config";
type FirebaseError = {
  code: string;
  message: string;
  name: string;
};
const isFirebaseError = (e: Error): e is FirebaseError => {
  return "code" in e && "message" in e;
};
const auth = getAuth(app);
export const emailAndPasswordSignup = async (email: string, password: string): Promise<User | any> => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (e) {
    if (e instanceof Error && isFirebaseError(e)) {
      return e.code;
    }
  }
};

export const emailAndPasswordSignin = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user;
  } catch (e) {
    if (e instanceof Error && isFirebaseError(e)) {
      return e.code;
    }
  }
};

export const googleSignin = async (): Promise<User | any> => {
  const provider = new GoogleAuthProvider();
  try {
    const response = await signInWithPopup(auth, provider);
    return response.user;
  } catch (e) {
    return e;
  }
};
export const signOut = async (): Promise<User | any> => {
  try {
    const response = await signOutByAuth(auth);
    return response;
  } catch (e) {
    return e;
  }
};
