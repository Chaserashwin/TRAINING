import NoteContext from "./noteContext";

const NoteContext = (props) => {
  const state = {
    name: "Ashwin",
    class: "5c",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
