import './App.css'
import NavBar from "../components/NavBar";
import OrangeOrchids from "../assets/OrangeOrchids.jpg"

function Home() {
    return (
        <div>
            <NavBar />
            <h1>Our hospital helps you</h1>
            <img src={OrangeOrchids} />
        </div>
    );
}

export default Home;