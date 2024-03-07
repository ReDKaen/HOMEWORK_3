import { Basket, Home, Favorite } from "./pages"
import { Route, Routes, NavLink } from "react-router-dom"
export default function AppRouting(){
    return(
        <>
            <header style={{display: "flex", gap: "30px"}}>
                <NavLink style={{textDecoration: "none", color: "#fff"}} to="/">Головна</NavLink>
                <NavLink style={{textDecoration: "none", color: "#fff"}} to="/basket"><img src="/public/Icon/shopping-basket.png" alt="" style={{width: "30px", height: "30px"}} /></NavLink>
                <NavLink style={{textDecoration: "none", color: "#fff"}} to="/favorite"><img src="/public/Icon/iconmonstr-favorite-4.svg" alt="" /></NavLink>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />   
                <Route path="/basket" element={<Basket />} />
                <Route path="/favorite" element={<Favorite />}/>
            </Routes>
        </>
    )
}