import React from "react"
import { BarChartOutlined, ShoppingFilled, SolutionOutlined, SettingFilled } from '@ant-design/icons';
import style from "./Navbar.module.scss"
import logo from "../../assets/img/bmka.jpg"
import pict from "../../assets/img/layanan.png"

const Navbar = () => {

    // const [display, setDisplay] = useState(true)

    // const btnBurger = () => {
    //     setDisplay(!display)
    // }
    return(
        <>
            <div className={style["navbar"]}>
                <div>
                    <img className={style["logo"]} src={`${logo}`} alt="logo"/>
                </div>
                    {/* <div className={style["burger-menu"]} onClick={btnBurger}>
                        menu
                    </div>  */}
                                    <div className={style["contentnavbar"]}>
                                    <ul>
                                        <li><a href="/#"><BarChartOutlined /> Dashboard</a></li>
                                        <li><a href="/#"><ShoppingFilled /> Product</a></li>
                                        <li><a href="/#"><SolutionOutlined /> Instructor</a></li>
                                        <li><a href="/#"><SettingFilled /> Settings</a></li>
                                    </ul>
                                    <div className={style["card-cs"]}>
                                        <img  className={style["gambar-1"]} src={pict} alt="gambar" />
                                        <br/>
                                        <p>Dengarkan pesan dari user yuk!</p>
                                        <button className={style["tombol-cs"]} type="submit">Telusuri</button>
                                    </div>
                                </div>
            </div>
        </>
    )
}

export default Navbar