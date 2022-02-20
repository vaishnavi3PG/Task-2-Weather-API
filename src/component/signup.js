import '../stylesheet/signup.css';
import { useLocalStorage } from "./useLocalStorage";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [checked, setChecked] = useLocalStorage("checked", false);

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
          required
        />

        <label for="email"><b>Enter Email</b></label>
        <input
          type="text"
          name="email"
          placeholder="Enter Password"
          required
        />

        <label for="password"><b>Enter Password</b></label>
        <input
          type="text"
          name="password"
          placeholder="Enter Password"
          aria-label="fullname"
          required
        />

        <label for="password"><b>Repeat Password</b></label>
        <input
          type="text"
          name="password"
          placeholder="Enter Password"
          required
        />

        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            required
          />{" "}
          Not a robot?
        </label>

        <Link to="/multipleWeather">
          <input type="submit" value="Submit"></input>
        </Link>
      </div>
    </form>
  );
};

export default Signup;


