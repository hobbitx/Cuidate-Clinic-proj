import "date-fns";
import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
const min = 8;
const max = 17;
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
  componentWillReceiveProps() {
    console.log(this.props.horas);
  }
  render() {
    return (
      <TextField
        id="time"
        label="Horário"
        select
        fullWidth
        variant="outlined"
        onChange={this.onChange}
        type="time"
        defaultValue="--:--"
        InputLabelProps={{
          shrink: true,
        }}
      >
        {this.props.horas.map((hora) => {
          return <MenuItem value={hora}>{hora}</MenuItem>;
        })}
      </TextField>
    );
  }
}
export default HourPicker;
