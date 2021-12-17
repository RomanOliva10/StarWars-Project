import React,{Fragment} from 'react';

//Style
import './getUsers.css';
import Nav from "../../layout/nav/Nav"
import User from "./User"

export default function GetAllUsers({dataU}){
    return(
        // dataU.results.length === 0 ? 
        // <Spinner msg="loading users" />:
        <Fragment>
            <Nav/>
        <div className="container-all-users">
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th><th>Email</th><th>Contraseña</th>
                        </tr>
                    </thead>

                        {dataU.map((ele,idx)=> <User key={idx} datos={ele}/>)}

                </table>
            </div>
        </div>
        </Fragment>
    )
}