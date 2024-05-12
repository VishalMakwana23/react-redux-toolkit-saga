import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, RESET } from "../../redux/counter/counter.type";
import "./count.css";

function Count() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.count);

  const handleIncrementCount = () => {
    const data = count + 1;
    dispatch({ type: INCREMENT, data });
  };
  const handleDecrementCount = () => {
    const data = count - 1;
    dispatch({ type: DECREMENT, data });
  };
  const handleResetCount = () => {
    const data = 0;
    dispatch({ type: RESET, data });
  };

  return (
    <>
      <div className="card">
        <h1>count is {count}</h1>
        <div className="button-wrapper">
          <button onClick={() => handleIncrementCount()}>
            Increment Count
          </button>
          <button onClick={() => handleDecrementCount()}>
            Decrement Count
          </button>
          <button onClick={() => handleResetCount()}>Reset Count</button>
        </div>
      </div>
    </>
  );
}

export default Count;
