import ButtonTitle from "../../components/ui/button-title";
import Title from "../../components/ui/title";
import Paragraph from "../../components/ui/paragraph";
import Button from "../../components/ui/button";

const Sponsors = () => {
    return (
        <div className='flex flex-col items-center mt-28 relative'>
            <ButtonTitle title='Support meet'/>
            <Title title='Sponsors & Partners'/>
            <Paragraph text='Want to become a sponsor? Get in touch lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat magna eu accumsan mattis.' textAlign='center'/>

            <div className='grid grid-cols-6'>
                {
                    data.map((item, i) => <LogoImg key={i} img={item.img} />)
                }
            </div>

            <Button title='Become a sponsor'/>
        </div>
    )
}

export default Sponsors;
