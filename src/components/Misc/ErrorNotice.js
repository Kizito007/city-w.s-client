import React from "react"

export default function ErrorNotice (props) {
    return (
        <div className="error-notice">
            <span style={{ color: "#232323" }}> {props.message} </span>
            <button onClick={props.clearError}> X </button>
        </div>
    );  
}