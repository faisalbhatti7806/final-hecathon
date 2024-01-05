import React from 'react'
import { DefaultSidebar } from './SideBar';
import { DialogWithForm } from './addStdModal';

function Students() {
    return (
        <div className='container'>
            <DefaultSidebar />
            <div className='dashTable'>
                <div className="head">
                    <div className='headingdash'>
                        <i class="fa-solid fa-circle-user"></i>
                        <h1>Attendance</h1>
                    </div>
                    <div className='addbtn'>
                       
                        <button> Student</button>
                    </div>
                </div>
                <table className='tab'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Profile Img</th>
                            <th>Name</th>
                            <th>Course Name</th>
                            <th>Passwrod</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr >
                                <td>1</td>
                                <td>img</td>
                                <td>Rizwan</td>
                                <td>9:00 AM</td>
                                <td>9:20 AM</td>
                            </tr>
                    </tbody>
                    <tbody>
                            <tr >
                                <td>2</td>
                                <td>img</td>
                                <td>Faisal</td>
                                <td>3:39 PM</td>
                                <td>1:27 PM</td>
                            </tr>
                    </tbody>
                    <tbody>
                            <tr >
                                <td>3</td>
                                <td>img</td>
                                <td>Zeeshan</td>
                                <td>9:00 AM</td>
                                <td>9:20 AM</td>
                            </tr>
                    </tbody>
                    <tbody>
                            <tr >
                                <td>4</td>
                                <td>img</td>
                                <td>Naveed</td>
                                <td>10:00 PM</td>
                                <td>6:20 PM</td>
                            </tr>
                    </tbody>
                    <tbody>
                            <tr >
                                <td>5</td>
                                <td>img</td>
                                <td>Bilal</td>
                                <td>5:30 AM</td>
                                <td>3:20 AM</td>
                            </tr>
                    </tbody>
                    <tbody>
                            <tr >
                                <td>6</td>
                                <td>img</td>
                                <td>Ali</td>
                                <td>3:00 AM</td>
                                <td>2:20 AM</td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Students
