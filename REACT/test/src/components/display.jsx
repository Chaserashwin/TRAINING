function Display({ valuename, valuenumber, valueemail }) {
  return (
    <>
      <div>
        <li>{valuename}</li>
        <li>{valuenumber}</li>
        <li>{valueemail}</li>
      </div>
    </>
  );
}

export default Display;
