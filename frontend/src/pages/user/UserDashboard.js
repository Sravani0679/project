import React, {useState, useEffect} from 'react';
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../user/Drafts/TextEditor';
import Card from './Quotes/Card'
import TextEditor from './Drafts/TextEditor';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
//import Write from './Drafts/Write';


const UserDashboard = () => {

    const [profile, setProfile] = useState("");
    const {name, email, role, createdAt} = profile;
    const [value, onChange] = useState(new Date());
    console.log(value)

    useEffect(()=>{
        fetch('/api/getme')
        .then(res =>{
            return res.json()
        })
        .then(result =>{
            //console.log(result)
            setProfile(result.user)
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    const logOut = () =>{
        axios.get('/api/logout')
        .then(result =>{
            toast.success('Log out successfully');
            localStorage.removeItem('token');
            // history.push('/');
        })
        .catch(error =>{
            console.log(error);
        })

    }
    
  return (
    <>

    <Header/>
{/* <div>
    <TextEditor/>
    <Write/>
</div> */}
    <div className="container-fluid dashboard_container">
        <div className="row">
            <div className="col-sm-4">
               <div className="card card_dashboard">
               <div className="card-header">
                    <b>User Dashboard</b>    
                </div>
                <Calendar 
                    value = {value}
                    onChange = {onChange}
                    calendarType = "US"
                    defaultView="month"
                    nextLabel="Next"
                    next2Label="Go"
                    prevLabel="Prev"
                    prev2Label="Back"
                    showWeekNumbers/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> Name: {name}</li>
                    <li className="list-group-item"> E-mail: {email}</li>
                    <li className="list-group-item"> Join at: {new Date(createdAt).toLocaleDateString()}</li>
                    <li className="list-group-item"> {role===1 ? "Admin" : "Registred User"}</li>
                </ul>
               </div>
               
            </div>
            <div className="col-sm-8">
            <TextEditor/>
                <Card/>
                 {/* <RichTextEditor/>  */}
            </div>
        </div>
    </div>
    <li className="nav-item">
        <Link className="nav-link" to ="" onClick={logOut} >Log out </Link>
    </li> 
   
    <Footer/>    
                
    </>
  )
};

export default UserDashboard;
