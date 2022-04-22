import { Grid } from "grommet";
const AppGrid = ({ Children }) => (
  <Grid
    rows={["xsmall", "2100px"]}
    columns={["xlarge"]}
    gap="small"
    areas={[
      { name: "header", start: [0, 0], end: [1, 0] },

      { name: "main", start: [0, 1], end: [0, 1] },
    ]}
  >
    {Children}
  </Grid>
);

export default AppGrid;
