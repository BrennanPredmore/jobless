import React from 'react'
import './style.css'

function index() {
    return (
        <div>
            <footer>
                <h6 style={fontStyle}>© Copyright
                <br/>
                <a href="https://github.com/BrennanPredmore/brennanpredmore-react-portfolio">Click here the portfolio for Github Repo</a>
                 (Generated by REACT.JS)  </h6>
            </footer>
        </div>
    )
}

const fontStyle = {
    fontSize: '0.75rem'
}

export default index