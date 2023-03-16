import { useRef } from "react";
import "./App.css";

function App() {
  const textarearef = useRef();
  function insertAtCursor(start, end) {
    let cursorStart = textarearef.current.selectionStart;
    let cursorEnd = textarearef.current.selectionEnd;


    textarearef.current.value =
      textarearef.current.value.substring(0, cursorStart) +
      start +
      textarearef.current.value.substring(cursorStart, cursorEnd) +
      end +
      textarearef.current.value.substring(
        cursorEnd,
        textarearef.current.value.length
      );
  }

  function handleBold() {
    insertAtCursor("**", "**");
  }
  function handleItelic() {
    insertAtCursor("*", "*");
  }
  function handleEraser() {
    insertAtCursor("~~", "~~");
  }
  function handleCode() {
    insertAtCursor("`", "`");
  }
  function handleHeaderOne(){
    insertAtCursor("\n\n# ", "")
  }
  function handleHeaderTwo(){
    insertAtCursor("\n\n## ", "")
  }
  function handleHeaderThree(){
    insertAtCursor("\n\n### ", "")
  }
  function handleHeaderFour(){
    insertAtCursor("\n\n#### ", "")
  }

  return (
    <div className="App">
      <h1>Markdown Editor</h1>
      <nav className="nav">
        <button onClick={handleBold}>Bold</button>
        <button onClick={handleItelic}>Itelic</button>
        <button
          onClick={() => {
            handleHeaderOne();
            handleHeaderTwo();
            handleHeaderThree();
            handleHeaderFour();
          }}
        >
          header
        </button>
        <button onClick={handleEraser}>Eraser</button>
        {/* <button onClick={handleBulletUl}>bulletUL</button>
        <button onClick={handleBulletOl}>bulletOL</button>
        <button onClick={handleCheckBox}>checkBOx</button>
        <button onClick={handleBlokquote}>Blockquote</button> */}
        <button onClick={handleCode}>code</button>
        {/* <button onClick={handleTable}>table</button>
        <button onClick={handleLink}>Link</button>
        <button onClick={handleimg}>img</button> */}
      </nav>
      <textarea className="textArea" ref={textarearef}></textarea>
    </div>
  );
}

export default App;


