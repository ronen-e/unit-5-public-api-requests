import Header from './header.jsx';
import Gallery from './gallery.jsx';
import Modal from './modal.jsx';
import { fetchProfiles } from './scripts-react.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: [],
      selectedProfile: null
    }
  }

  componentDidMount() {
    fetchProfiles()
      .then(profiles =>  this.setState({ profiles }))
  }

  showProfile(profile) {
    this.setState({ selectedProfile: profile })
  }

  hideProfile() {
    this.setState({ selectedProfile: null })
  }

  render() {
    const { profiles, selectedProfile } = this.state;

    return (
      <React.Fragment>
        <Header text="AWESOME STARTUP EMPLOYEE DIRECTORY" />
        
        <Gallery profiles={profiles} onClick={(val) => this.showProfile(val) } />
        
        <Modal profile={selectedProfile} onClose={() => this.hideProfile() } />
      
      </React.Fragment>
      
    )
  }
}

export default App;
