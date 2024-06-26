import { useContext } from 'react'
import { UserContext } from '../../context/UserContext.tsx';
import Header from '../../components/layout/Header';
import './profile.css'
import { Navigation } from '../../components/layout/Navbar';
import { useNavigate } from 'react-router-dom';
import StyledBtn from '../../styledComponents/StyledBtn';
import { UserContextType } from '../../interfaces/interfaces';


const Profile = () => {
  const user:UserContextType = useContext(UserContext)
  const userLogged = user.userData;

  const navigate = useNavigate()
  const logout = () => {
    window.localStorage.removeItem('isLogged')
    navigate('/')
  }

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
        <div className="profile-container-settings">
          <h4>Settings</h4>
          <p>Cookie settings</p>
          <p>About Creative Concept Design</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Terms and Conditions</p>
        </div>
        <StyledBtn onClick={()=>{logout()}} >Logout</StyledBtn>
      </div>
      <Navigation/>
    </>
  )
}

export default Profile