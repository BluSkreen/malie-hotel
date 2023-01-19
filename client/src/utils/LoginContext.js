import React, { createContext, useContext, useState } from "react";

// Initialize new context for students
const LoginContext = createContext();

// We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useLoginContext = () => useContext(LoginContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onEmailChange = (e) => {
    const emailInput = e.target.value;
    // console.log(emailInput);
    setEmail(emailInput);
  };

  const onPasswordChange = (e) => {
    const passwordInput = e.target.value;
    // console.log(passwordInput);
    setPassword(passwordInput);
  };

  const onUsernameChange = (e) => {
    const usernameInput = e.target.value;
    // console.log(userNameInput);
    setUsername(usernameInput);
  };

  // The value prop expects an initial state object
  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        onEmailChange,
        password,
        onPasswordChange,
        setPassword,
        username,
        onUsernameChange,
        setUsername,
      }}
    >
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </LoginContext.Provider>
  );
};
