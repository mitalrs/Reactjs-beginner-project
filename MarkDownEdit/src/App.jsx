import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Markdown Editor</h1>
      <nav className="nav">
        <button>Bold</button>
        <button>Itelic</button>
        <button>header</button>
        <button>Eraser</button>
        <button>bulletUL</button>
        <button>bulletOL</button>
        <button>checkBOx</button>
        <button>Blockquote</button>
        <button>code</button>
        <button>table</button>
        <button>Link</button>
        <button>img</button>
      </nav>
      <textarea className='textArea'value={value} ></textarea>
    </div>
  )
}

export default App


// https://stackoverflow.com/questions/33245017/react-modifying-textarea-values
// https://stackoverflow.com/questions/66770617/how-to-wrap-specific-text-inside-a-div-in-a-span-in-react
// how to work bold button in react
