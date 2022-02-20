import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import '../stylesheet/multiplestyle.css';
import { Link } from "react-router-dom";

function MultipleWeather() {
    const [name, setName] = useLocalStorage("name", "");

    const myStyle = {
        width: "50px",
        height: "50px",
        position: "absolute",
        top: "0",
        right: "0",
    };

    const [city1, setCity1] = useState(null);    // storing data..from api
    const [city2, setCity2] = useState(null);
    const [city3, setCity3] = useState(null);
    const [city4, setCity4] = useState(null);
    const [city5, setCity5] = useState(null);

    const [Search, setSearch] = useState("");      // for searching..to api         
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${Search}&units=metric&appid=64a7e0a47c48ff0ccb08bd883e7282df`

            const response = await fetch(url);
            const resJson = await response.json();
            setCity1(resJson.list[0]);
            setCity2(resJson.list[1]);
            setCity3(resJson.list[2]);
            setCity4(resJson.list[3]);
            setCity5(resJson.list[4]);
            console.log(resJson)
        }
        fetchApi();
    }, [Search])

    return (
        <>
            <h2 className='main-heading'>Welcome {name}</h2>
            <h3 className="wheather-heading">5-DAY WEATHER</h3>
            <div className="body1">
                <div className="maindiv1">
                    <h3 className="days">Today</h3>
                    <div className='logo_img'>
                        <Link to="/signup">
                            <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" style={myStyle} alt="Logo" />
                        </Link>
                    </div>
                    <div className="firstdiv">
                        <input type="text" onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                    </div>
                    {!city1 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">
                            <h2>{Search}</h2>
                            <h3>{city1.main.temp} °C</h3>
                            <p>Min: {city1.main.temp_min} °C | Max {city1.main.temp_max} °C</p>
                            <p>Pressure: {city1.main.pressure} hPa</p>
                            <p>Humidity: {city1.main.humidity} %</p>
                            <p>Feels Like: {city1.main.feels_like} °C</p>
                        </div>
                    )
                    }
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>

                <div className="maindiv1">
                    <h3 className="days">Day 2</h3>

                    <div className='logo_img'>
                        <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" style={myStyle} alt="Logo" />
                    </div>
                    <div className="firstdiv">
                        <input type="text" onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                    </div>
                    {!city2 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">

                            <h2>{Search}</h2>
                            <h3>{city2.main.temp} °C</h3>
                            <p>Min: {city2.main.temp_min} °C | Max {city2.main.temp_max} °C</p>
                            <p>Pressure: {city2.main.pressure} hPa</p>
                            <p>Humidity: {city2.main.humidity} %</p>
                            <p>Feels Like: {city2.main.feels_like} °C</p>
                        </div>
                    )
                    }
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>

                <div className="maindiv1">
                    <h3 className="days">Day 3</h3>

                    <div className='logo_img'>
                        <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" style={myStyle} alt="Logo" />
                    </div>
                    <div className="firstdiv">
                        <input type="text" onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                    </div>
                    {!city3 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">

                            <h2>{Search}</h2>
                            <h3>{city3.main.temp} °C</h3>
                            <p>Min: {city3.main.temp_min} °C | Max {city3.main.temp_max} °C</p>
                            <p>Pressure: {city3.main.pressure} hPa</p>
                            <p>Humidity: {city3.main.humidity} %</p>
                            <p>Feels Like: {city3.main.feels_like} °C</p>
                        </div>
                    )
                    }
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>

                <div className="maindiv1">
                    <h3 className="days">Day 4</h3>
                    <div className='logo_img'>
                        <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" style={myStyle} alt="Logo" />
                    </div>
                    <div className="firstdiv">
                        <input type="text" onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                    </div>
                    {!city4 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">
                            <h2>{Search}</h2>
                            <h3>{city4.main.temp} °C</h3>
                            <p>Min: {city4.main.temp_min} °C | Max {city4.main.temp_max} °C</p>
                            <p>Pressure: {city4.main.pressure} hPa</p>
                            <p>Humidity: {city4.main.humidity} %</p>
                            <p>Feels Like: {city4.main.feels_like} °C</p>
                        </div>
                    )
                    }
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>

                <div className="maindiv1">
                    <h3 className="days">Day 5</h3>

                    <div className='logo_img'>
                        <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" style={myStyle} alt="Logo" />
                    </div>
                    <div className="firstdiv">
                        <input type="text" onChange={(event) => {
                            setSearch(event.target.value)
                        }} />
                    </div>
                    {!city5 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">

                            <h2>{Search}</h2>
                            <h3>{city5.main.temp} °C</h3>
                            <p>Min: {city5.main.temp_min} °C | Max {city5.main.temp_max} °C</p>
                            <p>Pressure: {city5.main.pressure} hPa</p>
                            <p>Humidity: {city5.main.humidity} %</p>
                            <p>Feels Like: {city5.main.feels_like} °C</p>
                        </div>
                    )
                    }
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>
            </div>
        </>
    );
}

export default MultipleWeather;