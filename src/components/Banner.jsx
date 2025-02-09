
import { Image } from '@mantine/core'

// eslint-disable-next-line react/prop-types
export const Banner = ({ path,className}) => {
    return (
        <div>
            <Image
                src={path}
                alt='banner'
                className={className}
                width={'auto'}
                fit="contain"
            />
        </div>
    )
}
