import ContactCard from "./Contactcard";

const Cards = ({ Persons, getuser }) => {
  return (
    <div className="list">
      {" "}
      {Persons.person.map((el) => (
        <ContactCard el={el} getuser={getuser} />
      ))}
    </div>
  );
};

export default Cards;
