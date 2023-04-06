import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  Container,
  Heading,
  Description,
  DirectionsList,
  ColorPickerContainer,
  InputColorContainer,
  ColorCode,
  Input,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    input1: '#8ae323',
    input2: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerateGradient = () => {
    const {input1, input2, gradientDirection} = this.state
    this.setState({
      gradientValue: `to ${gradientDirection}, ${input1}, ${input2}`,
    })
  }

  onChangeColorInput1 = event => {
    this.setState({input1: event.target.value})
  }

  onChangeColorInput2 = event => {
    this.setState({input2: event.target.value})
  }

  onDirectionItem = direction => {
    this.setState({gradientDirection: direction})
  }

  render() {
    const {gradientDirection, input1, input2, gradientValue} = this.state

    return (
      <BgContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Container>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Description>Choose Direction</Description>
          <DirectionsList>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                directionDetails={each}
                onDirectionItem={this.onDirectionItem}
                isActive={gradientDirection === each.value}
              />
            ))}
          </DirectionsList>
          <Description>Pick the Colors</Description>
          <ColorPickerContainer>
            <InputColorContainer>
              <ColorCode>{input1}</ColorCode>
              <Input
                type="color"
                onChange={this.onChangeColorInput1}
                value={input1}
              />
            </InputColorContainer>
            <InputColorContainer>
              <ColorCode>{input2}</ColorCode>
              <Input
                type="color"
                onChange={this.onChangeColorInput2}
                value={input2}
              />
            </InputColorContainer>
          </ColorPickerContainer>
          <GenerateButton onClick={this.onGenerateGradient}>
            Generate
          </GenerateButton>
        </Container>
      </BgContainer>
    )
  }
}

export default GradientGenerator
