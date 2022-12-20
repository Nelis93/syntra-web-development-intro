function Todolist(props) {
  return (
    <ul>
      {this.props.toDos.map((toDo) => {
        <li key={toDo.id}>{toDo.text}</li>;
      })}
    </ul>
  );
}

export default Todolist;
