import './App.css';
import { LeftBar, Horoscope, Result, ArrowBtn } from './components/index';
import { useState } from 'react';
import './styles/arrowBtn.css';

const App = () => {
  const [show, setShow] = useState(true);
  const [tabToggle, setTabToggle] = useState(true);
  const [data, setData] = useState();
  const [zodiac, setZodiac] = useState('Aries');
  const [day, setDay] = useState('Today');
  const [loading , setLoading ] = useState(false);

  return <div className='container'>
    <LeftBar show={show} setShow={setShow} />
    {tabToggle ?
    <div className='horoscopeBtnCon'>
      <Horoscope zodiac={zodiac} setZodiac={setZodiac} day={day} setDay={setDay} />
      <ArrowBtn setData={setData} tabToggle={tabToggle} setTabToggle={setTabToggle} />
    </div> : <Result setData={setData} tabToggle={tabToggle} setTabToggle={setTabToggle} loading={loading} setLoading={setLoading} zodiac={zodiac} day={day} data={data} setData={setData} /> }

  </div>
};

export default App;