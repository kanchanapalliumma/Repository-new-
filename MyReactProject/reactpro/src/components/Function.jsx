export default function Function(){
    function messages(){
        console.log("button clicked")
    }
    return <div>
            <button onClick={messages()}>Click here</button>
            </div>
}
    
