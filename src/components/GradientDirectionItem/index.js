// Write your code here
import {DirectionItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, onDirectionItem} = props
  const {displayText, value} = directionDetails
  const onClickDirectionBtn = () => {
    onDirectionItem(value)
  }

  return (
    <DirectionItem>
      <Button isActive={isActive} type="button" onClick={onClickDirectionBtn}>
        {displayText}
      </Button>
    </DirectionItem>
  )
}

export default GradientDirectionItem
