import { Button } from "antd"

// eslint-disable-next-line react/prop-types
const CustomButton = ({customStyle,handleClick,title,variant,type}) => {
  return (
    <Button
    onClick={handleClick}
    className={customStyle}
    variant={variant}
    type={type}
    >
        {title}
    </Button>
  )
}

export default CustomButton
