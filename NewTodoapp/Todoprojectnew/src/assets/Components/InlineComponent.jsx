import '../Style/style.css'
const header={color:"blue",fontSize:"140px"}    
export default function InlineComponent(){
    return (
        <div className='header'>
            <h1 style={header}>I am a Good Component</h1>
            <h2 style={{color:"grey"}}>Yes it's right</h2>
        </div>
    )
}
