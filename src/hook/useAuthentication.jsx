import { db } from "@/firebase/config";
import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export default function useAuthentication() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState("");

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  function getErrorMessage(error) {
    if (error.code === "auth/weak-password") {
      return "A senha precisa conter pelo menos 6 caracteres.";
    } else if (error.code === "auth/email-already-in-use") {
      return "E-mail já cadastrado.";
    } else {
      return "Ocorreu um erro, por favor tente mais tarde.";
    }
  }

  const createUser = async (data) => {
    setIsLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      setIsLoading(false);
      return;
    } catch (error) {
      console.log(error);
      const errorMessage = getErrorMessage(error);
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  const loginUser = async (data) => {
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      setIsLoading(false);
      return;
    } catch (error) {
      console.log(error);
      const errorMessage = getErrorMessage(error);
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
      });

      setIsLoading(false);
      return;
    } catch (error) {
      console.log(error);
      const errorMessage = getErrorMessage(
        GoogleAuthProvider.credentialFromError(error),
      );
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  const logoutUser = () => {
    signOut(auth);
  };

  return {
    isLoading,
    isError,
    auth,
    createUser,
    loginUser,
    signInWithGoogle,
    logoutUser,
  };
}
