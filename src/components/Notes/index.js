import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  BgContainer,
  NotesContainer,
  MainHeading,
  Form,
  TitleInput,
  NoteInput,
  AddButton,
  ImageContainer,
  NoneImage,
  NoneHeading,
  NonePara,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteText, setNoteText] = useState('')
  const [notesList, setNotesList] = useState([])

  const listItems = () => (
    <NotesList>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesList>
  )

  const renderNoneList = () => (
    <ImageContainer>
      <NoneImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoneHeading>No notes yet</NoneHeading>
      <NonePara>Notes you add will appear here</NonePara>
    </ImageContainer>
  )

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNoteText(event.target.value)
  }

  const onAddNote = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      noteText,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setTitle('')
    setNoteText('')
  }

  return (
    <BgContainer>
      <MainHeading>Notes</MainHeading>
      <NotesContainer>
        <Form onSubmit={onAddNote}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <NoteInput
            placeholder="Take a Note..."
            onChange={onChangeNote}
            value={noteText}
          />
          <AddButton type="submit">Add</AddButton>
        </Form>
      </NotesContainer>
      {notesList.length === 0 ? renderNoneList() : listItems()}
    </BgContainer>
  )
}

export default Notes
