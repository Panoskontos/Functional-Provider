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
                        // console.log(context)
                        return (
                            <div>
                                App that loads book {context.state.book}
                            
                            </div>
                        )
                    }
                    }       
    </StateContext.Consumer>

        <br/>
    
    {/* Component that shows how to use Consumers */}
    <RandomComponent />


    </GlobalStateProvider>
  </>
 )
 }
export default App