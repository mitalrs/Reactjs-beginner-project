import { useRef } from "react";
import "./App.css";
import ReactMarkdown from "markdown-to-jsx";
import { useState } from "react";
import { useEffect } from "react";
//icon Images
import boldIcon from "./assets/bold.svg";
import italicIcon from "./assets/italic.png";
import headingIcon from "./assets/heading.svg";
import eraserIcon from "./assets/erase.png";
import codeIcon from "./assets/code.webp";
import tableIcon from "./assets/table.svg.png";
import orderListIcon from "./assets/orderedlist.svg";
import unorderListIcon from "./assets/unorderedList.svg";
import doublequotes from "./assets/doublequotes.svg";
import checkList from "./assets/checkList.jpeg";
// import boldIcon from "./assets/bold.svg";

function App() {
  const [markdownString, setMarkdownString] = useState("");
  const textarearef = useRef();
  const [cursorStart, setCursorStart] = useState();
  const [cursorEnd, setCursorEnd] = useState();

  useEffect(() => {
    textarearef.current.focus();
  }, [markdownString]);

  useEffect(() => {
    textarearef.current.setSelectionRange(cursorStart, cursorEnd);
  }, [cursorStart, cursorEnd]);

  function insertAtCursor(start, end, offsetStart = 0, offsetEnd = 0) {
    setMarkdownString(
      markdownString.substring(0, cursorStart + offsetStart) +
        start +
        markdownString.substring(cursorStart, cursorEnd) +
        end +
        markdownString.substring(cursorEnd, markdownString.length)
    );
    setCursorStart(cursorStart + start.length);
    setCursorEnd(cursorEnd + start.length);
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
  function handleBulletUl() {
    insertAtCursor("\n\n- ", "\n\n");
  }
  function handleBulletOl() {
    insertAtCursor("\n\n1. ", "\n\n");
  }
  function handleCheckBox() {
    insertAtCursor("\n\n- [ ] ", "\n\n");
  }
  function handleBlokquote() {
    insertAtCursor("\n\n> ", "\n\n");
  }
  function handleTable() {
    insertAtCursor("\n\n| ", "|  |\n|----|--|\n|----|--|\n\n");
  }

  function handleHeaderOne(e) {
    const textAreaStr = markdownString.substring(
      0,
      textarearef.current.selectionStart
    );

    if (checkCharAtLast(textAreaStr, "#")) {
      insertAtCursor("# ", "", -1);
    } else {
      insertAtCursor("\n\n#", "\n\n");
    }
  }

  const checkCharAtLast = (str, chr) => {
    // console.log(str.substring(str.length-2,str.length).split('').includes('#'));
    return str
      .substring(str.length - 2, str.length)
      .split("")
      .includes(chr);
  };

  return (
    <div className="App">
      <h1>Markdown Editor</h1>
      <div className="wraap">
        <nav className="nav">
          <button onClick={handleBold}>
            <img src={boldIcon} alt="Bold" />
          </button>
          <button onClick={handleItelic}>
          <img src={italicIcon} alt="Bold" />
          </button>
          <button
            onClick={(e) => {
              "\n\n";
              handleHeaderOne(e);
            }}
          >
            <img src={headingIcon} alt="Bold" />
          </button>
          <button onClick={handleEraser}>
          <img src={eraserIcon} alt="Bold" />
          </button>
          <button onClick={handleBulletUl}>
          <img src={unorderListIcon} alt="Bold" />
          </button>
          <button onClick={handleBulletOl}>
          <img src={orderListIcon} alt="Bold" />
          </button>
          <button onClick={handleCheckBox}>
          <img src={checkList} alt="Bold" />
          </button>
          <button onClick={handleBlokquote}>
          <img src={doublequotes} alt="Bold" />
          </button>
          <button onClick={handleCode}>
          <img src={codeIcon} alt="Bold" />
          </button>
          <button onClick={handleTable}>
          <img src={tableIcon} alt="Bold" />
          </button>
          {/* <button onClick={handleLink}>Link</button>
        <button onClick={handleimg}>img</button> */}
        </nav>
        <main className="main">
          <textarea
            className="textArea"
            ref={textarearef}
            value={markdownString}
            onChange={(e) => {
              setMarkdownString(e.target.value);
            }}
            onSelect={(e) => {
              setCursorStart(e.target.selectionStart);
              setCursorEnd(e.target.selectionEnd);
            }}
          ></textarea>
          <div className="markdounPriview">
            <ReactMarkdown>{markdownString}</ReactMarkdown>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
