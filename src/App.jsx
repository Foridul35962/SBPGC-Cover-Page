import Informations from "./component/informations"
import CoverPage from "./component/coverPages"
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';

const App = () => {
  const [allData, setAllData] = useState(null);
  const notify = () => toast.success('Cover Page is successfully downloaded!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  
  return (
    <div className={`${allData? 'bg-white' : 'bg-gray-800'} text-white flex`}>
      {!allData && <Informations setAllData={setAllData} />}
      {allData && <CoverPage allData={allData} setAllData={setAllData} notify={notify} />}
      <ToastContainer />
    </div>
  )
}

export default App