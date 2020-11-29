function SLitem(props) {
  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <GripLabel/>
        <button className="btn btn-sm btn-link border-top rounded-0" type="button" data-toggle="dropdown">
          <SLicon type={props.type}/>
        </button>
        <IconListDropdown/>
      </div>
      <input type="text" className="form-control border-left-0 border-right-0 border-bottom-0" defaultValue={props.text}/>
      <div className="input-group-append">
        <ButtonTrash/>
      </div>
    </div>
  )
}