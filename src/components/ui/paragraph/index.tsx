
interface IParagraphProps {
   text: string

    margin?:string
   //marginBottom?: string
   fontWeight?: string
   //marginX?: string
   textAlign?: string
}

const Paragraph = ({text, margin, fontWeight, textAlign}: IParagraphProps) => {
    return (
        <p className={` ${margin ? margin : null}
        font-${fontWeight ? fontWeight : ''} 
        text-${textAlign ? textAlign : ''}
        text-base text-[#343D48]`}>{text}</p>
    )
}

export default Paragraph;
