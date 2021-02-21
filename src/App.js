import React from "react"
import { DataProvider } from "./context/DataContext"
import Landing from "./landing"

const App = () => {
    return(
        <>
            <DataProvider>
                <Landing/>
            </DataProvider>
        </>
    )
}

export default App