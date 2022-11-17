import './footer.css';

function Footer() {
  return (
    <section className="footer-body">
      <div className='footer-item'>
        <a href='https://www.slack.com'><img src='/images/slack.png' alt='slack' className='spaced'/></a>
        <a href='https://github.com/iamExony'><img src='/images/git.png' alt='slack' className='spaced'/></a>
      </div>
      <div className='other-contents'>
        <a href='https://internship.zuri.team/'><img src='/images/zuri.png' alt='slack' className='spaced-item'/></a>
        <a href='https://hngi9.zuriboard.com/'><img src='/images/hng.png' alt='slack' className='spaced-item .spaced-item-center'/></a>    
        <a href='https://ingressive.org/'><img src='/images/i4g.png' alt='slack' className='spaced-item'/></a>    
      </div>
    </section>
  );
}

export default Footer;
