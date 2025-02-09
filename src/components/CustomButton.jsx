import { Button } from "antd"

// eslint-disable-next-line react/prop-types
const CustomButton = ({ customStyle = 'bg-[#C6605D] text-white', handleClick, title,  variant, type 
}) => {
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