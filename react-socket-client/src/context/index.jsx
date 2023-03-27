import { useState, createContext, useMemo } from "react";

const Context = createContext();

const ContextProvider = (props) => {
  const [username, setUsername] = useState("");

  const value = useMemo(() => ({ username, setUsername }), [username]);

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export { Context, ContextProvider };
