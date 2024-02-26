import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import Header from '../../components/layout/Header';
import './profile.css'
import { Navigation } from '../../components/layout/Navbar';

type Props = {}

const Profile = (props: Props) => {
  const user = useContext(UserContext)
  const userLogged = user.userData;
  return (
    <>
      <div className="profile-main-container">
        <Header page="Profile"/>
        <div className="profile-container-info">
          <h3 className="profile-user-title">User Info</h3>
          <h4>Personal Infomation</h4>
          <p>Name: {userLogged?.name}</p>
          <p>Email: {userLogged?.Email}</p>
          <p>Previous orders: none</p>
        </div>
      </div>
      <Navigation/>
    </>
  )
}

export default Profile