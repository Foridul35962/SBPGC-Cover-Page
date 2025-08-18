import { useRef, useState } from "react"

const information = ({setAllData}) => {

    const examYearElement = useRef();
    const studentNameElement = useRef();
    const studentRollElement = useRef();
    const studentRegElement= useRef();
    const studentSessionElement = useRef();
    const [semester, setSemester] = useState("select semester");
    const [courseName, setCourseName] = useState("select course name");
    const [teacherName, setTeacherName] = useState("select teacher name");
    const handleSubmit = (event) =>{
        event.preventDefault();
        const examYear = examYearElement.current.value;
        const studentName = studentNameElement.current.value;
        const studentRoll = studentRollElement.current.value;
        const studentReg = studentRegElement.current.value;
        const studentSession = studentSessionElement.current.value;
        const allData={semester,examYear,courseName: JSON.parse(courseName),teacherName,studentName,studentRoll,studentReg,studentSession};
        setAllData(allData);
        examYearElement.current.value="";
        studentNameElement.current.value="";
        studentRollElement.current.value="";
        studentRegElement.current.value="";
        studentSessionElement.current.value="";
    }
    return (
        <div className="w-full flex flex-col justify-center items-center px-7">
            <h1 className="text-3xl bg-blue-800 px-3 py-1.5 mb-10 rounded-2xl">Lab report</h1>
            <form className="text-lg" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2.5">
                        <h2 className="text-2xl text-[#bc5090] font-bold">Exam Information:</h2>
                        <div className="flex gap-10 items-center">
                            <div className="flex-row">
                                <label htmlFor="semesterId" className="mr-2">Your Semester: </label>
                                <select className="bg-orange-600 p-1 cursor-pointer rounded-xl" id='semesterId' name="1st" required value={semester} onChange={(e) => setSemester(e.target.value)}>
                                    <option value="1st Year 1st Semester">semester</option>
                                    <option value="1st Year 1st Semester">1st</option>
                                    <option value="1st Year 2nd Semester">2nd</option>
                                    <option value="2nd Year 1st Semester">3rd</option>
                                    <option value="2nd Year 2nd Semester">4th</option>
                                    <option value="3rd Year 1st Semester">5th</option>
                                    <option value="3rd Year 2nd Semester">6th</option>
                                    <option value="4th Year 1st Semester">7th</option>
                                    <option value="4th Year 2nd Semester">8th</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="examYear" className="mr-3">Exam Year:</label>
                                <input className="border-2 rounded-xl w-25 p-1 px-2" type="number" id='examYear' ref={examYearElement} placeholder="Ex: 2025" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="courseName" className="mr-2">Your Course Name:</label>
                            <>
                                {
                                    semester === '2nd Year 2nd Semester' && (
                                        <select className="bg-amber-600 p-1 cursor-pointer rounded-xl" id='courseName' name="" value={courseName} onChange={(e) => { setCourseName(e.target.value) }} required>
                                            <option value={JSON.stringify({ name: "", code: "" })}>Subject</option>
                                            <option value={JSON.stringify({ name: "Database Management System", code: "520222" })}>DBMS</option>
                                            <option value={JSON.stringify({ name: "Microprocessor And Assembly Language", code: "520224" })}>Microprocessor</option>
                                            <option value={JSON.stringify({ name: "Design And Analysis of Algorithm", code: "520226" })}>Algorithm</option>
                                        </select>
                                    )
                                }
                                {
                                    semester === '3rd Year 1st Semester' && (
                                        <select className="bg-amber-600 p-1 cursor-pointer rounded-xl" id='courseName' name="" value={courseName} onChange={(e) => { setCourseName(e.target.value) }} required>
                                            <option value={JSON.stringify({ name: "", code: "" })}>Subject</option>
                                            <option value={JSON.stringify({ name: "Peripheral and Interfacing", code: "530202" })}>Peripheral</option>
                                            <option value={JSON.stringify({ name: "Data and Telecommunications", code: "530204" })}>Telecommunications</option>
                                            <option value={JSON.stringify({ name: "Operating System", code: "530206" })}>Operating System</option>
                                        </select>
                                    )
                                }
                            </>
                        </div>
                    </div>
                    <div className="[&>*]:flex *:gap-3 *:items-center flex flex-col gap-2">
                        <h2 className="text-2xl text-[#bc5090] font-bold mb-2">Student Information:</h2>
                        <div>
                            <label htmlFor="studentName">Student Name:</label>
                            <input className="border-2 px-2 py-1 rounded-xl" ref={studentNameElement} type="text" id="studentName" placeholder="Ex: Foridul" />
                        </div>
                        <div>
                            <label htmlFor="studentRoll">Student Roll:</label>
                            <input className="border-2 px-2 py-1 rounded-xl" ref={studentRollElement} type="number" id="studentRoll" placeholder="Ex: 2547896" />
                        </div>
                        <div>
                            <label htmlFor="studentReg">Student Registration Number:</label>
                            <input className="border-2 px-2 py-1 rounded-xl" ref={studentRegElement} type="number" id="studentReg" placeholder="Ex: 54200459635" />
                        </div>
                        <div>
                            <label htmlFor="studentSession">Student Session Number:</label>
                            <input className="border-2 px-2 py-1 rounded-xl" ref={studentSessionElement} type="text" id="studentSession" placeholder="Ex: 2021- 22" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl text-[#bc5090] font-bold">Course Teacher Information:</h2>
                        <div className="flex flex-row gap-2">
                            <label htmlFor="teacherName">Teacher Name:</label>
                            <select className="bg-amber-600 p-1 cursor-pointer rounded-xl" id='teacherName' name="" required value={teacherName} onChange={(e) => setTeacherName(e.target.value)}>
                                <option value="">Teacher Name</option>
                                <option value="Shamima Nasrin Daisy">Shamima Nasrin Daisy</option>
                                <option value="Md. Habibur Rahman">Md. Habibur Rahman</option>
                                <option value="A.Z.M Azizul Bahar">A.Z.M Azizul Bahar</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-10">
                        <button type="submit" className="text-3xl bg-blue-800 px-3 py-1.5 mb-10 rounded-2xl cursor-pointer hover:scale-105 active:bg-blue-900">Create Cover Page</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default information