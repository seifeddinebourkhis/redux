import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const Filter = ({ setFilter, filter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="All"
          name="all"
          value={filter}
          onChange={handleChange}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <FormControlLabel
            onClick={() => {
              setFilter("All");
            }}
            value="All"
            control={<Radio />}
            label="All"
          />
          <FormControlLabel
            onClick={() => {
              setFilter("Done");
            }}
            value="Done"
            control={<Radio />}
            label="Done"
          />
          <FormControlLabel
            onClick={() => {
              setFilter("Undone");
            }}
            value="Undone"
            control={<Radio />}
            label="Undone"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;