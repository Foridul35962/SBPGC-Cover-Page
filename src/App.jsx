import Informations from "./component/informations"
import Certificates from "./component/certificates"
import { useState } from "react";

const App = () => {
  const [allData, setAllData] = useState(null);
  return (
    <div className="bg-gray-800 text-white w-screen flex">
      {!allData && <Informations setAllData={setAllData} />}
      {allData && <Certificates allData={allData} />}
    </div>
  )
}

export default App