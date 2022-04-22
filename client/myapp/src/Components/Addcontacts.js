import React from "react";
import { useDispatch } from "react-redux";
import { addperson } from "../redux/action/action";
import { Link } from "react-router-dom";
import { Button } from "grommet";
const AddContact = ({ name, email, age, setName, setEmail, setAge }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addperson({ name, email, age }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <Link to={"/"}>
        {" "}
        <Button primary size="small" label="Add" onClick={handleClick} />{" "}
      </Link>
    </div>
  );
};

export default AddContact;
