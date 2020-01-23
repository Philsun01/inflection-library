import React, {useState} from 'react';
import inflection from 'inflection';
import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [list, setList] = useState([{
    singular: 'word',
    plural: 'words'
  }])

const onSubmit = (ev) => {
  ev.preventDefault();
  const plural = {
    singular: word,
    plural: inflection.pluralize(word)
  }
  setList([plural, ...list]);
  setWord('');
}

  return (
    <div className="App">
      <h1> Inflection Library</h1>
      <form onSubmit = {onSubmit}>
        <input type = 'text' 
          value = {word}
          onChange = {(ev) => {setWord(ev.target.value)} }
          placeholder = 'write noun here' />
        <button>Pluralize this word!</button>
      </form>
      <div className = 'list-container'>
        {
          list.map( (word, idx) => {
            return( 
              <div
                className = { idx%2 === 0 ? 'even' : 'odd'}
                key = {idx}>
                <div>{word.singular} (Singular)</div>
                <div>{word.plural} (Plural)</div>
                <button onClick = { 
                  () => {
                    const newList = list.filter( (word,_idx) => {
                      return _idx !== idx;
                    })
                    setList(newList);
                  }
                }>
                  Delete this Card</button>
              </div> 
              )
            } 
          )
        }
      </div>
    </div>
  );
}

export default App;
