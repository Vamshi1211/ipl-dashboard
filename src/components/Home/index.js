// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const responseData = await fetch('https://apis.ccbp.in/ipl')
    const iplTeamsData = await responseData.json()

    const {teams} = iplTeamsData

    const updatedIplTeamsData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplTeams: updatedIplTeamsData, isLoading: false})
  }

  iplDashBoard = () => {
    const {iplTeams} = this.state

    return (
      <Link to="/" className="team-dashboard-link">
        <div className="dash-board-container">
          <div className="logo-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo"
            />
            <h1 className="main-heading">IPL Dashboard</h1>
          </div>
          <ul className="team-cards-container">
            {iplTeams.map(eachTeam => (
              <TeamCard iplTeam={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        </div>
      </Link>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.iplDashBoard()
        )}
      </div>
    )
  }
}

export default Home
