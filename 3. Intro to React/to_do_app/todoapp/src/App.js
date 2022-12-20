
import Todolist from "./todolist.js";

function App() {
  const [toDos, settoDos] = useState([]);
  };
  
  function handleChange() {
    this.settoDos({ text: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      toDos: state.toDos.concat(newItem),
      text: ''
    }));
  }
    return (
      <div>
        <h3>TODO</h3>
        <Todolist toDos={this.toDos} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add task
          </button>
        </form>
      </div>
    );
  }



export default App;
