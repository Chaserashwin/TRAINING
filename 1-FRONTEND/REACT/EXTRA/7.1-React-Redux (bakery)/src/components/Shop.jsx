import { connect } from "react-redux";
import { cake, pastry } from "../Redux/Action";

const Shop = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <h2>Number of Cakes:{props.cake}</h2>
        {props.cake > 0 ? (
          <button onClick={props.cake}>Buy Cake</button>
        ) : (
          <h4>Sorry!! Stock out</h4>
        )}
      </div>
      <div>
        <h2>Number of Pastries:{props.pastry}</h2>
        {props.pastry > 0 ? (
          <button onClick={props.pastry}>Buy Pastry</button>
        ) : (
          <h4>Sorry!! Stock out</h4>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cake: state.cake,
  pastry: state.pastry,
});

const mapDispatchToProps = {
  cake,
  pastry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
