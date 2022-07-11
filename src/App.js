import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Routes } from "./components/Routes";

const App = () =>{
    const [darkTheme,setDarkTheme] = useState(false)

    
    return(
       <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-200 dark:bg-gray-900 text-gray-200 min-h-screen">
                <Navbar d={darkTheme} s={setDarkTheme}/>
                <Routes/>
                <Footer/>
                
            </div>
       </div>
    )
}



export default App