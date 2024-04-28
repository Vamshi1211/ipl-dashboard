// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedMatchDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedMatchDetails

  console.log(updatedMatchDetails)

  return (
    <div className="latest-match-details-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-container">
        <div className="details-and-image-container">
          <div className="against-competing-team">
            <p className="competing-team-heading">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>

          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-logo-1"
          />
        </div>

        <hr className="horizontal-line" />
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-logo-2"
        />

        <div className="latest-match-additional-details-container">
          <h2 className="additional-headings">First Innings</h2>
          <p className="additional-info">{firstInnings}</p>
          <h2 className="additional-headings">Second Innings</h2>
          <p className="additional-info">{secondInnings}</p>
          <h2 className="additional-headings">Man Of The Match</h2>
          <p className="additional-info">{manOfTheMatch}</p>
          <h2 className="additional-headings">Umpires</h2>
          <p className="additional-info">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
