import ButtonTitle from "../../components/ui/button-title";
import Title from "../../components/ui/title";
import Paragraph from "../../components/ui/paragraph";
import Card from "../../components/ui/card";
import users from "./data";
import Button from "../../components/ui/button";

const Speakers = () => {
    return (
        <div className='mt-28 flex flex-col items-center'>
            <ButtonTitle title='About speakers' />
            <Title title='Speakers' marginBottom='4'/>
            <Paragraph text='List your featured speakers here. You can provide more info about each speaker in the relevant modal windows. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                       margin='mx-80 mb-16' textAlign='center'/>
            <div className='grid grid-cols-4 gap-4 mb-4'>
                {
                    users.map(user => <Card name={user.name} job={user.job} photo={user.photo} id={user.id} key={user.id}/>)
                }
            </div>

            <Button title='Get tickets' bgColor='[#00BA40]' textColor='white' shadowColor='[#00bc3c]' shadow='lg'/>
        </div>
    )
}

export default Speakers;
