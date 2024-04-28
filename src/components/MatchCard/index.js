// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const matchStatusValue =
    matchStatus === 'Lost' ? 'match-status-lost' : 'match-status-win'

  return (
    <li className="recent-match-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className={matchStatusValue}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
