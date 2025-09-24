import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { firebase_app } from "@/firebase/config";
import { useRouter } from "next/navigation";

const auth = getAuth(firebase_app);

export const AuthContent = createContext({});

export const AuthContentProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  let router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (!user) {
        router.push("/");
      } else {
        router.push("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <AuthContent.Provider value={{ currentUser }}>
      {children}
    </AuthContent.Provider>
  );
};
