import React from 'react'
import '../css/loading.css'

const Loading = () => {
    return (
        <div className="loader-container">
            <div className="loader">
                <div className="circleA "></div>
                <div className="circleB "></div>
                <div className="circleC "></div>
            </div>
        </div>
    )
}

export default Loading
