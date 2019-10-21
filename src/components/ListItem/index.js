import React from 'react';
import './index.css';

class ListItem extends React.Component {
  render() {
    const { active, date, contents, onClick } = this.props;
    return (
      <div
        className={active ? "list-item active" : "list-item"}
        onClick={onClick}
      >
        <div className="date">{date ? date : '날짜'}</div>
        <div className="list-item-contents">{contents ? contents : '당신의 이야기'}</div>
      </div>
    );
  }
}

export default ListItem;