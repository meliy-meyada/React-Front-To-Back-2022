import { useState,  React } from "react"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import Card from "./components/shared/Card"

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <div>
        <Header/>
            <div className="container">
                <FeedbackList feedback={feedback} />
                

            </div>
        </div>
    )
}

export default App