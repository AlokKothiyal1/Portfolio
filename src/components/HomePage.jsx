import React from 'react'
import Styles from './HomePage.module.css'
import { MdLocationOn,MdCall,MdEmail } from 'react-icons/md';
import {Link} from 'react-router-dom'


class HomePage extends React.Component{

    render(){
        return (
            <div className={`container ${Styles.main_container}`}>

                <div className={`my-3 position-relative ${Styles.profile_container}`}>
                    <img src="profile.jpg" alt="profile"></img>
                    <div className={`position-absolute ${Styles.decorative_circle}`}></div>
                </div>

                

                <div className={Styles.name}>
                    Alok Kothiyal
                </div>

                <div className={Styles.profession}>
                    Full Stack Developer
                </div>
                <br></br>
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-2">
                        <Link to={{pathname:"https://www.linkedin.com/in/alok-kothiyal-025191119/"}} target="_blank">
                            <img src="linkedin.png" alt="logo" width="40px"></img>
                            <div>
                               alok-kothiyal
                            </div>
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to={{pathname:"https://twitter.com/alok_kothiyal"}} target="_blank">
                            <img src="twitter.png" alt="logo" width="40px"></img>
                            <div>
                            alok_kothiyal
                            </div>
                        </Link>
                    </div>
                    <div className="col-2">
                        <Link to={{pathname:"https://github.com/AlokKothiyal1"}} target="_blank">
                            <img src="github.svg" alt="logo" width="40px"></img>
                            <div>
                                 alokKothiyal1
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={`row m-4 ${Styles.details}`}>
                    <div className="col">
                        <MdLocationOn size="40px" color="#FFC831"/>
                       Dehradun,India
                    </div>

                    <div className="col">
                       <MdCall size="40px" color="#FFC831"/> 
                      +91 789 5108 898
                    </div>

                    <div className="col">
                        <MdEmail size="40px" color="#FFC831"/> 
                       alokkothiyal08@gmail.com
                    </div>
                </div>

                <div className={`mb-5 px-5 ${Styles.details}`}>
                    A passionate aspiring Full Stack Developer skilled in MERN stack.
                    <br></br>
                    Moulded and shaped by Masai School's numerous training. Actively ready to join in a great
                    lively team in a good start-up environment and give my best.
                </div>

                
                <div className={ `row  my-5 ${Styles.skills}`}>

                    <div className="col-3"></div>
                    <div className="col-2">
                        <img src="html-5.svg" alt="logo"></img>
                    </div>
                    <div className="col-2">
                        <img src="css.svg" alt="logo"></img>
                    </div>
                    <div className="col-2">
                        <img src="js.svg" alt="logo"></img>
                    </div>
                </div>
                
                <div className={ `row ${Styles.skills}`}>

                    <div className="col-3"></div>

                    <div className="col-2">
                        <img src="react.svg" alt="logo"></img>
                    </div>

                    <div className="col-2">
                        <img src="bootstrap.svg" alt="logo"></img>
                    </div>

                    <div className="col-2">
                        <img src="github.svg" alt="logo"></img>
                    </div>
                </div>
                
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default HomePage