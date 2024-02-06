import "./form.css";
import { useState } from "react";
import Display from "./display";

export default function Formmake({ name, age, setTest }) {
  const [inputname, setInputName] = useState("");
  const [inputnumber, setInputNumber] = useState("");
  const [inputemail, setInputEmail] = useState("");

  // // for displaying
  // const [dispname, setDispName] = useState("");
  // const [dispnumber, setDispNumber] = useState("");
  // const [dispemail, setDispEmail] = useState("");

  const [show, setShow] = useState(false);

  const arr = [1, 2, 3, 4];
  const ulHtml = arr.map((item, index) => {
    return <li key={index}>{item}</li>;
  });

  const users = [
    {
      id: 1,
      name: "ashwin",
      age: 23,
    },
    {
      id: 2,
      name: "ram",
      age: 21,
    },
    {
      id: 3,
      name: "shyam",
      age: 26,
    },
  ];

  //   arr.map((item, index) => {
  //     return;
  //   });

  const userHtml = users.map((user, index) => {
    return <li key={user.id}>{user.name}</li>;
  });

  //   const changeHandler = (e) => {
  //     setInputNumber(e.target.value);
  //     setInputEmail(e.target.value);
  //   };

  // Funciton used when any change will be there
  const changeHandlerName = (e) => {
    console.log(e.target.value);
    setInputName(e.target.value);
  };

  const changeHandlerNumber = (e) => {
    console.log(e.target.value);
    setInputNumber(e.target.value);
  };

  const changeHandlerEmail = (e) => {
    console.log(e.target.value);
    setInputEmail(e.target.value);
  };

  const handleClick = (e) => {
    // synthetic events
    e.preventDefault();
    setTest(inputname);
    setShow(true);

    // console.log(inputname);
    // console.log(inputnumber);
    // console.log(inputemail);
    // setDispName(e.target.value);
    // setDispNumber(e.target.value);
    // setDispEmail(e.target.value);
  };
  //   state- object of data

  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <div className="form-wrapper">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              onChange={changeHandlerName}
              type="text"
              placeholder="Enter Your Name"
              value={inputname}
            />
            {/* for printing the html */}
            {inputname}
          </div>
          <div className="form-group">
            <label htmlFor="number">Phone:</label>
            <input
              onChange={changeHandlerNumber}
              type="tel"
              placeholder="Enter Your Number"
              value={inputnumber}
            />
            {/* for printing the html */}
            {inputnumber}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              onChange={changeHandlerEmail}
              type="email"
              placeholder="Enter Your Email"
              value={inputemail}
            />
            {/* for printing the html */}
            {inputemail}
          </div>
          <div className="form-group">
            <button
              onClick={() => {
                setShow(true);
              }}
            >
              Submit
            </button>
            {/* if we have only multiple buttons */}
            {/* <input type="button" value="Button" /> */}
          </div>
        </form>
        {/* <ul>{ulHtml}</ul>
        <ul>{userHtml}</ul> */}
      </div>
      {/* <Display
        valuename={inputname}
        valuenumber={inputnumber}
        valueemail={inputemail}
      /> */}
      <div className="details">
        <h1>Output</h1>
        {show && (
          <>
            <div className="form-wrapper more">
              <li>{inputname}</li>
              <li>{inputnumber}</li>
              <li>{inputemail}</li>
            </div>
          </>
        )}
      </div>
    </>
  );
}
