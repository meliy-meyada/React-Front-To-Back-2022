import {useState, React} from 'react'
import Card from './shared/Card'


function FeedbackForm() {
    const [text, setText] = useState('')
    
    const handleTextChange = (e) => {
        setText(e.target.value);
    }
    

  return (
      <Card>
          <from>
              <h2>How would you rate your service with us?</h2>
              {/*@TODO - Rating select component*/}
              <div className="input-group">
                  <input
                      onChange={handleTextChange}
                      type="text"
                      placeholder='Write a review'
                      value={text}
                  />
                  <button type="submit">Send</button>
              </div>
          
          </from>
    </Card>
  )
}

export default FeedbackForm