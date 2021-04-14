  
import "date-fns";
import React from "react";
import TextField from '@material-ui/core/TextField';

class DatePicker extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.target.name = this.props.internalId;
    let newEvent = {
        target: {
            name: this.props.internalId,
            value: event.target.value
        }
    }
    
    console.log(newEvent)
    this.props.onChange(newEvent);
  }
   render() {
    return (
        <TextField
        id="datetime-local"
        label={this.props.label}
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