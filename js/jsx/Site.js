class Site extends React.Component {
  constructor(props) {
    super(props)
    this.state = {config: props.config}
    this.state.page = (window.location.hash)?window.location.hash:'#sldiagram'
  }

  render() {
    return (
      <>
        <Navbar links={this.state.config.nav} key='navbar'/>
        <SLdiagram page={this.state.page}/>
      </>
    )
  }
}