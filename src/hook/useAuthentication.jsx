import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default function useAuthentication() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState("");

  const auth = getAuth();

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
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      setIsLoading(false);
      return user;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return {
    auth,
    createUser,
    isLoading,
    isError,
  };
}
