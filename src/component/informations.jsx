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
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 py-12 px-4">
            <div className="bg-gray-900 shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-gray-800">
                <h1 className="text-4xl font-extrabold text-purple-400 mb-8 text-center tracking-wide">Lab Report Cover Page</h1>
                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Exam Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Exam Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="semesterId" className="block text-lg font-medium text-gray-300 mb-2">Semester</label>
                                <select
                                    className="w-full bg-gray-800 border border-purple-700 p-2 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    id="semesterId"
                                    required
                                    value={semester}
                                    onChange={(e) => setSemester(e.target.value)}
                                >
                                    <option value="">Select Semester</option>
                                    <option value="1st Year 1st Semester">1st Year 1st Semester</option>
                                    <option value="1st Year 2nd Semester">1st Year 2nd Semester</option>
                                    <option value="2nd Year 3rd Semester">2nd Year 3rd Semester</option>
                                    <option value="2nd Year 4th Semester">2nd Year 4th Semester</option>
                                    <option value="3rd Year 5th Semester">3rd Year 5th Semester</option>
                                    <option value="3rd Year 6th Semester">3rd Year 6th Semester</option>
                                    <option value="4th Year 7th Semester">4th Year 7th Semester</option>
                                    <option value="4th Year 8th Semester">4th Year 8th Semester</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="examYear" className="block text-lg font-medium text-gray-300 mb-2">Exam Year</label>
                                <input
                                    className="w-full border border-blue-700 bg-gray-800 text-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    type="number"
                                    id="examYear"
                                    ref={examYearElement}
                                    placeholder="Ex: 2025"
                                    required
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="courseName" className="block text-lg font-medium text-gray-300 mb-2">Course Name</label>
                                <select
                                    value={courseName}
                                    className="w-full bg-gray-800 border border-purple-700 p-2 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                                            {subj.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </section>
                    {/* Student Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Student Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="studentName" className="block text-lg font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    className="w-full border border-purple-700 bg-gray-800 text-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    ref={studentNameElement}
                                    type="text"
                                    id="studentName"
                                    placeholder="Ex: Foridul"
                                />
                            </div>
                            <div>
                                <label htmlFor="studentRoll" className="block text-lg font-medium text-gray-300 mb-2">Roll</label>
                                <input
                                    className="w-full border border-purple-700 bg-gray-800 text-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    ref={studentRollElement}
                                    type="number"
                                    id="studentRoll"
                                    placeholder="Ex: 2547896"
                                />
                            </div>
                            <div>
                                <label htmlFor="studentReg" className="block text-lg font-medium text-gray-300 mb-2">Registration No.</label>
                                <input
                                    className="w-full border border-purple-700 bg-gray-800 text-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    ref={studentRegElement}
                                    type="number"
                                    id="studentReg"
                                    placeholder="Ex: 54200459635"
                                />
                            </div>
                            <div>
                                <label htmlFor="studentSession" className="block text-lg font-medium text-gray-300 mb-2">Session</label>
                                <input
                                    className="w-full border border-purple-700 bg-gray-800 text-gray-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    ref={studentSessionElement}
                                    type="text"
                                    id="studentSession"
                                    placeholder="Ex: 2021-22"
                                />
                            </div>
                        </div>
                    </section>
                    {/* Teacher Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-blue-300 mb-4">Course Teacher Information</h2>
                        <div>
                            <label htmlFor="teacherName" className="block text-lg font-medium text-gray-300 mb-2">Teacher Name</label>
                            <select
                                className="w-full bg-gray-800 border border-purple-700 p-2 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                id="teacherName"
                                required
                                value={teacherName}
                                onChange={(e) => setTeacherName(e.target.value)}
                            >
                                <option value="">Select Teacher</option>
                                {TeacherInfo.map((teacher, idx) => (
                                    <option key={idx} value={JSON.stringify({ name: teacher.name, position: teacher.position })}>
                                        {teacher.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </section>
                    {/* Submit Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform active:bg-purple-900"
                        >
                            Create Cover Page
                        </button>
                    </div>
                    <div className="text-center mt-6">
                        <p className="font-medium text-gray-400">Author: Foridul</p>
                        <p className="text-sm text-red-400 mt-1">
                            For any update, contact me on FB:&nbsp;
                            <a
                                href="https://www.facebook.com/foridul35962"
                                className="text-blue-400 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                click me
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default information