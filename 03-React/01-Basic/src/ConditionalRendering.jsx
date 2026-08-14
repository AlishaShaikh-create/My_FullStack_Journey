function ConditionalRendering(){
    const isTrue = true;
    return (
        <>
        {
isTrue ? <h1>Ternary operator</h1>:<h1>Read again</h1>

        }
        </>
    )
}
export default ConditionalRendering;