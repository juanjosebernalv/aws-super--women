import './weeks.css';
// import { Button, Tooltip } from 'antd';
// import { IoChevronBackCircle } from "react-icons/io5";

const Week3 = () => {

  // const router = useRouter();
  // const handleBack = () => {
  //   router.push('/');
  // };

  return (
    <div className="w-full h-fit min-h-screen text-5xl flex flex-col justify-center items-center gap-10 p-10">
      {/* <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<IoChevronBackCircle />} onClick={handleBack} />
      </Tooltip>Plan de estudios semana 2 */}

      <hr/>
      <div className='w-5/6 h-5/6 flex flex-col md:flex-row text-xl gap-10 justify-around items-center'>
        Guardrails :: 22:40 - 33:00
        <iframe
          className='w-11/12 h-96'
          src="https://www.youtube.com/embed/J0VsNNSdtuY?si=AEv_6KY_ZZcJLJbv&start=1320"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='w-5/6 h-20 flex flex-col md:flex-row text-xl gap-10 justify-around items-center mb-96 border-white border-2'>
        <a href='https://www.meetup.com/aws-women-colombia-user-group/events/306002942' target='_blank' rel='noreferrer'>Actividad 2 - Amazon Bedrock L200</a>
      </div>

    </div>
  );
}

export default Week3;
