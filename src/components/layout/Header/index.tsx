import React from 'react'
import { Link } from 'react-router-dom'
import back from '../../../assets/icons/back.png'
import './header.css'

type Props = {
  page: string
}

const Header = (props: Props) => {
  return (
    <div className="container-header">
        <button className="back-icon">
                <Link to="/homepage">
                    <img src={back} />
                </Link>
            </button>
            <h2>{props.page}</h2>
        </div>
  )
}

export default Header