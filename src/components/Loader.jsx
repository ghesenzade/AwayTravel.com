import React from 'react'
import AwayLoading from "../assets/images/away.svg";

const Loader = () => {
  return (
    <div>
        <div className="container">
            <div className="loading">
                <img src={AwayLoading} alt="Loading" />
            </div>
        </div>
    </div>
  )
}

export default Loader