import React from 'react';
import './index.css';

class Header extends React.Component {
  render() {
    const { onAddNote, onDeleteNote } = this.props;
    return (
      <div className="header">
        <div className="title">
          <span>1Sentence</span>
        </div>
        <div className="buttons">
          <button onClick={onAddNote}>쓰기</button>
          <button onClick={onDeleteNote}>지우기</button>
        </div>
      </div>
    );
  }
}
export default Header;