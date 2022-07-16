import {StateContext} from "./FuncProvider"
import {GlobalStateProvider} from "./FuncProvider"
import RandomComponent from "./RandomComponent"

function App() {
 return (
  <>
  {/* wrap app around provider */}
  <GlobalStateProvider>

    {/* use with consumer */}
    <StateContext.Consumer>
                    {(context)=>{
                        console.log(context)
                        return (
                            <div>
                                My favourite book is {context.state.book}
                            </div>
                        )
                    }
                    }       
    </StateContext.Consumer>
    </GlobalStateProvider>


    <RandomComponent />


  </>
 )
 }
export default App