import Fruit from "./Fruit"
export default function Fruits(){

    // const fruits=["Apples","Mango","Orange","Banana"]
    const fruits=[
        {name:"mango", price: 5, emoji:"🥭", color:["red","black"]},
        {name:"apple", price: 7, emoji:"🍏",color:["green","blue"]},
        {name:"banana", price: 8, emoji:"🍌",color:["yellow","white"]},
        {name:"orange", price: 10, emoji:"🍊",color:["grey","orange"]}
    ]

    return <div>
        <ul>
        {/* {fruits.map((fruit,index)=>{
            return <li key={fruit}>{fruit}</li>
        })} */}

        {fruits.map((fruit)=>{
            // return <li key={fruit.emoji}>{fruit.emoji} {fruit.name}  ${fruit.price}</li>
            return <Fruit key={fruit.name} name={fruit.name} emoji={fruit.emoji} price={fruit.price} color={fruit.color}></Fruit>
        })}


        </ul>
        </div>
}