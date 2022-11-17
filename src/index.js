import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Profile from './components/ProfileSection/Profile';
import Link from './components/LinkSection/Link';
import Footer from './components/FooterSection/Footer';

function Linktree(){
  return(
    <div className='body'>
   <Profile />
    <Link />
    <Footer />
    </div>
  );
}

ReactDom.render(<Linktree/>, document.getElementById('root'));

