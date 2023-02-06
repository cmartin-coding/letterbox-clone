import { createContext, useState } from "react";

const selectedPageContext = createContext({
  isActive: "",
  setIsActive: () => {},
});

export function ActivePageContext(props) {
  const [isActive, setIsActive] = useState("");
  const setIsActiveHandler = (page) => {
    let currentPage = isActive;
    if (page === currentPage) {
      return;
    } else {
      setIsActive(page);
    }
  };

  return (
    <selectedPageContext.Provider
      value={{ isActive: isActive, setIsActive: setIsActiveHandler }}
    >
      {props.children}
    </selectedPageContext.Provider>
  );
}
export default selectedPageContext;
