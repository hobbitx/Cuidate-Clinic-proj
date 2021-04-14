import "date-fns";
import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

class HourPicker extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    console.log(event.target.value);
    event.target.name = this.props.internalId;
    let newEvent = {
      target: {
        name: this.props.internalId,
        value: event.target.value,
      },
    };
    this.props.onChange(newEvent);
  }
  render() {
    return (
      <TextField
        id="time"
        label="Horário"
        select
        type="time"
        defaultValue="--:--"
        InputLabelProps={{
          shrink: true,
        }}
      >
        <MenuItem value="08:00">08:00</MenuItem>
        <MenuItem value="09:00">09:00</MenuItem>
        <MenuItem value="10:00">10:00</MenuItem>
        <MenuItem value="11:00">11:00</MenuItem>
        <MenuItem value="12:00">12:00</MenuItem>
        <MenuItem value="13:00">13:00</MenuItem>
        <MenuItem value="14:00">14:00</MenuItem>
        <MenuItem value="15:00">15:00</MenuItem>
        <MenuItem value="16:00">16:00</MenuItem>
        <MenuItem value="17:00">17:00</MenuItem>
      </TextField>
    );
  }
}
export default HourPicker;
