import React from "react"

import { NotificationFilled, CalendarFilled, TagFilled } from '@ant-design/icons';
import s from "./RightBar.module.scss"

const RightBar = () => {
    return(
        <>
            <div className={s["container-rightbar"]}>
                <div className={`${s.layoutRightbar} ${s.navRightbar}`}>
                    <ul>
                        <li><a href="/#"> <NotificationFilled /></a></li>
                        <li><a href="/#"> <CalendarFilled /></a></li>
                        <li><a href="/#"> <TagFilled /></a></li>
                    </ul>
                </div>
                <div className={`${s.layoutRightbar} ${s.bannerRightbar}`}>
                    <div className={`${s.heroRightbar} `}>
                        <h1>1.524</h1>
                        <p>Instructor Salman</p>
                    </div>
                </div>
                <div className={`${s.layoutRightbar} ${s.tittleRightbar}`}>
                    <h1>Instructor BMKA Salman</h1>
                </div>
                <div className={`${s.layoutRightbar} ${s.contentInstructor}`}>
                    <div className={`${s.cardInstructor}`}>
                        <div className={`${s.detailInstructor} ${s.photoInstructor}`}></div>
                        <div className={`${s.detailInstructor}`}>
                            <p>
                                <b>Muhammad Al-Amin</b><br/>
                                <span>Tutor Website</span>
                            </p>
                        </div>
                    </div>
                    <div className={`${s.cardInstructor}`}>
                        <div className={`${s.detailInstructor} ${s.photoInstructor}`}></div>
                        <div className={`${s.detailInstructor}`}>
                            <p>
                                <b>Muhammad Al-Amin</b><br/>
                                <span>Tutor Website</span>
                            </p>
                        </div>
                    </div>
                    <div className={`${s.cardInstructor}`}>
                        <div className={`${s.detailInstructor} ${s.photoInstructor}`}></div>
                        <div className={`${s.detailInstructor}`}>
                            <p>
                                <b>Muhammad Al-Amin</b><br/>
                                <span>Tutor Website</span>
                            </p>
                        </div>
                    </div>
                    <div className={`${s.cardInstructor}`}>
                        <div className={`${s.detailInstructor} ${s.photoInstructor}`}></div>
                        <div className={`${s.detailInstructor}`}>
                            <p>
                                <b>Muhammad Al-Amin</b><br/>
                                <span>Tutor Website</span>
                            </p>
                        </div>
                    </div>
                    <div className={`${s.cardInstructor}`}>
                        <div className={`${s.detailInstructor} ${s.photoInstructor}`}></div>
                        <div className={`${s.detailInstructor}`}>
                            <p>
                                <b>Muhammad Al-Amin</b><br/>
                                <span>Tutor Website</span>
                            </p>
                        </div>
                    </div>
                    <div className={`${s.cardInstructor}`}>
                        <div className={`${s.detailInstructor} ${s.photoInstructor}`}></div>
                        <div className={`${s.detailInstructor}`}>
                            <p>
                                <b>Muhammad Al-Amin</b><br/>
                                <span>Tutor Website</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightBar