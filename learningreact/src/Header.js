function Header(props){
    console.log("Props from header",props);
    return(
        <>
        <h1>This is header {props.abc} {props.age}</h1>
        <button onClick={props.logSomething}>Dont click me</button>
    </>
    )
}
export default Header