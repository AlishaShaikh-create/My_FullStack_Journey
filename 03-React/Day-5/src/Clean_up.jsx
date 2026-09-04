import { useEffect } from "react"
function CleanUp(){
    useEffect(()=>{
        function handleResize(){
            console.log("window resized")
        }

        window.addEventListener('resize' , handleResize)
        return (()=>{
            window.removeEventListener('resize' , handleResize)

        })
    },[])
    return (
        <>
        <h1>hello</h1>
        </>
    )
}
export default CleanUp