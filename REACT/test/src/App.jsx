import Form from "./components/formmake";

function App() {
  const name = "ashwin";
  const age = 23;

  const test = (a) => {
    console.log(a);
  };

  return (
    <>
      <h1>Hello World</h1>
      <Form name={name} age={age} setTest={test} />
    </>
  );
}

export default App;
