import { Outlet } from "react-router-dom";
function Home() {
    return (
        <div id="Home">
            <Outlet />
            <h2>Our Hospital Takes Care of You and Your Loved Ones</h2>
        </div>
    );
}

export default Home;