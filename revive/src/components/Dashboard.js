import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.scss';

const Dashboard = (props) => {

    return(
<>
<div className="cards">
    
            <div className="cards_body">
                <img className="cards_image" src={props.image} />
                <h2 className="cards_title">{props.title}</h2>
                <p className="cards_description">{props.desc}</p>
                 </div>
    <a href="#" className="cards_btn">{props.btn}</a> 
        </div>
</>

    );
}


export default Dashboard;