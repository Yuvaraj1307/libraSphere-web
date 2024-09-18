import { useContext } from "react"
import { AppContext } from "../context"

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("useAppContext must be used with in a AppContextProvider")
    }
    return context;
}