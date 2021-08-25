import React,{useEffect,useState}from "react";
import "./css/style.css";

const Tempapp = () => {

    const[city,setCity]=useState(null);
    const[search,setSearch] =useState("mumbai");

    useEffect(() => {
        const fetchApi=async() =>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2e5dd974ab91011bba245c30ca013d7d`
            const response =await fetch(url);
            const resJson=await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        };
        fetchApi();
    },[search]
    )
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    value={search}
                    className="inputFeild"
                    onChange={ (event)=> {setSearch(event.target.value) } } />    
                    </div>
        
             {!city ?(<p className="errorMsg"> No Data Found</p>
              ):(
              <div>      
                <div className="info">
                    <h2 className="location">
                    <i className="fas fa-street-view"></i>{search}   
                    </h2> 
                    <h1 className="temp">
                    {city.temp}°Cel
                    </h1>    
                    <h4>Feels like:{city.feels_like}°Cel </h4> 
                <h3 className="tempmin_max"> Min: {city.temp_min}°Cel|Max: {city.temp_max}°Cel</h3>
                <h4>Pressure: {city.pressure/1000} bar  </h4>
                <h4>humidity: {city.humidity}% </h4>
                </div>
                 
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
             </div> 
              )
         } 
            </div>
        </>
    )
}

export default Tempapp;