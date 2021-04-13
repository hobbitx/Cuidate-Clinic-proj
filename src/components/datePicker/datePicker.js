  
import "date-fns";
import React from "react";
import TextField from '@material-ui/core/TextField';

class DatePicker extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    console.log(event.target.value)
    event.target.name = this.props.internalId;
    let newEvent = {
        target: {
            name: this.props.internalId,
            value: event.target.value
        }
    }
    this.props.onChange(newEvent);
  }
   render() {
    return (
        <TextField
        id="datetime-local"
        label="Data de contratação"
        variant = "outlined"
        type="date"
        fullWidth
        onChange={this.onChange}
        InputLabelProps={{
          shrink: true,
        }}
        />
    );
  }
}
export default DatePicker;