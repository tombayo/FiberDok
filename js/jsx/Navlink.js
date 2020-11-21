function Navlink(props) {
  let aClass = (props.active)?" active":""
  aClass = "p-3 nav-link"+aClass

  return <Navitem><a className={aClass} href={props.url}>{props.text}</a></Navitem>
}