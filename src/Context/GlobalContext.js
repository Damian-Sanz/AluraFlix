import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext()

export default function GlobalContextPorvider({children}) {
    return <GlobalContext.Provider>
        {children}
    </GlobalContext.Provider>
}