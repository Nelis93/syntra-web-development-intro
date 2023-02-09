import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, total: state.total + action.value };
      break;
    case "subtract":
      return { ...state, total: state.total - action.value };
      break;
    case "multiply":
      return { ...state, total: state.total * action.value };
      break;
    case "divide":
      return { ...state, total: state.total / action.value };
      break;
    case "power":
      return { ...state, total: state.total ** action.value };
      break;
    case "updateInput":
      return { ...state, input: action.value };
    default:
      return state;
  }
};

const initialState = {
  total: 0,
  input,
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <input
        type="number"
        onChange={(e) =>
          dispatch({ type: "updateInput", value: parseInt(e.target.value) })
        }
        value={state.input}
      ></input>
      <button onClick={() => dispatch({ type: "add", value: state.input })}>
        Add
      </button>
      <button
        onClick={() => dispatch({ type: "subtract", value: state.input })}
      >
        subtract
      </button>
      <button
        onClick={() => dispatch({ type: "multiply", value: state.input })}
      >
        multiply
      </button>
      <button onClick={() => dispatch({ type: "divide", value: state.input })}>
        divide
      </button>
      <button onClick={() => dispatch({ type: "power", value: state.input })}>
        power
      </button>
    </div>
  );
}
