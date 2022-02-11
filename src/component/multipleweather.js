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

    const [City1, setCity1] = useState(null);    // storing data..from api
    const [City2, setCity2] = useState(null);
    const [City3, setCity3] = useState(null);
    const [City4, setCity4] = useState(null);
    const [City5, setCity5] = useState(null);

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
                    {!City1 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">
                            <h2>{Search}</h2>
                            <h3>{City1.main.temp} °C</h3>
                            <p>Min: {City1.main.temp_min} °C | Max {City1.main.temp_max} °C</p>
                            <p>Pressure: {City1.main.pressure} hPa</p>
                            <p>Humidity: {City1.main.humidity} %</p>
                            <p>Feels Like: {City1.main.feels_like} °C</p>
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
                    {!City2 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">

                            <h2>{Search}</h2>
                            <h3>{City2.main.temp} °C</h3>
                            <p>Min: {City2.main.temp_min} °C | Max {City2.main.temp_max} °C</p>
                            <p>Pressure: {City2.main.pressure} hPa</p>
                            <p>Humidity: {City2.main.humidity} %</p>
                            <p>Feels Like: {City2.main.feels_like} °C</p>
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
                    {!City3 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">

                            <h2>{Search}</h2>
                            <h3>{City3.main.temp} °C</h3>
                            <p>Min: {City3.main.temp_min} °C | Max {City3.main.temp_max} °C</p>
                            <p>Pressure: {City3.main.pressure} hPa</p>
                            <p>Humidity: {City3.main.humidity} %</p>
                            <p>Feels Like: {City3.main.feels_like} °C</p>
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
                    {!City4 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">
                            <h2>{Search}</h2>
                            <h3>{City4.main.temp} °C</h3>
                            <p>Min: {City4.main.temp_min} °C | Max {City4.main.temp_max} °C</p>
                            <p>Pressure: {City4.main.pressure} hPa</p>
                            <p>Humidity: {City4.main.humidity} %</p>
                            <p>Feels Like: {City4.main.feels_like} °C</p>
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
                    {!City5 ? (
                        <p className='error'>No city found</p>
                    ) : (
                        <div className="seconddiv">

                            <h2>{Search}</h2>
                            <h3>{City5.main.temp} °C</h3>
                            <p>Min: {City5.main.temp_min} °C | Max {City5.main.temp_max} °C</p>
                            <p>Pressure: {City5.main.pressure} hPa</p>
                            <p>Humidity: {City5.main.humidity} %</p>
                            <p>Feels Like: {City5.main.feels_like} °C</p>
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