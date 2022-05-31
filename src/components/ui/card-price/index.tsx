import IconBox from "../icon-box";
import Paragraph from "../paragraph";
import Button from "../button";

interface ICardPriceProps {
    title: string,
    subTitle: string,
    line_1: string,
    line_2: string,
    line_3: string,
    price: string,
    icon: string,
}

const CardPrice = ({title, subTitle, price, line_1, line_3, line_2, icon}: ICardPriceProps) => {
    return (
        <div className='flex flex-col justify-between items-center p-8 border border-[#EDEDED] rounded-xl'>
            <div className='self-baseline'>
                <IconBox height={32} width={32} img={icon} subtitle={subTitle} title={title}
                         subTitleStyles='text-sm text-[#B8B8B8]' titleStyles='text-base font-medium text-[#0F2137]'
                />
            </div>
            <div>
                <Paragraph text={line_1} margin='mb-5 mt-5'/>
                <Paragraph text={line_2} margin='mb-5'/>
                <Paragraph text={line_3} margin='mb-5'/>
            </div>
            <p className='text-3xl text-[#00BA40] font-medium mb-4'>{price}</p>
            <Button title='Buy now' shadow='lg' shadowColor='[#00BA40]' />
        </div>
    )
}

export default CardPrice;
