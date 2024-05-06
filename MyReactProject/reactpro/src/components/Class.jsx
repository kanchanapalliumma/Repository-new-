import React,{Component} from "react"

export class ClassHandling extends Component {
    classHandling(){
        console.log("button clicked")
    }
    render(){
        return (
            <div>
                <button onClick={this.classHandling}>click me </button>
            </div>
        )
    }
}
 export default ClassHandling 