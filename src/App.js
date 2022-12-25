import { useState } from "react";
import "./App.css";

function App() {
  const [record, setRecord] = useState([]);
  const [modal, setModal]= useState(false);
  const [data, setData] = useState({
    username: "",
    age: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newData = { ...data, id: Math.random() };
    setRecord([...record, newData]);
    setData({
      username: "",
      age: "",
      email: "",
      mobile: "",
      password: "",
    });
  };

  return (
    <>
      <button className='formbtn' onClick={()=>{setModal(true)}}>Registration</button>
      {modal?
        <>
      <form action="" onSubmit={handleOnSubmit}>
        <button className="cancelBtn" onClick={()=>{setModal(false)}} >X</button>
      <h2>Registration Form</h2>
        <label htmlFor="username">Full Name</label>
        <input
          type="text"
          autoComplete="off"
          value={data.username}
          onChange={handleOnChange}
          name="username"
          id="username"
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          autoComplete="off"
          value={data.age}
          onChange={handleOnChange}
          name="age"
          id="age"
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          autoComplete="off"
          value={data.email}
          onChange={handleOnChange}
          name="email"
          id="email"
        />

        <label htmlFor="mobile">Mobile</label>
        <input
          type="number"
          autoComplete="off"
          value={data.mobile}
          onChange={handleOnChange}
          name="mobile"
          id="mobile"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          autoComplete="off"
          value={data.password}
          onChange={handleOnChange}
          name="password"
          id="password"
        />

        <button className="submitButton">Submit</button>
      </form>
      </>
      : ""
      }
       <div>
        {
          record.map((val)=>{
            const {username, id, age, email, mobile, password}= val;
            return(
              <div className="list" key={id}>
                <p>{username}</p>
                <p>{age}</p>
                <p>{email}</p>
                <p>{mobile}</p>
                <p>{password}</p>
              </div>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
