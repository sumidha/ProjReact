//import React from "react"; //template rfce
//normal funation
// function FunctionClick() {
//   function clickHandler() {
//     console.log("button clicked");
//   }

//   return (
//     <div>
//         {/* //dont use the clickHandler() */}
//         <button onClick={clickHandler}>Submit</button> 
 
//     </div>
//   );
// }

// export default FunctionClick;


//Class component  

import React, { Component } from 'react' //rcc install by 

// In class component 
// 1. use this.clickHandler 
// 2. Just use the FunctionClick() (without funcation key word)

export default class FunctionClick extends Component {
    clickHandler() {
        console.log("button clicked");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Submit</button> 
            </div>
        )
    }
}
