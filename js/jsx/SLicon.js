function SLicon(props) {
  let imgurl = "svg/"+props.type+".svg"

  return <img src={imgurl} title={props.type}/>
}