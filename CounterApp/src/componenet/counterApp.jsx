import { useState } from "react"
export function CounterApp(){
         let [count,setCount]  = useState(0)

         function Increase(){
                  if (count<22){
                           setCount(count+1);
                  }     
         }

         function Decrease(){
                  if (count>0){
                           setCount(count-1);
                  }       
         }

         function Reset(){
                  setCount(0);       
         }
         return(
                  <>

                  <h1>Count: {count}</h1>
                  <button onClick={Increase}>Increase</button>
                  <button onClick={Decrease}>Decrease</button>
                  <button onClick={Reset}>Reset</button>
                  <h3>Note: Count should not be increased than 22 and should not decresed then 0 </h3>
                  </>
         )
}


/* useState: The useState() hook allows you to create, track and update a state in functional components.

const handleSubmit = (e) => {
         e.preventDefault()
         console.log(user, email)
     
       }


Hooks are special functions that let you "hook into" various React features within functional components.

reload: brower erase previous DOM and create new DOM each called reload.
 e.preventDefault(), you prevent the page from reloading. This is useful because it allows you to handle the form data (like logging the user's name and email in your example) without the page refreshing and losing that data.
*/