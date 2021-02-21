import React, { useContext, useEffect } from "react"
import s from "./Dashboard.module.scss"
import { SearchOutlined } from '@ant-design/icons';

import banner from "../../assets/img/banner.png"
import activity from "../../assets/img/activity.png"
import buku from "../../assets/img/buku.png"
import sedekah from "../../assets/img/sedekah.png"
import learning from "../../assets/img/learning.png"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BarChart from "../chart/barchart/BarChart";
import LineChart from "../chart/linechart/LineChart";
import PieChart from "../chart/piechart/PieChart";
import { DataContext } from "../../context/DataContext";
import axios from "axios";

const Dashboard = () => {

    const [data, setData] = useContext(DataContext)

    useEffect(()=>{
        if(data === null ){
            axios.get(`https://api.kawalcorona.com/indonesia/`)
            .then((res)=>{
                let data = res.data
                let dataCovid = data.map((e) => {return {meninggal: e.meninggal, positif: e.positif, sembuh: e.sembuh}})
                setData(dataCovid)
            })
        }
    })
    return(
        <>
            <div className={s["continer-dashboard"]}>
                <Router>
                <div className={s["search-dashboard"]}>
                   <SearchOutlined style={{fontSize:"20px", margin:"8px 15px"}} />
                    <input className={s["input-dashboard"]} type="input" placeholder="Telusuri apa yang diinginkan..."/>
                </div>
                <div className={s["banner-dashboard"]}>
                    <div className={s["layout-banner"]}>
                        <img className={s["logo-banner"]} src={banner} alt="banner" />
                    </div>
                    <div className={s["layout-banner"]}>
                         <h1>Easy Dashboard With Us!</h1>
                         <p>Find your awesome experience while manage data by your hand.</p>
                         <button className={s["tombol-banner"]} type="submit">Log-in</button>
                    </div>
                </div>
                <div className={s["menu-dashboard"]}>
                    <div className={`${s.layoutmenu} ${s.navmenu}`}>
                        <ul>
                            <li><Link to="/">Content1</Link></li>
                            <li><Link to="/content2">Content2</Link></li>
                            <li><Link to="/content3">Content3</Link></li>
                        </ul>
                    </div>
                    <div className={`${s.layoutmenu} ${s.centermenu}`}>
                        <div className={`${s.layoutcontent}`}>
                            <Switch>
                                <Route exact path="/">
                                    {data !== null && (
                                        <>
                                            {data.map((e,idx) => {
                                                return <BarChart
                                                            key={idx}
                                                            positif={e.positif}
                                                            meninggal={e.meninggal}
                                                            sembuh={e.sembuh}
                                                        />
                                            })}
                                        </>
                                    )}
                                </Route>

                                <Route exact path="/content2">
                                {data !== null && (
                                        <>
                                            {data.map((e,idx) => {
                                                return <PieChart
                                                            key={idx}
                                                            positif={e.positif}
                                                            meninggal={e.meninggal}
                                                            sembuh={e.sembuh}
                                                        />
                                            })}
                                        </>
                                    )}
                                </Route>

                                <Route exact path="/content3">
                                {data !== null && (
                                        <>
                                            {data.map((e,idx) => {
                                                return <LineChart
                                                            key={idx}
                                                            positif={e.positif}
                                                            meninggal={e.meninggal}
                                                            sembuh={e.sembuh}
                                                        />
                                            })}
                                        </>
                                    )}
                                </Route>

                            </Switch>
                        </div>
                        <div className={`${s.layoutcontent} ${s.listcontent}`}>
                            <div className={`${s.contentbar}`}>
                                <div className={`${s.detailcontent}`}>
                                    <img className={s["gambarcontent"]} src={activity} alt="gambar" />
                                </div>
                                <div className={`${s.detailcontent}`}>
                                    <p><b>Billboard Aktivis</b> </p>
                                </div>
                                <div className={`${s.detailcontent} ${s.angka}`}>
                                    <p><b>202</b> <br/><span>Anggota</span></p>
                                </div>
                            </div>
                            <div className={`${s.contentbar}`}>
                            <div className={`${s.detailcontent}`}>
                                    <img className={s["gambarcontent"]} src={buku} alt="gambar" />
                                </div>
                                <div className={`${s.detailcontent}`}>
                                    <p><b>Buku Saku Aktivis</b> </p>
                                </div>
                                <div className={`${s.detailcontent} ${s.angka}`}>
                                    <p><b>202</b> <br/><span>Anggota</span></p>
                                </div>
                            </div>
                            <div className={`${s.contentbar}`}>
                            <div className={`${s.detailcontent}`}>
                                    <img className={s["gambarcontent"]} src={sedekah} alt="gambar" />
                                </div>
                                <div className={`${s.detailcontent}`}>
                                    <p><b>Sedekah Berjamaah</b> </p>
                                </div>
                                <div className={`${s.detailcontent} ${s.angka}`}>
                                    <p><b>202</b> <br/><span>Anggota</span></p>
                                </div>
                            </div>
                            <div className={`${s.contentbar}`}>
                            <div className={`${s.detailcontent}`}>
                                    <img className={s["gambarcontent"]} src={learning} alt="gambar" />
                                </div>
                                <div className={`${s.detailcontent}`}>
                                    <p><b>Online Learning</b> </p>
                                </div>
                                <div className={`${s.detailcontent} ${s.angka} `}>
                                    <p><b>202</b> <br/><span>Anggota</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Router>
            </div>
        </>
    )
}

export default Dashboard