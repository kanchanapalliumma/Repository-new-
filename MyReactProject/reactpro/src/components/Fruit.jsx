export default function fruit(props){
    return <div>
        
        {props.price>5 ? 
        <li>{props.name} {props.emoji} {props.price} {props.color.map(colo=><p key={colo}>{colo}</p>
        )}
        </li>  
        :""}
        <h1>zdxfcgvhj</h1>
              
    </div>
}