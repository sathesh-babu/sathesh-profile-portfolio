import { education } from '../../portfolio';
import './education.css'

const Education = () => {
  if (!(education.degree1 && education.degree2) ) return null

  return (
    <section className='section education center' id='education'>
      <h2 className='section__title'>Education</h2>
      <ul className='education'>
      {education.degree1 && <li>{education.degree1}</li>}
      {education.degree2 && <li>{education.degree2}</li>}
      </ul>
    </section>
  )
}

export default Education