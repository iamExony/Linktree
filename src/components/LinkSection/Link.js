import './link.css';

function Link() {
  return (
    <div className="link-body">
      <a href='https://www.twitter.com/EzeOnyemaechi51'><button id='twitter' className='link-btn'>Twitter Link</button></a>
      <a href='https://training.zuri.team/'><button id='btn__zuri' className='link-btn'>Zuri Team</button></a>
      <a href='http://books.zuri.team '><button id='books' className='link-btn'>Zuri Books</button></a>
      <a href='https://books.zuri.team/python-for-beginners?ref_id=Exony'><button id='book__python' className='link-btn'>Python </button></a>
      <a href='https://background.zuri.team'><button id='pitch' className='link-btn'>Background Check for Coders</button></a>
      <a href='https://books.zuri.team/design-rules '><button id='twitter' className='link-btn'>Design Books</button></a>
    </div>
  );
}

export default Link;
