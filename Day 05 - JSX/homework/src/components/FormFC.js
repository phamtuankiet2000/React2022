import InputFC from "./InputFunctionalComp";
function FormFC() {
    return (
        <div>
            <h1>Email</h1>;
            <InputFC type="email" placeholder="Enter your email"></InputFC>;
            <h2>FirstName</h2>;
            <InputFC type="text" placeholder="Enter you Fisrt name"></InputFC>;
        </div>
    )
}
export default FormFC;