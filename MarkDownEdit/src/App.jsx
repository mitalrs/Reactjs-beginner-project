import { useRef } from "react";
import "./App.css";

function App() {
  const textarearef = useRef();
  function insertAtCursor(start, end) {
    console.log(textarearef);
    let cursorStart = textarearef.current.selectionStart;
    let cursorEnd = textarearef.current.selectionEnd;
    console.log(cursorStart, cursorEnd);

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
        <button onClick={handleBulletUl}>bulletUL</button>
        <button onClick={handleBulletOl}>bulletOL</button>
        <button onClick={handleCheckBox}>checkBOx</button>
        <button onClick={handleBlokquote}>Blockquote</button>
        <button onClick={handleCode}>code</button>
        <button onClick={handleTable}>table</button>
        <button onClick={handleLink}>Link</button>
        <button onClick={handleimg}>img</button>
      </nav>
      <textarea className="textArea" ref={textarearef}></textarea>
    </div>
  );
}

export default App;

// https://stackoverflow.com/questions/33245017/react-modifying-textarea-values
// https://stackoverflow.com/questions/66770617/how-to-wrap-specific-text-inside-a-div-in-a-span-in-react
// how to work bold button in react
