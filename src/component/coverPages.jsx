// coverPage.jsx
import { useRef } from "react";
import dfImage from "./images.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const coverPage = ({ allData, setAllData, notify }) => {
  const coverPageRef = useRef();

  const handleDownloadPDF = () => {
    const input = coverPageRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4"); // portrait, points, A4 size
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`CoverPage_${allData.studentName}_${allData.courseName.name}.pdf`);
    });
    notify();
    setAllData(null);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        ref={coverPageRef}
        className="text-black relative w-[768px] h-[1056px] bg-white overflow-hidden"
      >
        
        {/* Background watermark */}
        <div
          className="absolute w-150 h-130 bg-cover bg-center opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundImage: `url(${dfImage})` }}
        ></div>

        {/* coverPage content */}
        <div className="relative z-10 flex flex-col items-start justify-start pt-10 pl-10">
          <div className="flex items-center justify-center gap-2">
            <div>
              <img src={dfImage} alt="logo" className="w-45 mb-2" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-center" style={{ color: '#065f46' }}>
                SHAIKH BURHANUDDIN POST GRADUATE COLLEGE
              </h1>
            </div>
          </div>

          <div className="w-full mt-30 flex flex-col gap-5 text-center">
            <h1 className="text-6xl font-semibold italic">LAB REPORT</h1>
            <h1 className="text-5xl font-semibold italic">{`${allData.semester}, ${allData.examYear}`}</h1>
          </div>

          <div className="w-full mt-20 flex flex-col gap-5 text-center">
            <h1 className="text-6xl font-semibold italic">Department Of CSE</h1>
            <h1 className="text-4xl font-semibold italic">{`Course: ${allData.courseName.name} Lab`}</h1>
            <h1 className="text-4xl font-semibold italic">{`Course Code: ${allData.courseName.code}`}</h1>
          </div>

          <div className="flex gap-5 mt-30">
            <div className="text-2xl border-2 py-2.5 px-2 w-[340px] ml-5">
              <h1 className="w-full text-center text-3xl font-bold">Submitted By</h1>
              <p>{`Name: ${allData.studentName}`}</p>
              <p>{`Roll No: ${allData.studentRoll}`}</p>
              <p>{`Reg No: ${allData.studentReg}`}</p>
              <p>{`Session: ${allData.studentSession}`}</p>
            </div>

            <div className="text-2xl border-2 py-2.5 px-5 w-xs">
              <h1 className="w-full text-center text-3xl font-bold">Submitted To</h1>
              <p>{JSON.parse(allData.teacherName).name}</p>
              <p>{JSON.parse(allData.teacherName).position}</p>
              <p>Department of CSE,</p>
              <p>SBPGC</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download PDF Button */}
      <button
        className="bg-blue-800 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-blue-900"
        onClick={handleDownloadPDF}
      >
        Download PDF
      </button>
    </div>
  );
};

export default coverPage;
