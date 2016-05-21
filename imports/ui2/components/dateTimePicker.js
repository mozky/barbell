import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';

export class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      date: '2016-01-01',
      format: 'YYYY-MM-DD',
      inputFormat: 'YYYY-MM-DD',
      mode: 'date',
    };
  }

  handleChange(newDate) {
    this.setState({ date: newDate });
  }

  render() {
    const { date, format, mode, inputFormat } = this.state;
    const id = { id: 'formDate' };
    return (
      <DateTimeField
        inputProps={id}
        dateTime={date}
        format={format}
        value={date}
        viewMode={mode}
        inputFormat={inputFormat}
        onChange={this.handleChange}
      />
    );
  }
}
