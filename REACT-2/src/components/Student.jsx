/* eslint-disable no-undef */
import Grade from "./Grade";

//if we have studentData as object here not in the App.jsx file, so we don't need props.
const studentData =[
  {
    id: 1,
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    gpa: 50,
    graduate: false,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    course: 'Data Science',
    city: 'New York',
    picture: 'https://randomuser.me/api/portraits/women/2.jpg',
    gpa: 95,
    graduate: true,
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Smith',
    age: 28,
    course: 'Web Development',
    city: 'Los Angeles',
    picture: 'https://randomuser.me/api/portraits/men/3.jpg',
    gpa: 85,
    graduate: false,
  },
  {
    id: 4,
    firstName: 'Alice',
    lastName: 'Johnson',
    age: 25,
    course: 'Data Science',
    city: 'San Francisco',
    picture: 'https://randomuser.me/api/portraits/women/4.jpg',
    gpa: 78,
    graduate: true,
  },
  {
    id: 5,
    firstName: 'Bob',
    lastName: 'Brown',
    age: 30,
    course: 'Web Development',
    city: 'Chicago',
    picture: 'https://randomuser.me/api/portraits/men/5.jpg',
    gpa: 67,
    graduate: false,
  },
  {
    id: 6,
    firstName: 'Charlie',
    lastName: 'Davis',
    age: 23,
    course: 'Data Science',
    city: 'Austin',
    picture: 'https://randomuser.me/api/portraits/men/6.jpg',
    gpa: 92,
    graduate: true,
  },
  {
    id: 7,
    firstName: 'Emily',
    lastName: 'Wilson',
    age: 27,
    course: 'Web Development',
    city: 'Seattle',
    picture: 'https://randomuser.me/api/portraits/women/7.jpg',
    gpa: 88,
    graduate: true,
  },
  {
    id: 8,
    firstName: 'David',
    lastName: 'Martinez',
    age: 29,
    course: 'Data Science',
    city: 'Miami',
    picture: 'https://randomuser.me/api/portraits/men/8.jpg',
    gpa: 73,
    graduate: false,
  },
  {
    id: 9,
    firstName: 'Fiona',
    lastName: 'Clark',
    age: 26,
    course: 'Web Development',
    city: 'Denver',
    picture: 'https://randomuser.me/api/portraits/women/9.jpg',
    gpa: 81,
    graduate: false,
  },
  {
    id: 10,
    firstName: 'George',
    lastName: 'Miller',
    age: 32,
    course: 'Data Science',
    city: 'Boston',
    picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    gpa: 90,
    graduate: true,
  },
  {
  id: 11,
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
  id: 12,
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
  id: 13,
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
  id: 14,
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
  id: 15,
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
  id: 16,
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