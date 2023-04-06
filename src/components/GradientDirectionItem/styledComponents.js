// Style your elements here
import styled from 'styled-components'

export const DirectionItem = styled.li`
  list-style-type: none;
  font-family: 'Roboto';
`
export const Button = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  text-align: center;
  background-color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 14px;
  margin-bottom: 10px;
  outline: none;
  cursor: pointer;
`
