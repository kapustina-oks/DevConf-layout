import React from 'react';

interface IParagraphProps {
   text: string
    margin?:string
   fontWeight?: string
   textAlign?: string
    textSize?: string
}

const Paragraph = ({
	text, margin, fontWeight, textAlign, textSize,
}: IParagraphProps) => (
	<p className={` ${margin ? margin : null}
        font-${fontWeight ? fontWeight : ''} 
        text-${textAlign ? textAlign : ''}
        text-${textSize ? textSize : 'base'} 
        text-[#343D48]`}>{text}</p>
);

export default Paragraph;
