import ButtonTitle from "../../components/ui/button-title";
import Title from "../../components/ui/title";
import Button from "../../components/ui/button";
import Speaker from "../../components/ui/speaker";
import speakers from "./data";

const Schedule = () => {
    return (
        <div className='mt-28 flex flex-col items-center'>
            <ButtonTitle title='Meet-up' />
            <Title title='Schedule' />

            <div className='bg-[#F5F5F5] rounded-xl mb-10 p-4 self-start ml-11'>
                {
                    ['Day 1', 'Day 2', 'Day 3'].map((day, i) => <Button title={day} key={i}
                                                                        marginRight='4' />)
                }
            </div>

            <h6 className='self-start text-[#0F2137] text-2xl font-medium mb-10 ml-11'>Wednesday - 24 oct</h6>

               <div className='ml-11 min-w-full'>
                   {
                       speakers.map(speaker => <Speaker key={speaker.id}
                                                        speaker={speaker.speaker}
                                                        description={speaker.description}
                                                        title={speaker.title}
                                                        time={speaker.time}
                                                        photo={speaker.photo}
                                                        place={speaker.place} id={speaker.id}/>)
                   }
               </div>
            <div className='flex mt-10'>
                <Button title='Get tickets' marginRight='4'/>
                <Button title='Download Schedule' bgColor='sky-900'/>
            </div>
        </div>
    )
}

export default Schedule;
