// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const backgroundColors = [
  {
    id: 'RCB',
    bgColor: 'bgColorRCB',
  },
  {
    id: 'KKR',
    bgColor: 'bgColorKKR',
  },
  {
    id: 'KXP',
    bgColor: 'bgColorKXP',
  },
  {
    id: 'CSK',
    bgColor: 'bgColorCSK',
  },
  {
    id: 'RR',
    bgColor: 'bgColorRR',
  },
  {
    id: 'MI',
    bgColor: 'bgColorMI',
  },
  {
    id: 'SH',
    bgColor: 'bgColorSH',
  },
  {
    id: 'DC',
    bgColor: 'bgColorDC',
  },
]

class TeamMatches extends Component {
  state = {teamDetailsData: {}, isLoading: true}

  componentDidMount() {
    this.getTeamDetails()
  }

  getTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await response.json()

    const updatedTeamData = {
      teamBannerUrl: teamData.team_banner_url,
      recentMatches: teamData.recent_matches,
      latestMatchDetails: teamData.latest_match_details,
    }

    this.setState({
      teamDetailsData: updatedTeamData,
      isLoading: false,
    })
  }

  getTeamDetailsList = () => {
    const {teamDetailsData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetailsData

    const updatedRecentMatches = recentMatches.map(eachItem => ({
      result: eachItem.result,
      id: eachItem.id,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      matchStatus: eachItem.match_status,
    }))

    return (
      <div className="team-details-bg-container">
        <img src={teamBannerUrl} alt="team banner" className="bannerImage" />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-card-list-container">
          {updatedRecentMatches.map(eachItem => (
            <MatchCard matchDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  getBgColorTeam = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const bgColorToTeam = backgroundColors.find(eachItem => eachItem.id === id)

    return bgColorToTeam
  }

  render() {
    const {isLoading} = this.state

    const bgColorValue = this.getBgColorTeam()
    const {bgColor} = bgColorValue

    return (
      <div className={`${bgColor} team-details-container`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getTeamDetailsList()
        )}
      </div>
    )
  }
}

export default TeamMatches
