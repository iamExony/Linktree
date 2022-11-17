import './profile.css';

function Profile() {
  return (
    <section className="profile-body">
      <div className='nav-bar'>
        <img src='./images/mobile-nav.png' alt='nav-btn' className='navbar'/>
        <img src='./images/desktop-nav.png' alt='nav-btn' className='desktop-nav'/>
      </div>
      <img src='/images/profile.png' id='profile__img' alt='profile'/>
      <h2 id='twitter'>Eze Onyemaechi</h2>
      <h2 id='slack' className='hidden'>Exony</h2>
      
    </section>
  );
}

export default Profile;
