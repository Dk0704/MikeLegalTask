import React from 'react'
import './dashboard.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircleIcon from '@mui/icons-material/Circle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import Chart from '../Chart/Chart';
import { tasks } from '../../Data/Tasks/Task';
import Task from '../Task/Task';
import Calender from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  return (
    <div>
      <div className='linechart2'>
      <Chart type={"line2"} />
      </div>
      <div className='feed'>
        <div className="upper">
          <div className='upper-1'>
            <div className='top'>
              <div>
                <p style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>Dashboard
                  <span className='arrow'><KeyboardArrowDownIcon /> </span></p>
                <h1>Overview</h1>
              </div>
              <button>Check Now</button>
            </div>
            <div className='content'>
              <img src="https://as2.ftcdn.net/v2/jpg/02/86/14/29/1000_F_286142965_c0fuokKj6eay33G2easiG3YCJUYD4UEX.jpg" alt="" width='150px' />
              <div className='info'>
                <h3>Congratulations Jenny,</h3>
                <p>You have completed the profile verification. It is easy to convert your points to cash.</p>
              </div>
              <div className='points'>
                <div className="reward">
                  <h2>95</h2>
                  <p>POINTS</p>
                </div>
                <p>Explore</p>
              </div>
            </div>
          </div>
          <div className="upper-2">
            <div className='top-2'>
              <div className='online'>
                <CircleIcon className='status-1' id='offline' />
                <p>Offline</p>
                <CircleIcon className='status-2' id='online' />
                <p>Online</p>
              </div>
              <button>View Details</button>
            </div>
            <div className='content-2'>
              <Chart type={"line1"} />
            </div>
          </div>
        </div>
        <div className='lower'>
        <Calender className='calender'/>
          <div className='tasks'>
            <h4>Current Task - 2</h4>
            <div className='box'>
              <div className='bottom-head'>
                <h4>Task List</h4>
                <button className='addTask'> New Task</button>
              </div>
              <div className='alltask'>
                {tasks.map((task) => (
                  <Task key={task.id} task={task} />
                ))}
              </div>
            </div>
          </div>
          <div className='stats'>
            <h4>Followers Stats</h4>
            <div className='box'>
              <div className='bottom-head'>
                <h4>Followers</h4>
                <div className='dropdown'>
                  <select id="month" name="month" >
                    <option value="January" >January</option>
                    <option value="February" >February</option>
                    <option value="March" >March</option>
                    <option value="April" >April</option>
                    <option value="May" >May</option>
                    <option value="June" >June</option>
                    <option value="July" selected>July</option>
                    <option value="August" >August</option>
                    <option value="September" >September</option>
                    <option value="October" >October</option>
                    <option value="November" >November</option>
                    <option value="December">December</option>

                  </select>
                </div>
              </div>
              <div className='alltask'>
                <Chart type={"bar"} />
              </div>
            </div>
          </div>
          <div className='visits'>
            <h4>User Visits</h4>
            <div className='box'>
              <div className='bottom-head'>
                <h4>View Goals</h4>
                <button className='addTask'> Details</button>
              </div>
              <div className='report'>
                <NavigateBeforeOutlinedIcon className='navigate' />
                <div className="progress">
                  <svg>
                    <circle cx='50' cy='50' r='50'></circle>
                  </svg>
                  <div className="number">
                    <p>55%</p>
                  </div>
                </div>
                <NavigateNextIcon className='navigate' />
              </div>
              <div className='visit-info'>
                <span>Total Views Made Today</span>
                <h2>2400</h2>
              </div>
              <div className='visit-detail'>
                <div className='visit-box'>
                  <h3>4800 Views</h3>
                  <p>Goal Status</p>
                </div>

                <div className='visit-box'>
                  <h3>2.5 Sec</h3>
                  <p>Average Visiting Time</p>
                </div>
                <div className='visit-box'>

                  <h3>3404</h3>
                  <p>Social Share</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
