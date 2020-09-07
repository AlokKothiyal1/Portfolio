import React from 'react'
import Styles from './HomePage.module.css'
import { MdLocationOn,MdCall,MdEmail } from 'react-icons/md';


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

                <div className={`row m-4 ${Styles.details}`}>
                    <div className="col">
                        <MdLocationOn size="40px" color="#FFC831"/>
                        <br></br>
                        Dehradun,India
                    </div>

                    <div className="col">
                       <MdCall size="40px" color="#FFC831"/> 
                       <br></br>
                       +91 789 5108 898
                    </div>

                    <div className="col">
                        <MdEmail size="40px" color="#FFC831"/> 
                        <br></br>
                        alokkothiyal08@gmail.com
                    </div>
                </div>

                <div className={`mb-5 px-5 ${Styles.details}`}>
                    A passionate aspiring Full Stack Developer skilled in MERN stack,moulded and shaped by Masai School's numerous training.Actively ready to join in a great
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