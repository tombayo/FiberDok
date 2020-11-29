function IconListDropdown(props) {
  return (
    <div className="dropdown-menu">
      <a className="dropdown-item" href="#"><SLicon type="node"/></a>
      <a className="dropdown-item" href="#"><SLicon type="skap"/></a>
      <a className="dropdown-item" href="#"><SLicon type="kum"/></a>
      <a className="dropdown-item" href="#"><SLicon type="kabel"/></a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#"><SLicon type="question"/></a>
      <a className="dropdown-item" href="#"><SLicon type="patch"/></a>
      <a className="dropdown-item" href="#"><SLicon type="odf"/></a>
    </div>
  )
}