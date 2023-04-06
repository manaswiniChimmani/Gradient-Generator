// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  font-family:"Roboto",
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`

export const Heading = styled.h1`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
   font-family:"Roboto",
  font-size: 27px;
`

export const Description = styled.p`
  color: #ededed;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
`

export const DirectionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const InputColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorCode = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
`

export const Input = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-size: 14px;
  font-weight: 500;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding: 10px;
  margin-left: 15px;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-top: 25px;
  outline: none;
  cursor: pointer;
`
