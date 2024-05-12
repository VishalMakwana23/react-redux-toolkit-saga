import Counter from "./pages/counter";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "70px",
          justifyContent: "center",
        }}
      >
        <Login />
      </div>
    </>
  );
}

export default App;
