import React from "react"

const Card = () => {
    return (
        <div className="card">
            <img src="https://via.placeholder.com/500x325.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div class="card-footer bg-transparent border-light">
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    )
}

export default Card