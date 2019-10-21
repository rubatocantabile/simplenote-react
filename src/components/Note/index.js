import React from 'react';
import './index.css';
import DateSelect from '../DateSelect';

class Note extends React.Component {

  render() {
    const { note, onEditNote } = this.props;
    const { date, contents } = note;
    return (
      <div className="note">
        <DateSelect
          className="date"
          date={date}
          onDateChange={(date) => onEditNote('date', date)}
        />
        <textarea
          className="note-contents"
          value={contents}
          onChange={(e) => onEditNote('contents', e.target.value)}
        />
      </div>
    );
  }
}

export default Note;