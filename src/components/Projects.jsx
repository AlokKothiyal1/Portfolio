import React from 'react'
import Styles from './Projects.module.css'

class Projects extends React.Component{
    render() {
        return (

            <div className={Styles.main_container}>
                
                <div className="container">

                <div className="row ">
                    <div className="card col p-0 mx-3" >
                        <img src="pexels.jpeg" class="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Stock Images & Videos Viewer</h5>
                            <p className="card-text">Use of Pixel API to search & view different Stock photographs and Videos Shared by Talented Creators.</p>
                            <a href="https://github.com/AlokKothiyal1/React-Pixels" className="btn btn-outline-dark mt-auto">Github link</a>
                        </div>
                    </div>    

                    <div className="card col p-0 mx-3" >
                        <img src="typing.jpeg" class="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Typing Speed & Accuracy Calculator</h5>
                            <p className="card-text">Checkout your average Typing speed & accuracy along with a fun typing game to enhance your Typing speed & Accuracy.</p>
                            <a href="https://github.com/AlokKothiyal1/Masai_typing" className="btn btn-outline-dark mt-auto">Github link</a>
                        </div>
                    </div>    

                    <div className="card col p-0 mx-3" >
                        <img src="snake.jpeg" class="card-img-top" alt="..."></img>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Snake & ladder Game</h5>
                            <p className="card-text">The Classic Snake & Ladder game can be played between 2 players.</p>
                            <a href="https://github.com/AlokKothiyal1/Snake-Ladder-Game" className="btn btn-outline-dark mt-auto">Github link</a>
                        </div>
                    </div>

                </div>

                <br></br>
                <div className="row ">

                    <div className="col-2"></div>

                    <div className="card col-4 p-0 m-3" >
                        <img src="expanse.jpg" class="card-img-top" alt="..."></img>

                        <div class="card-body d-flex flex-column">
                            <h5 className="card-title">Expanse Manager</h5>
                            <p className="card-text">Multiple users can keep track of their expanses & expenditure simultaneously.</p>
                            <a href="https://github.com/AlokKothiyal1/Payment-Management-System" className="btn btn-outline-dark mt-auto">Github link</a>
                        </div>
                    </div>    

                    <div className="card col-4 p-0 m-3" >
                        <img src="trivia.jpeg" class="card-img-top" alt="..."></img>
                        <div class="card-body d-flex flex-column">
                            <h5 className="card-title">Trivia Quiz!</h5>
                            <p className="card-text">A Fun Tivia Quiz app , Making use of OpenTrivia API to fetch questions based on different Categories & difficulty level.</p>
                            <a href="https://github.com/AlokKothiyal1/Trivia-Quiz" className="btn btn-outline-dark mt-auto">Github link</a>
                        </div>
                    </div>    

                </div>

                </div>  
            </div>
        )
    }
}
export default Projects