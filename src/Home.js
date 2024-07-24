import { Link, Outlet } from "react-router-dom";

export function Home(){
    return (
        <div>
            <Link to='/C1'>C1</Link>
            <br/>
            <Link to='/C2'>C2</Link>
            <br/>
            <Link to='/C3'>C3</Link>
        <div>
            <Outlet/>
        </div>
        </div>
    )
}