// Write your JS code here
import './index.css'

const UserInfo = props => {
  const {imgUrl, name, designation} = props

  return (
    <div className="user-info-card-container">
      <img src={imgUrl} alt="profile" className="profile-pic" />
      <h1 className="heading">{name}</h1>
      <p className="designation">{designation}</p>
    </div>
  )
}

export default UserInfo
