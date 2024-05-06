// import Code from "./Code"
// import Welcome from "./Welcome"

// import Welcome from "./Welcome"

export default function ConditionComponent(){
        let display=false
        let message;
        // if(display){
        //     return <Welcome></Welcome>
        // }else {
        //     return <Code></Code>
        // }

        if(display){
           message=<h1>New Message 1</h1>
        }else{
           message=<h1> New Message 2</h1>
        }
        return message
}