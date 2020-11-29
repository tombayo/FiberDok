function Navlink(props) {
  let aClass = (props.active)?" active":""
  aClass = "nav-link"+aClass

  return <Navitem><a className={aClass} href={props.url}>{props.text}</a></Navitem>
}