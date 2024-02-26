//Dasboard.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 
{ BsPeopleFill, BsPersonFillCheck, BsPersonVcard}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
function Dashboarde() {

  const [leaveCount, setleaveCount] = useState(null);
  const [grievanceCountt, setgrievanceCountt] = useState(null);
  const [profileCountt, setProfileCountt] = useState(null);

  useEffect(() => {
      axios.get('http://localhost:4005/dashboarddata')
          .then(response => {
              const { leaveCount, grievanceCountt, profileCountt } = response.data;
              setleaveCount(leaveCount);
              setgrievanceCountt(grievanceCountt);
              setProfileCountt(profileCountt);
          })
          .catch(error => {
              console.error('Error fetching dashboard data:', error);
          });
  }, []);

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>LEAVES </h3>
                    
                </div>
                <h2>Total : {leaveCount !== null ? leaveCount : 'Loading...'}</h2>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>GRIEVANCES</h3>
                    
                </div>
                <h2>Total: {grievanceCountt !== null ? grievanceCountt : 'Loading...'}</h2>
                

            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3> PROFILE</h3>
                    
                </div>
                <h2>Compeleted : {profileCountt !== null ? profileCountt : 'Loading...'}</h2>
            </div>
            
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                // data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Dashboarde
