import classes from './Counter.module.css';
import './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { INCREMENT_TYPE, DECREMENT_TYPE, TOGGLE_TYPE } from '../store/store'

const CounterFunctional = () => {

  const {counter, visible} = useSelector(state => state);
  const dispatch = useDispatch();

  const incrementHandler = (amount = 1) => {
    dispatch({ type: INCREMENT_TYPE, payload: amount });
  }

  const decrementHandler = (amount = 1) => {
    dispatch({ type: DECREMENT_TYPE, payload: amount });
  }

  const toggleCounter = () => {
    dispatch({ type: TOGGLE_TYPE });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible ? <div className={classes.value}>{counter}</div> : null }
      <div className={"counter-controls"}>
        <button onClick={() => incrementHandler(1)}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increase by 5</button>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
        <button onClick={toggleCounter}>Toggle Counter</button>
      </div>
    </main>
  );
};

export default CounterFunctional;

// class Counter extends Component {


//   incrementHandler() {
//   }

//   decrementHandler() {
//   }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className={"counter-controls"}>
//           <button onClick={this.props.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.props.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//       </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     incrementHandler: () => {
//       dispatch({ type: INCREMENT_TYPE });
//     },

//     decrementHandler: () => {
//       dispatch({ type: DECREMENT_TYPE });
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
