import { useState } from "react";
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "../../redux/auth/auth.type";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  const handleSubmit = () => {
    console.log("hadle submit called");
    const payload = {
      username,
      password,
    };
    dispatch({ type: USER_LOGIN, payload });
  };

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        Username :
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        Password :
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={() => handleSubmit()}>
          submit
        </button>
      </form>
    </>
  );
};

export default Login;
