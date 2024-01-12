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


    const[text,setText] = useState('');
    return (


    <>
        
        <div className='container'>
            <h2 className='mx-2 my-4'>{props.TextAreaTitle}</h2>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} placeholder='Enter Your Text Here' onChange={handleOnChange} id="exampleFormControlTextarea1"  rows="8"></textarea>
            </div>

            <button className="btn btn-primary me-3" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-info" onClick={handleDownClick}>Convert to Lower Case</button>
        </div>

        <div className="containe my-5 ms-3">
            <h1>Your Summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> It is a {0.008 * text.split(" ").length} minute read.</p>
            <hr></hr>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

    </>
  )

}
