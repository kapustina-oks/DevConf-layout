interface ITitleProps {
    title: string
    marginBottom?: string
}

const Title = ({title, marginBottom = '16'}: ITitleProps): JSX.Element => {
    return (
        <h3 className={`mb-${marginBottom} text-[#0F2137] text-3xl font-medium`}>{title}</h3>
    )
}

export default Title;