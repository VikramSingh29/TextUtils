import { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  const [lastText, setLastText] = useState("");
  const [font, setFont] = useState("");
  const [color, setColor] = useState("");

  function handleInput(e) {
    const newText = e.target.value;
    setText(newText);
  }
  function handleFontChange(e) {
    setFont(e.target.value); // Update font based on selection
  }
  function handleColorChange(e) {
    setColor(e.target.value);
  }

  // upperCase function
  function toUpperCase() {
    const textarea = document.getElementById("exampleFormControlTextarea1");
    const { selectionStart, selectionEnd } = textarea;

    if (selectionStart === selectionEnd) {
      setText(text.toUpperCase());
    } else {
      const beforSelection = text.slice(0, selectionStart);
      const selectedText = text
        .slice(selectionStart, selectionEnd)
        .toUpperCase();
      const afterSelection = text.slice(selectionEnd);
      setText(beforSelection + selectedText + afterSelection);
    }
    props.showAlert("converted to uppercase","success")
  }

  // lowerCase function 
  function toLowerCase() {
    const textarea = document.getElementById("exampleFormControlTextarea1");
    const { selectionStart, selectionEnd } = textarea;

    if (selectionStart === selectionEnd) {
      setText(text.toLowerCase());
    } else {
      const beforSelection = text.slice(0, selectionStart);
      const selectedText = text
        .slice(selectionStart, selectionEnd)
        .toLowerCase();
      const afterSelection = text.slice(selectionEnd);
      console.log(beforSelection, selectedText, afterSelection);
      setText(beforSelection + selectedText + afterSelection);
    }
    props.showAlert("converted to lowercase","success")
  }

  // Erase the text
  
  function toClear() {
    const textarea = document.getElementById("exampleFormControlTextarea1");
    setLastText(text);
    setText("");
    props.showAlert("Text has been removed","success")

    document.getElementById("undoButton").disabled = false;
  }

  // Undo the text 

  function toUndo() {
    setText(lastText);
    document.getElementById("undoButton").disabled = true;
    props.showAlert("Undo text successful","success")
  }

  // to remove text 

  function toRemoveExtraSpace() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed","success")
  }

  return (
    <>
      <div className="container" >
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            style={{
              fontFamily: font,
              backgroundColor: props.mode==='dark'?'#8d99ae':'#e9ecef',
              color:props.mode==='dark'?'white':'black'
            }}
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={handleInput}
            value={text}
            rows="12"
          >
            {text}
          </textarea>
        </div>
        <div className="row" style={{color:props.mode==='dark'?'white':'black'}}>
          <div className="column" >
            <button className={`btn btn-outline-${props.btncolor} mx-1`} onClick={toUpperCase} >
              Change to UpperCase
            </button>
            <button className={`btn btn-outline-${props.btncolor} mx-1`} onClick={toLowerCase}>
              Change to LowerCase
            </button>

            <button className={`btn btn-outline-${props.btncolor} mx-1`} onClick={toClear}>
              Clear Text
            </button>
            <button
              className={`btn btn-outline-${props.btncolor} mx-1`}
              id="undoButton"
              onClick={toUndo}
            >
              Undo Text
            </button>
            <button
              className={`btn btn-outline-${props.btncolor} mx-1`}
              onClick={toRemoveExtraSpace}
            >
             Remove Extra Space
            </button>


            <select
              onChange={handleFontChange}
              className="form-select form-select-sm mb-3 my-3"
              aria-label="Small select example"
              value={font}
              style={{ backgroundColor: props.mode==='dark'?'#8d99ae':'#e9ecef',
                 color:props.mode==='dark'?'white':'black'
              }}
            >
              <option value="" disabled>
                Select Font
              </option>
              <option value="Arial">Arial</option>
              <option value="Courier New">Courier New</option>
              <option value="Georgia">Georgia</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Verdana">Verdana</option>
              <option value="Tahoma">Tahoma</option>
              <option value="Trebuchet MS">Trebuchet MS</option>
              <option value="Lucida Console">Lucida Console</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2 className="my-4">Your Text Summary</h2>
        <p className="">
          {text.length} Characters and {text.split(" ").length} Words
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
      </div>
    </>
  );
}
