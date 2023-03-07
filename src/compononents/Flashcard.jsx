import React from "react";
import { useState } from "react";

const Flashcard = () => {

    const cardList = [{"front": "What is React?", "back": "React is a javascript front-end library."},
                        {"front": "What is useState?", "back": "useState is a hook used to manage the state of a component."},
                        {"front": "What is State>", "back": "State refers to a component’s memory: the variables that stay the same between renders of the component."},
                        {"front": "When should you use state?", "back": "When you need to retain information between renders of a component and update the visual of the web app."},
                        {"front": "How do we import useState?", "back": 'import {useState} from "react";'},
                        {"front": "What is a prop?", "back": "A component is a passable variable that can be passed into components."},
                        {"front": "What is a rule of using hooks?", "back": "Don’t call Hooks inside loops, conditionals, or nested functions"},
                        {"front": "How do we change the state of useState object?", "back": "Call the setter function from within another function."},
                        {"front": "Who created React?", "back": "Facebook in 2013"},
                        {"front": "Is React open-source?", "back": "Yes, it is the most popular library of javascript."}]

    const [cardState, setCardState] = useState(0)
    const [card, setCard] = useState(0)
    const [cardInfo, setInfo] = useState(cardList[0]["front"])
    const handleCardClick = () => {
        setCardState(cardState + 1);
        if ((cardState + 1) % 2 === 0) {
            setInfo(cardList[card]["front"])
        } else {
            setInfo(cardList[card]["back"])
        }
    }

    const handleNewCard = () => {
        const newCard = Math.floor(Math.random() * 10)
        setCard(newCard)
        setCardState(0)
        setInfo(cardList[newCard]["front"])
    }

    return (
        <div>
        <div className={"flashcard"} onClick={handleCardClick}>
            <p>{cardInfo}</p>
        </div>
        <div className={"card-nav"} onClick={handleNewCard}>
            <h4> >>> </h4>
        </div>
        </div>
    )
}

export default Flashcard;