import { useState } from "react"
import Icon from '@mdi/react'
import { mdiArrowDownBold, mdiArrowRightBold } from '@mdi/js'

import { questionsData } from "../../../data"

export const QuestionListComponent = () => {
    const [questions, setQuestions] = useState(questionsData)
    const [activeQuestion, setActiveQuestion] = useState(null)

    const toggleQuestion = (questionId) => {
        if (activeQuestion === questionId) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(questionId);
        }
    }

    return (
        <div className="row w-100 p-0 m-0 mb-5 align-items-center justify-content-center">
            <div className="col-auto w-50">
                <h2 className="text-primary text-center mb-3">Preguntas frecuentes</h2>
                {questions.map((question) => (
                    <div key={question.id}>
                        <div className="d-flex" onClick={() => toggleQuestion(question.id)}>
                            {
                                activeQuestion === question.id ?
                                <Icon path={mdiArrowDownBold} size={1} className="text-primary" />
                                :
                                <Icon path={mdiArrowRightBold} size={1} className="text-primary" />
                            }
                            <h5 className="text-primary">{question.question}</h5>
                        </div>
                        {activeQuestion === question.id && <p>{question.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    )
}