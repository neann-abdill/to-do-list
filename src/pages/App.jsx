import { useState, useEffect } from "react";
import "../styles/App.css";
import Input from "../components/Input";
import RadioGroup from "../components/RadioGroup";
import Button from "../components/Button";
import Card from "../components/Card";
import Closing from "../components/Closing";


function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setTodos([...todos, form]);
    setForm({ title: "", desc: "", status: "To do" });
    localStorage.setItem("todos", JSON.stringify(todos))
  };

  return (
    <>
    <div className="App">
      <Closing text="To do List" />

<div className="form-container">
      <Input
        label="Judul"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Masukan judul..."
      />
      <Input
        label="Deskripsi"
        name="desc"
        type="textarea"
        value={form.desc}
        onChange={handleChange}
        placeholder="Masukan deskripsi."
      />
      <RadioGroup
        label="status"
        name="status"
        options={["To do", "In Progress", "Done"]}
        value={form.status}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Tambah</Button>

</div>
      <div className="todo-container">
        {todos.map((todo, i) => (
          <Card
            key={i}
            title={todo.title}
            desc={todo.desc}
            status={todo.status}
          />
        ))}
      </div>
      <Closing text="Copyright 2025" />
      </div>
    </>
  );
}

export default App;