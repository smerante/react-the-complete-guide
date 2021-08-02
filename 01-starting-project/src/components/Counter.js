import classes from './Counter.module.css';
import './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { COUNTER_ACTIONS } from '../store/store'

const CounterFunctional = () => {

  const {counter, visible} = useSelector(state => state);
  const dispatch = useDispatch();

  const incrementHandler = (amount = 1) => {
    dispatch(COUNTER_ACTIONS.increment(amount));
  }

  const decrementHandler = (amount = 1) => {
    dispatch(COUNTER_ACTIONS.decrement(amount));
  }

  const toggleCounter = () => {
    dispatch(COUNTER_ACTIONS.toggle());
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
