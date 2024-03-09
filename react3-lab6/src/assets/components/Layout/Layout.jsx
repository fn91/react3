import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";


export default function Layout () {
    return (    
        <>
        
        <Header/>
        <Banner/>
        <Outlet/>
        <Footer/>
        
        
        </>


    )


}