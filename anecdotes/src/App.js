import React, {useState} from "react";
// import Button from "./Button";

function App() {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(7).fill(0))
  const [largestVote, setLargestVote] = useState({number:0, value:""});

  const anecdotes = [
  'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
]

const randNum = () => Math.floor(Math.random() * anecdotes.length)

console.log(vote);

const handleVote = () => {
  setLargestVote(vote[selected] + 1 > largestVote.number ? { number: vote[selected] + 1 , value: anecdotes[selected]} : largestVote)

  const copy =[...vote]
  copy[selected] += 1
  setVote(copy)
}





  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} vote</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={() => setSelected(randNum)}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{largestVote.value}</p>
      <p>has {largestVote.number} vote</p>

    </div>
  );
}

export default App;
