import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Results } from "./components/Results";
import { Search } from "./components/Search";

const App = () =>{
    const [darkTheme,setDarkTheme] = useState(false)

    
    return(
       <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-200 dark:bg-gray-900 text-gray-200 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                <Results/>
                <Footer/>
                
            </div>
       </div>
    )
}



export default App