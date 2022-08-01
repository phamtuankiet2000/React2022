function InputFC(props) {
    return (
        <div className="container">
            <input type={props.type} className={props.className} id={props.id} size={props.size} placeholder={props.placeholder}></input>
            <br></br>
        </div>
    )
}
export default InputFC;