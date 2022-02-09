import { useState } from 'react';
import './signup.css';
import { useLocalStorage } from "./useLocalStorage";
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import MultipleWeather from './multipleweather';



const Signup = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [password, setPassword] = useLocalStorage("name2", "");
  const [checked, setChecked] = useLocalStorage("checked", false);



  function handleClick() {


  }

  return (

    <form>
      <div className="container">

        <label for="username"><b>Enter Username</b></label>
        <input
          type="text"
          name="username"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }

          }
          placeholder="Enter Username"
          aria-label="fullname"
        />

        <label for="email"><b>Enter Email</b></label>
        <input
          type="text"
          name="email"
          placeholder="Enter Password"
        />

        <label for="password"><b>Enter Password</b></label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          aria-label="fullname"
        />

        <label for="password"><b>Repeat Password</b></label>
        <input
          type="text"
          name="password"
          placeholder="Enter Password"
        />


        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />{" "}
          Not a robot?
        </label>

        <Link to="/multipleWeather">
          <input type="submit" value="Submit" onClick={handleClick}></input>
        </Link>
      </div>

    </form>


  );

};

export default Signup;


