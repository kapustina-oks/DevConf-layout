interface IButtonTitleProps {
    title: string
    marginRight?: string
}

const ButtonTitle = ({title, marginRight}: IButtonTitleProps): JSX.Element => {
    return (
        <button className={`mb-6 px-3 py-2 rounded-3xl 
        bg-[#c1e3cd] text-[#00ba40] text-sm text-green-900 mr-${marginRight ? marginRight : null}`}>{title}</button>
    )
}

export default ButtonTitle;
