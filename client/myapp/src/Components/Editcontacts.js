import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { editperson } from "../redux/action/action";
import { Button } from "grommet";
const EditContact = ({ name, age, email, setAge, setName, setEmail, id }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editperson({ name, age, email }, id));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Link to={"/"}>
        {" "}
        <Button primary size="small" label="Edit" onClick={handleEdit} />{" "}
      </Link>
    </div>
  );
};

export default EditContact;
