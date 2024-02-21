import { connect } from "react-redux";
import { Increment, Decrement, Reset } from "../Redux/Action";

const Counter = (props) => {
  return (
    <div>
      <h2>Count:{props.count}</h2>
      {props.count < 20 ? (
        <button onClick={props.Increment}>Increment</button>
      ) : (
        ""
      )}
      {props.count > 0 ? (
        <button onClick={props.Decrement}>Decrement</button>
      ) : (
        ""
      )}
      <button onClick={props.Reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  count: state.count;
};

const mapDispatchToProps = {
  Increment,
  Decrement,
  Reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
