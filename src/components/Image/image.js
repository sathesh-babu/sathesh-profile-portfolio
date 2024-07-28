import About from '../About/About'
import './image.css';

const Image = () => 
   (
    <div className="image-container">
      <img src='/assets/image_left.jpg' alt="Left side" className="image_left" responsive/>
      <div className="content">
        <About />
      </div>
      <img src='/assets/image_right.jpg' alt="Right side" className="image_right" align = 'right' />
      
    </div>
  )
;

export default Image;
