import blank_profile from '../assets/blank_profile.png'
import Skill from '../components/Skill'

const Wilder = ( { firstName, lastName, skills} ) => {
 return <article className="card">
 <img src={blank_profile} alt="Jane Doe Profile" />
 <h3>
  {firstName} {lastName}
  </h3>
 <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
   enim ad minim veniam, quis nostrud exercitation ullamco laboris
   nisi ut aliquip ex ea commodo consequat.
 </p>
 <h4>Wild Skills</h4>
 <ul className="skills">
  {skills.map((skill) => ( 
  <li key={skill.id}>
    <Skill skillName={skill.skillName} numberOfVotes/>
   </li>))}
 </ul>
</article>
}

export default Wilder