import { useRef, useState } from "react"
import SubjectInfo from "./subjectInfo";
import TeacherInfo from "./teacherInfo"

const information = ({ setAllData }) => {
    const examYearElement = useRef();
    const studentNameElement = useRef();
    const studentRollElement = useRef();
    const studentRegElement = useRef();
    const studentSessionElement = useRef();
    const [semester, setSemester] = useState("select semester");
    const [courseName, setCourseName] = useState("select course name");
    const [teacherName, setTeacherName] = useState("select teacher name");

    const selectedSemester = SubjectInfo.find((item) => item.semester === semester);
    const subjects = selectedSemester ? selectedSemester.subject : [];


    const handleSubmit = (event) => {
        event.preventDefault();
        const examYear = examYearElement.current.value;
        const studentName = studentNameElement.current.value;
        const studentRoll = studentRollElement.current.value;
        const studentReg = studentRegElement.current.value;
        const studentSession = studentSessionElement.current.value;
        const allData = { semester, examYear, courseName: JSON.parse(courseName), teacherName, studentName, studentRoll, studentReg, studentSession };
        setAllData(allData);
        examYearElement.current.value = "";
        studentNameElement.current.value = "";
        studentRollElement.current.value = "";
        studentRegElement.current.value = "";
        studentSessionElement.current.value = "";
    }
    return (
        <div className="w-full flex flex-col justify-center items-center py-10 px-7">
            <h1 className="text-3xl bg-blue-800 px-3 py-1.5 mb-10 rounded-2xl">Lab report</h1>
            <form className="text-lg" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2.5">
                        <h2 className="text-2xl text-[#bc5090] font-bold">Exam Information:</h2>
                        <div className="flex gap-2 xs:gap-10 items-center">
                            <div className="flex-row">
                                <label htmlFor="semesterId" className="mr-2">Your Semester: </label>
                                <select className="bg-orange-600 p-1 cursor-pointer rounded-xl" id='semesterId' name="1st" required value={semester} onChange={(e) => setSemester(e.target.value)}>
                                    <option value="">semester</option>
                                    <option value="1st Year 1st Semester">1st</option>
                                    <option value="1st Year 2nd Semester">2nd</option>
                                    <option value="2nd Year 3rd Semester">3rd</option>
                                    <option value="2nd Year 4th Semester">4th</option>
                                    <option value="3rd Year 5th Semester">5th</option>
                                    <option value="3rd Year 6th Semester">6th</option>
                                    <option value="4th Year 7th Semester">7th</option>
                                    <option value="4th Year 8th Semester">8th</option>
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
                                    <select
                                        value={courseName} className="bg-amber-600 p-1 w-30 xs:w-50 cursor-pointer rounded-xl"
                                        onChange={(e) => setCourseName(e.target.value)}
                                        required
                                        disabled={subjects.length === 0}
                                    >
                                        <option value="select course name">Select Course</option>
                                        {subjects.map((subj) => (
                                            <option
                                                key={subj.code}
                                                value={JSON.stringify({ name: subj.name, code: subj.code })}
                                            >
                                                {subj.name.split(" ")[0]}
                                            </option>
                                        ))}
                                    </select>
                                }
                            </>
                        </div>
                    </div>
                    <div className="[&>*]:flex *:gap-3 *:items-center flex flex-col gap-2">
                        <h2 className="text-2xl text-[#bc5090] font-bold mb-2">Student Information:</h2>
                        <div>
                            <label htmlFor="studentName">Student Name:</label>
                            <input className="border-2 px-2 w-30 xs:w-50 py-1 rounded-xl" ref={studentNameElement} type="text" id="studentName" placeholder="Ex: Foridul" />
                        </div>
                        <div>
                            <label htmlFor="studentRoll">Student Roll:</label>
                            <input className="border-2 px-2 w-30 xs:w-50 py-1 rounded-xl" ref={studentRollElement} type="number" id="studentRoll" placeholder="Ex: 2547896" />
                        </div>
                        <div>
                            <label htmlFor="studentReg">Student Registration Number:</label>
                            <input className="border-2 px-2 w-30 xs:w-50 py-1 rounded-xl" ref={studentRegElement} type="number" id="studentReg" placeholder="Ex: 54200459635" />
                        </div>
                        <div>
                            <label htmlFor="studentSession">Student Session Number:</label>
                            <input className="border-2 px-2 w-30 xs:w-50 py-1 rounded-xl" ref={studentSessionElement} type="text" id="studentSession" placeholder="Ex: 2021- 22" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl text-[#bc5090] font-bold">Course Teacher Information:</h2>
                        <div className="flex flex-col xs:flex-row gap-2">
                            <label htmlFor="teacherName">Teacher Name:</label>
                            <select className="bg-amber-600 w-30 xs:50 p-1 cursor-pointer rounded-xl" id='teacherName' name="" required value={teacherName} onChange={(e) => setTeacherName(e.target.value)}>
                                <option value="">Teacher Name</option>
                                {TeacherInfo.map((teacher, idx)=>(
                                    <option key={idx} value={JSON.stringify({ name: teacher.name, position: teacher.position })}>{teacher.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mt-10">
                        <button type="submit" className="text-3xl bg-blue-800 px-3 py-1.5 mb-5 w-50 rounded-2xl cursor-pointer hover:scale-105 active:bg-blue-900">Create Cover Page</button>
                    </div>
                    <p>Author: Foridul</p>
                    <p className="text-sm text-red-600">For any update, contact me on FB: <a href="https://www.facebook.com/foridul35962" className="text-blue-300 underline" target="_main">click me</a></p>
                </div>
            </form>
        </div>
    )
}

export default information