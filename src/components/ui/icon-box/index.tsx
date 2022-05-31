import Icon from "../icon";

interface IIconBoxProps {
    img: string
    title: string
    subtitle: string
    width?: number
    height?: number
    paddingX?: string
    paddingY?: string
    marginRight?: string
    titleStyles?: string
    subTitleStyles?: string
    mainMarginR?: string
}

const IconBox = ({subtitle, title, width = 32, img, paddingX = '2', paddingY = '2',
                     height = 32, marginRight, subTitleStyles, titleStyles, mainMarginR}: IIconBoxProps) => {
    return (
        <div className='flex justify-between mr-12'>
            <Icon img={img} width={width} height={height} paddingY={paddingX} paddingX={paddingY} marginR={marginRight}/>

            <div className='flex flex-col justify-between'>
                <p className={`${titleStyles ? titleStyles : null}`}>{title}</p>
                <p className={`${subTitleStyles ? subTitleStyles : null}`}>{subtitle}</p>
            </div>
        </div>
    )
}

export default IconBox;
