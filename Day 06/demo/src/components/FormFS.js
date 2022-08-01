import InputFC from "./InputFunctionalCom";

function FormFC() {
    return (
        <div className="container">
            <h1>Email</h1>
            <InputFC type="email" placeholder="Enter your email"></InputFC>
            <h1>Password</h1>
            <InputFC type="password" placeholder="Enter your password"></InputFC>
        </div>
    )
}
export default FormFC;