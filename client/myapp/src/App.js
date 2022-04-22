import { Children, useEffect, useState } from "react";
import "./App.css";
import { getpersons } from "./redux/action/action";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import AddContact from "./Components/Addcontacts";
import EditContact from "./Components/Editcontacts";
import Cards from "./Components/Cards";
import { Box } from "grommet";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getpersons());
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const getuser = (person) => {
    setName(person.name);
    setEmail(person.email);
    setAge(person.age);
    setId(person._id);
  };
  const Persons = useSelector((state) => state.persons);
  console.log("persons", Persons);
  return (
    <Box className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Cards Persons={Persons} getuser={getuser} />}
        />

        <Route
          path="/add-contact"
          element={
            <AddContact
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              age={age}
              setAge={setAge}
            />
          }
        />

        <Route
          path="/edit-contact"
          element={
            <EditContact
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              age={age}
              setAge={setAge}
              id={id}
            />
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
