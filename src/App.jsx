import TABLE from './tabel';
import POPUP from './popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';

function App() {
  const [tempData,setTempData]=useState({});
  const [show, setShow] = useState(false);
  const [status,setStatus]=useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (rowData) => {
    if(rowData){
      setTempData(rowData)
    }
    else{
      setTempData({
        name:null,
        email:null,
        phoneNo:null,
        qualification:null,
        location:null
      })
    }
    setShow(true)
  };
  return (
    <>
      <div className="container-fluid">
        <POPUP boxshow={show} boxclose={handleClose} temp={tempData} setTemp={setTempData} change={status} setChange={setStatus}/>
        <TABLE click={handleShow} change={status} setChange={setStatus} />
      </div>
    </>
  )
}

export default App
