import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)


const handleGood = ()=> setGood(good + 1) 
const handleNeutral = () => setNeutral(neutral + 1) 
const handleBad = () => setBad(bad + 1)

const total = good + neutral + bad
const average = ((good + bad) - neutral) / total
const positive = (good / total) * 100

  return (
      <div>
        <h1>give feedback</h1>
        <Button handleAllClick={handleGood} text="good"/>
        <Button handleAllClick={handleNeutral} text="neutral"/>
        <Button handleAllClick={handleBad} text="bad"/>
        <h2>statistics</h2>

        {
          total <= 0 ? "No feedback given" :
          (
            <>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
            </>
          )
        
        }
        </div>
  );
}

export default App;
