import DonateButtonComponent from "../components/DonateButton";
import NavBar from "../components/NavBar";

function Donate() {
    return (
        <div>
            <NavBar />
            <h1>Donate Here: </h1>
            <DonateButtonComponent />
        </div>
    );
}

export default Donate;