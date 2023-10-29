const CharacterPropsComponent = (props) => {
    return (
        <div>
            <div>{props.character.id}</div>
            <div>{props.character.name}</div>
            <div>{props.character.status}</div>
            <div>{props.character.species}</div>
            <div>{props.character.gender}</div>
            <img src={props.character.image}></img>
        </div>
    );
}

export default CharacterPropsComponent;