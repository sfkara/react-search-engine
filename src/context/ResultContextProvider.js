import React, {createContext,useContext,useState} from "react";


const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';



export const ResultContextProvider = ({children}) =>{
    const [results,setResults] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [searchTerm , setSearchTerm ] = useState('')


    const getResults =  async (url) => {
        setisLoading(true)

        const response = await fetch(`$(baseUrl)$(type)` , {
            method:'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '4841c03cfamsha47499671dcce26p16b8d5jsn0c954f801bda',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
              }
        });
        const data = await response.json();
        setResults(data)
        setisLoading(false)
    }

    return(
        <ResultContextProvider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
            {children}
        </ResultContextProvider>
    )
}

export const useResultContext = () => useContext(ResultContext);