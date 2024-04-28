// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {iplTeam} = props
  const {name, id, teamImageUrl} = iplTeam

  return (
    <Link to={`/team-matches/${id}`} className="team-link-item">
      <li className="ipl-team">
        <img src={teamImageUrl} alt={`${name}`} className="team-image" />
        <p className="team-name-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
