import "./form.css";
import { useState } from "react";

function formmake() {
  const [inputname, setInputName] = useState("");
  const [inputnumber, setInputNumber] = useState("");
  const [inputemail, setInputEmail] = useState("");

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

  //   state- object of data

  return (
    <>
      <h1>Test</h1>
      <div className="form-wrapper">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              onChange={changeHandlerName}
              type="text"
              placeholder="Enter ur name"
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
              placeholder="Enter ur number"
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
              placeholder="Enter ur email"
              value={inputemail}
            />
            {/* for printing the html */}
            {inputemail}
          </div>
          <div className="form-group">
            <button>Submit</button>
            {/* if we have only multiple buttons */}
            {/* <input type="button" value="Button" /> */}
          </div>
        </form>
        <ul>{ulHtml}</ul>
        <ul>{userHtml}</ul>
      </div>
    </>
  );
}

export default formmake;
