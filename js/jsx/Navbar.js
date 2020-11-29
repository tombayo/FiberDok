function Navbar(props) {
  let links = []

  for (let i in props.links) {
    let l = props.links[i]
    let link = {}

    if (l.type == "link") {
      link.url = l.url
    } else if (l.type == 'page') {
      link.url = '#'+i
    } else {
      link.url = '#unknownNavType'
      console.log('Unknown Nav-type in config.')
    }

    link.active = (`#${i}` == props.activepage)
    link.text = l.text
    links.push(link)
  }

  let list = links.map((link,i)=>
    <Navlink url={link.url} text={link.text} active={link.active} key={i}/>
  )

  return (
    <nav className="navbar navbar-expand-md navbar-light border m-3">
      <span className="navbar-brand">{props.brand}</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {list}
        </ul>
      </div>
    </nav>
  )
}