
import React, { createContext, useState, useContext, useEffect } from "react";

interface UserFormContextType {
  hasSubmitted: boolean;
  setHasSubmitted: (value: boolean) => void;
  userInfo: {
    name: string;
    phone: string;
  } | null;
  setUserInfo: (info: { name: string; phone: string } | null) => void;
}

const UserFormContext = createContext<UserFormContextType | undefined>(undefined);

export const UserFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<{ name: string; phone: string } | null>(null);

  // Check localStorage on mount
  useEffect(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    if (savedUserInfo) {
      setUserInfo(JSON.parse(savedUserInfo));
      setHasSubmitted(true);
    }
  }, []);

  // Save to localStorage when userInfo changes
  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  }, [userInfo]);

  return (
    <UserFormContext.Provider
      value={{
        hasSubmitted,
        setHasSubmitted,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </UserFormContext.Provider>
  );
};

export const useUserForm = (): UserFormContextType => {
  const context = useContext(UserFormContext);
  if (context === undefined) {
    throw new Error("useUserForm must be used within a UserFormProvider");
  }
  return context;
};
