/* eslint-disable no-undef */
import Grade from "./Grade";

//if we have studentData as object here not in the App.jsx file, so we don't need props.
const studentData =[{
  id: 1,
  firstName: "Shadi",
  lastName: "Reihani",
  age: "43",
  city: "Tonekabon",
  course : "WEb Developement",
  picture: "https://randomuser.me/api/portraits/women/2.jpg",
  gpa: 49,
  graduate: false,
},
{
  id: 2,
  firstName: "Shabnam",
  lastName: "Reihani",
  age: "39",
  city: "Hanau",
  course : "WEb Developement",
  picture: "https://randomuser.me/api/portraits/women/3.jpg",
  gpa: 99,
  graduate: true,
},
{
  id: 3,
  firstName: "Alireza",
  lastName: "Shal",
  age: "46",
  city: "Hanau",
  course : "Hardware Designer",
  picture: "https://randomuser.me/api/portraits/men/3.jpg",
  gpa: 99,
  graduate: true,
},
{
  id: 4,
  firstName: "hamta",
  lastName: "Daro",
  age: "39",
  city: "Frankfurt",
  course : "IT Specialist",
  picture: "https://randomuser.me/api/portraits/women/5.jpg",
  gpa: 99,
  graduate: false,
},
{
  id: 5,
  firstName: "Shabnam",
  lastName: "Rey",
  age: "33",
  city: "Hamburg",
  course : "Software Developement",
  picture: "https://randomuser.me/api/portraits/women/7.jpg",
  gpa: 67,
  graduate: true,
},
{
  id: 6,
  firstName: "Saina",
  lastName: "Mahdavi",
  age: "79",
  city: "Rasht",
  course : "Backend Developement",
  picture: "https://randomuser.me/api/portraits/women/6.jpg",
  gpa: 88,
  graduate: true,
},
{
  id: 7,
  firstName: "Shayan",
  lastName: "Mahdavi",
  age: "70",
  city: "Tehran",
  course : "Backend Developement",
  picture: "https://randomuser.me/api/portraits/men/22.jpg",
  gpa: 88,
  graduate: true,
},
{
  id: 8,
  firstName: "Saina",
  lastName: "Mahdavi",
  age: "79",
  city: "Rasht",
  course : "Backend Developement",
  picture: "https://randomuser.me/api/portraits/women/9.jpg",
  gpa: 88,
  graduate: true,
}
];
const Student = () => {
  return (
    <div className="student-container">
      {studentData.map((student) => (
        <div key={student.id} className="card">
          <img
            className="card-image"
            src={student.picture}
            alt={`${student.firstName} ${student.lastName}`}
          />
          <div className="card-body">
            <h2>{`${student.firstName} ${student.lastName}`}</h2>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <p>City: {student.city}</p>
            <Grade gpa={student.gpa} />
            <p>
              Enrollment Status: {student.graduate ? "Alumni" : "Student"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Student;