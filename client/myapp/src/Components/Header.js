import { Link } from "react-router-dom";
import { Box, Button } from "grommet";
const Header = () => (
  <Box
    background="light-1"
    direction="row"
    align="center"
    elevation="small"
    justify="around"
    pad="small"
  >
    <Link to={"/"}>
      <Button primary size="small" label="contactlist" />
    </Link>{" "}
    <Link to={"/add-contact"}>
      <Button primary size="small" label="Add contact" />
    </Link>
  </Box>
);
export default Header;
