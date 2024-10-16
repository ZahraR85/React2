//if we have studentData as object here not in the App.jsx file, so we don't need props.
const studentData ={
  firstName: "Shabnam",
  lastName: "Reihani",
  age: "39",
  city: "Hanau",
  course : "WEb Developement",
  picture: "./img/profile ax new.jpg",
};
const Student = () => {
  return (
    <div className="card">
      <img className="card-image" src={studentData.picture} alt={studentData.firstName}/>
      <div className="card-body">
        <h2>{studentData.firstName + ' '+ studentData.lastName}</h2>
        <p>age: {studentData.age}</p>
        <p>course:{studentData.course}</p>
        <p>city:{studentData.city}</p>
      </div>
    </div>
  )
};
export default Student;