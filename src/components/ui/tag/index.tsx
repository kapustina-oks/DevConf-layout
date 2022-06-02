import React from 'react';

interface ITagProps {
    text: string
}

const Tag = ({ text }: ITagProps) => (
	<h6 className="bg-[#F3F3F3] px-4 py-3 mr-4 mb-4 rounded-3xl inline-block text-base text-[#343D48] font-medium">{text}</h6>
);

export default Tag;
