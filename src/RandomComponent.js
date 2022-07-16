import { StateContext } from "./FuncProvider"

function RandomComponent(){
    return (
        <>
        <StateContext.Consumer>
        {(context)=>{
            console.log(context)
            return (
                <div>
                    Random Component that loads {context.state.book}
                </div>
            )}}
        </StateContext.Consumer>
        </>
    )

                
}

export default RandomComponent