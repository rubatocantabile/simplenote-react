import React from 'react';
import './index.css';
import ListItem from '../ListItem';
class List extends React.Component {
  render() {
    const { notes, activeId, onListItemClick } = this.props;
    return (
      <div className="list">
        {notes.map((item) => {
          const { id, date, contents } = item;
          return (
            <ListItem
              key={id}
              id={id}
              active={id === activeId}
              date={date}
              contents={contents}
              onClick={() => onListItemClick(id)}
            />
          );
        })}
      </div>
    );
  }
}
export default List;