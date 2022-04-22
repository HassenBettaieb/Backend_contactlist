import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteperson } from "../redux/action/action";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Button,
} from "grommet";
//import { Button } from "react-bootstrap";
const ContactCard = ({ el, getuser }) => {
  const dispatch = useDispatch();
  const handledelete = () => {
    dispatch(deleteperson(el._id));
  };
  return (
    <div>
      <Box direction="row" pad="medium" gap="large" width="xlarge">
        <Card height="small" width="large" background="light-1">
          <CardBody pad="medium">
            <Text> {el.name} </Text>
            <Text>{el.email}</Text>
            <Text>{el.age} </Text>
          </CardBody>
          <CardFooter pad={{ horizontal: "small" }} background="light-2">
            {" "}
            <Box gap="xsmall" direction="row">
              <Link to={`/edit-contact`}>
                <Button
                  primary
                  size="xsmall"
                  label="Edit"
                  onClick={() => getuser(el)}
                />
              </Link>
              <Button
                primary
                size="small"
                label="Delete"
                onClick={handledelete}
              />
            </Box>
          </CardFooter>
        </Card>
      </Box>
    </div>
  );
};

export default ContactCard;
