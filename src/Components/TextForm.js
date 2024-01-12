import React ,{useState} from 'react'

export default function TextForm(props) {
  
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }


    const[text,setText] = useState('Enter text here');
    return (

    <div>
          <h2>{props.TextAreaTitle}</h2>
          <div className="mb-3">
              
              <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1"  rows="8"></textarea>
          </div>

          <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to Upper Case</button>
          <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lower Case</button>
    </div>
  )

}
