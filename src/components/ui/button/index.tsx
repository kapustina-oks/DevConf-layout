import React from 'react';

interface IButtonProps {
    title: string
    styles?: string
}

const Button = ({ title, styles }: IButtonProps): JSX.Element => (
	<button
		className={`text-sm rounded-3xl py-3 font-medium
             text-white
            ${styles}
            `}>
		{title}
	</button>
);

export default Button;
