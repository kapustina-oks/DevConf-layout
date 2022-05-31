interface IButtonProps {
    title: string
    marginRight?: string // mr-4
    textColor?: string // text-white
    shadow?: string // shadow-lg
    shadowColor?: string //shadow-[#00bc3c]
    bgColor?: string //bg-[#00BA40]
    fontWeight?: string //font-bold
    selfContent?: string // self-center
    paddingX?: string
    paddingY?: string
}

const Button = ({title, marginRight, textColor, shadow, shadowColor, bgColor, fontWeight, selfContent, paddingX, paddingY }: IButtonProps): JSX.Element => {
    console.log(bgColor)
    return (
        <button
            className={`text-sm rounded-3xl 
            px-${paddingX ? paddingX : '4'} 
            py-${paddingY ? paddingY : '3'} 
            bg-${bgColor ? bgColor : '[#00BA40]'} 
            mr-${marginRight ? marginRight : ''} 
            text-${textColor ? textColor : 'white'} 
            shadow-${shadow ? shadow : ''}
            font-${fontWeight? fontWeight : 'medium'}
            shadow-${shadowColor ? shadowColor : ''}
            self-${selfContent? selfContent : ''}
            `}>
            {title}
        </button>
    )
}

export default Button;
