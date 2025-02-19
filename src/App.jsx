import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("recogiendo notas");
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  useEffect(() => {
    console.log("recogiendo personas");
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <h1>Persons</h1>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
