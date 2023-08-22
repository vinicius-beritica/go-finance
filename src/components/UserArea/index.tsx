import credit from '../../assets/credit-card.svg';
import imgProf from '../../assets/profile.jpg';
import './styles.css';

export const UserArea = () => {
  let user = { name: '', email: '' };
  const userString = localStorage.getItem('user');
  if (userString !== null) {
    user = JSON.parse(userString);
  }
  return (
    <header className="top-header">
      <div className="header-content">
        <div className="logo">
          <img className="img-logo" src={credit} />
          <div className="txt-logo">Go Finance</div>
        </div>
        <div className="profile">
          <div className="nm-email-profile">
            {' '}
            <h2 className="nm-profile">{user.name}</h2>
            <span className="email-profile">{user.email}</span>
          </div>
          <img className="img-round" src={imgProf}></img>
        </div>
      </div>
    </header>
  );
};
