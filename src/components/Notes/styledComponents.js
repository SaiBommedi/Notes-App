import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MainHeading = styled.h1`
  font-family: Bree Serif;
  color: #4c63b6;
`

export const NotesContainer = styled.div`
  width: 90%;
  margin-top: 48px;
  margin-bottom: 48px;
  border-radius: 4px;
  box-shadow: 1px 1px 3px 3px #aab8c8;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const TitleInput = styled.input`
  border: none;
  margin: 10px;
  outline: none;
  color: #334155;
`

export const NoteInput = styled.textarea`
  border: none;
  margin: 10px;
  outline: none;
`
export const AddButton = styled.button`
  font-family: roboto;
  border: none;
  align-self: flex-end;
  height: 35px;
  width: 60px;
  color: white;
  border-radius: 5px;
  margin: 10px;
  background-color: #4c63b6;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

export const NoneImage = styled.img`
  height: 200px;
  width: 200px;
`

export const NoneHeading = styled.h1`
  font-family: roboto;
  color: #334155;
`

export const NonePara = styled.p`
  font-family: roboto;
  color: #475569;
`
export const NotesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  padding-left: 0;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`
