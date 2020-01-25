import Header from './header.jsx';
import Gallery from './gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetchProfiles()
      .then(profiles =>  this.setState({ items: profiles }))
  }

  render() {
    const { items } = this.state;

    return (
      <React.Fragment>
        <Header text="AWESOME STARTUP EMPLOYEE DIRECTORY" />
        <Gallery items={items} />
      </React.Fragment>
      
    )
  }
}

export default App;
