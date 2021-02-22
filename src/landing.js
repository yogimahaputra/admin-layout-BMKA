import React from "react"
import Navbar from "./component/navbar/Navbar.js"
import s from "./assets/styles/index.module.scss"
import Dashboard from "./component/dashboard/Dashboard.js"
import RightBar from "./component/rightbar/RightBar.js"

const Landing = () => {
    return(
        <>
            <div className={s["container"]}>
                <div className={`${s.layout} ${s.sidebar}`}>
                    <Navbar/>
                </div>
                <div className={`${s.layout} ${s.centerLayout}`}>
                    <Dashboard/>
                </div>
                <div className={`${s.layout} ${s.rightbar}`}>
                    <RightBar/>
                </div>

            </div>
        </>
    )
}

export default Landing