import React from 'react'
import Styles from './Proficiencies.module.css'

class Proficiencies extends React.Component{
    render(){
        return (
            <div className= "my-5 container-fluid ">   

                <div className={`mb-5 ${Styles.heading}`} >
                    Proficiencies
                </div>
               
                <div className={`row d-flex ${Styles.proficiencies}`}>

                    <div className="col-2"></div>

                    <div className='col-2'>
                        <img src="react.svg" alt="img"></img>
                        <div>React Apps</div>
                            When it comes to react apps
                                I have the strength of Atlas
                            
                    </div>

                    <div className='col-2'>
                        <img src="front.svg" alt="img"></img>
                        <div>Frontend</div>
                            I am the one who runs
                                the show
                            
                    </div>

                    <div className='col-2'>
                        <img src="back.svg" alt="img"></img>
                        <div>Backend</div>
                            Now just that I can
                                even host the show
                            
                    </div>

                    <div className='col-2'>
                        <img src="database.svg" alt="img"></img>
                        <div>Data Structures</div>
                            Putting the right blocks in the
                                right place is just my thing
                            
                    </div>

                </div>
                <div className="py-5">
                <div className={`mb-3 ${Styles.heading}`} >
                    Github
                </div>
                    <img src="git.png" alt="img"></img>
                </div>
                
            </div>


        )
    }
}

export default Proficiencies