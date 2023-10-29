import './App.css';
import CharacterPropsComponent from './CharacterPropsComponent';
import {character1, character2, character3, character4, character5, myCharacter1, myCharacter2, myCharacter3, myCharacter4, myCharacter5, myCharacter6, myCharacter7, myCharacter8, myCharacter9, myCharacter10}  from './characters';


function App() {
  return (
    <CharacterPropsComponent character={character1} />
  );
}

export default App;
