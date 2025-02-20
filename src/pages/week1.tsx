import './weeks.css';
// import { Button, Tooltip } from 'antd';
// import { IoChevronBackCircle } from "react-icons/io5";

const Week1 = () => {

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
        Actividad 1 - ¿Qué es la nube? :: 18:45 - 25:00
        <iframe
          className='w-11/12 h-96'
          src="https://www.youtube.com/embed/6l1ePkFyKEc?start=1080"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='w-5/6 h-5/6 flex flex-col md:flex-row text-xl gap-10 justify-around items-center'>
        Actividad 2 - Información general de AWS :: 25:10 - 31:50
        <iframe
          className='w-11/12 h-96'
          src="https://www.youtube.com/embed/6l1ePkFyKEc?start=1500"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='w-5/6 h-5/6 flex flex-col md:flex-row text-xl gap-10 justify-around items-center'>
        Actividad 3 - Modelo responsabilidad compartida :: 40:00 - 42:15
        <iframe
          className='w-11/12 h-96'
          src="https://www.youtube.com/embed/6l1ePkFyKEc?start=2400"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='w-5/6 h-5/6 flex flex-col md:flex-row text-xl gap-10 justify-around items-center'>
        Actividad 4 - ¿Qué es GenAI? :: 6:40 - 9:35
        <iframe
          className='w-11/12 h-96'
          src="https://www.youtube.com/embed/QOIlCjV6LAw?start=360"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='w-5/6 h-20 flex flex-col md:flex-row text-xl gap-10 justify-around items-center mb-96 border-white border-2'>
        <a href='https://www.meetup.com/aws-women-colombia-user-group/events/306002925/' target='_blank' rel='noreferrer'>Actividad 5 - Conceptos genAI</a>
      </div>

    </div>
  );
}

export default Week1;
