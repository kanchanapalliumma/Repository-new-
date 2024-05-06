function Hello({name,color}){ 
    // let a=props.name
    // let b=
    // let currencies=props.currencies
    // let fruitss=props.fruits
    return(
        <div>
            <h1 key={name}>{name} {color}</h1>
            {/* {props.person.message} {props.person.name} {props.person.emoji} {props.person.seatNumber}
            </h1>
            {props.countries.map((country)=>{
               return <h3>{country}</h3>
            })}

            {Object.keys(currencies).map(key =>
                <h3>{key}: {currencies[key]}</h3>)}
            <ul>
            {props.fruits.map((fruit,index)=>{
                return <li key={fruit}>{fruit}</li>
            })}
            </ul> */}
        </div>
    );
}

export default Hello;

