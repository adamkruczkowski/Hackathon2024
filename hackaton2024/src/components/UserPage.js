import React from 'react';
import { getUser } from '../App';

const UserPage = ({userIn}) => {
  return (
    <div className="pt-40">{userIn.name}</div>
  )
}

export default UserPage