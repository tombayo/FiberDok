function SLdiagram(props) {
  if (props.page != '#sldiagram') { return null } // Prevent rendering this component if this isn't the page requested.

  return (
    <div className="container">
      <SLitem type="node" text="Node Stjørdal"/>
      <SLitem type="kabel" text="7500-000A"/>
      <SLitem type="kum" text="NTEKSTJ100001"/>
      <SLitem type="kabel" text="7500-000B"/>
      <SLitem type="skap" text="VEAR-00"/>
      <ButtonNewItem/>
    </div>
  )
}