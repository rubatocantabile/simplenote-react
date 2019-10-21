import React from 'react';
import './index.css';
import Header from '../Header';
import List from '../List';
import Note from '../Note';
import { generateId } from '../../utils';

class App extends React.Component {
  state = {
    notes: [
      {
        id: 'initial',
        date: '매일의 생활을 기록해보세요.',
        contents: '당신의 하루하루를 모아 한 문장으로 표현해 드립니다.'
      }
    ],
    activeId: 'initial'
  }

  handleListItemClick = (id) => {
    this.setState({ activeId: id });
  }

  handleAddNote = () => {
    const id = generateId();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          date: '날짜',
          contents: '일기',
        },
      ],
      activeId: id,
    });
  }

  handleDeleteNote = () => {
    const notes = this.state.notes.filter((item) => item.id !== this.state.activeId);
    this.setState({
      notes,
      activeId: notes.length === 0 ? null : notes[0].id,
    });
  }

  handleEditNote = (type, value) => {
    const notes = [ ...this.state.notes ];
    const note = notes.find((item) => item.id === this.state.activeId)
    note[type] = value;
    this.setState({
      notes,
    });
  }

  render() {
    const { notes, activeId } = this.state;
    const activeNote = notes.filter((item) => item.id === activeId)[0];
    return (
      <div className="app">
        <Header
          onAddNote={this.handleAddNote}
          onDeleteNote={this.handleDeleteNote}
        />
        <div className="container">
          <List
            notes={notes}
            activeId={activeId}
            onListItemClick={this.handleListItemClick}
          />
          {
            notes.length !== 0 && <Note note={activeNote} onEditNote={this.handleEditNote} />
          }
        </div>
      </div>
    );
  }
}

export default App;