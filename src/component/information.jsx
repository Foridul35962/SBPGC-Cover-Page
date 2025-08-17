import { useRef, useState } from "react"

const information = () => {

    const examYearElement = useRef();
    const [semester, setSemester] = useState();
    const [courseName, setCourseName] = useState();
    const [teacherName, setTeacherName] = useState();

    return (
        <div>
            <h1>Lab report</h1>
            <form>
                <h2>Exam Information:</h2>
                <label htmlFor="semesterId">Your Semester: </label>
                <select id='semesterId' name="1st" required value={semester} onChange={(e) => setSemester(e.target.value)}>
                    <option value="1st Year 1st Semester">1st</option>
                    <option value="1st Year 2nd Semester">2nd</option>
                    <option value="2nd Year 1st Semester">3rd</option>
                    <option value="2st Year 2nd Semester">4th</option>
                    <option value="3rd Year 1st Semester">5th</option>
                    <option value="3rd Year 2nd Semester">6th</option>
                    <option value="4th Year 1st Semester">7th</option>
                    <option value="4th Year 2nd Semester">8th</option>
                </select>
                <label htmlFor="examYear">Exam Year:</label>
                <input type="number" id='examYear' ref={examYearElement} required />
                <label htmlFor="courseName">Your Course Name:</label>
                <>
                    {
                        semester === '2st Year 2nd Semester' && (
                            <select id='courseName' name="" value={courseName} onChange={(e) => { setCourseName(e.target.value) }} required>
                                <option value={JSON.stringify({ name: "Database Management System", code: "520222" })}>DBMS</option>
                                <option value={JSON.stringify({ name: "Microprocessor And Assembly Language", code: "520224" })}>Microprocessor</option>
                                <option value={JSON.stringify({ name: "Design And Analysis of Algorithm", code: "520226" })}>Algorithm</option>
                            </select>
                        )
                    }
                    {
                        semester === '3rd Year 1st Semester' && (
                            <select id='courseName' name="" value={courseName} onChange={(e) => { setCourseName(e.target.value) }} required>
                                <option value={JSON.stringify({ name: "Peripheral and Interfacing", code: "530202" })}>Peripheral</option>
                                <option value={JSON.stringify({ name: "Data and Telecommunications", code: "530204" })}>Telecommunications</option>
                                <option value={JSON.stringify({ name: "Operating System", code: "530206" })}>Operating System</option>
                            </select>
                        )
                    }
                </>
                <h2>Student Information:</h2>
                <label htmlFor="studentName">Student Name:</label>
                <input type="text" id="studentName" placeholder="Ex: Foridul" />
                <label htmlFor="studentRoll">Student Roll:</label>
                <input type="number" id="studentRoll" placeholder="Ex: 2547896" />
                <label htmlFor="studentReg">Student Registration Number:</label>
                <input type="number" id="studentReg" placeholder="Ex: 54200459635" />
                <label htmlFor="studentSession">Student Session Number:</label>
                <input type="number" id="studentSession" placeholder="Ex: 2021- 22" />

                <h2>Course Teacher Information:</h2>
                <label htmlFor="teacherName">Teacher Name:</label>
                <select id='teacherName' name="" required value={teacherName} onChange={(e) => setTeacherName(e.target.value)}>
                    <option value="Shamima Nasrin Daisy">Shamima Nasrin Daisy</option>
                    <option value="Md. Habibur Rahman">Md. Habibur Rahman</option>
                    <option value="A.Z.M Azizul Bahar">A.Z.M Azizul Bahar</option>
                </select>
            </form>
        </div>
    )
}

export default information