import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
    return (
        <div className="col-md4 my-3">
            <div className="card" style={{width: "18rem"}}>
                <img 
                src="data:image/png;base64,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"
                alt ="Profil"
                className="card-img"
                />
                <Link to={`/users/${user.id}`}>
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">{user.email}</p>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default UserCard
