import React from 'react'
import './task.css'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { Avatar } from '@mui/material';

const Task = ({ task }) => {
    let { id, name, priority, reportTo, lastDate } = task;
    // console.log(task.task.id)
    return (
        <div className="task" style={{ backgroundColor: priority === 'high' ? 'rgb(90,90,90)' : 'white', }}>
            <div className='taskhead'>
                <div>
                    <h5 style={{color: priority === 'high' ? 'White' : 'Black', fontSize: '14px'}}>{name}</h5>
                    <span >{priority} Priority</span>
                </div>
                <div className='icons'>
                    <EditOutlinedIcon />
                    <DeleteForeverOutlinedIcon />
                </div>
            </div>
            <div className='taskbody'>
                <Avatar sx={{ width: 24, height: 24 }}/>
                <p style={{color: priority === 'high' ? 'White' : 'Black',}}>{reportTo}</p>
                <AccessTimeOutlinedIcon/>
                {lastDate}
            </div>

        </div>
    )
}

export default Task
