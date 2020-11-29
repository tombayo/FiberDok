function ButtonNewItem(props) {
  function addItem(e) {
    console.log('Handling the click...');
  }

  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-success btn-block rounded-0",
    onClick: addItem
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-plus",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
  })));
}function ButtonTrash(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "btn btn-outline-danger border-bottom-0 rounded-0",
    type: "button"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-trash",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
  })));
}function GripIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-grip-vertical",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }));
}function GripLabel(props) {
  return /*#__PURE__*/React.createElement("span", {
    className: "input-group-text border-bottom-0 rounded-0 p-0 cursor-grip"
  }, /*#__PURE__*/React.createElement(GripIcon, null));
}function IconListDropdown(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dropdown-menu"
  }, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/React.createElement(SLicon, {
    type: "node"
  })), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/React.createElement(SLicon, {
    type: "skap"
  })), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/React.createElement(SLicon, {
    type: "kum"
  })), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/React.createElement(SLicon, {
    type: "kabel"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dropdown-divider"
  }), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/React.createElement(SLicon, {
    type: "question"
  })), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/React.createElement(SLicon, {
    type: "patch"
  })), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, /*#__PURE__*/React.createElement(SLicon, {
    type: "odf"
  })));
}function Navbar(props) {
  let links = [];

  for (let i in props.links) {
    let l = props.links[i];
    let link = {};

    if (l.type == "link") {
      link.url = l.url;
    } else if (l.type == 'page') {
      link.url = '#' + i;
    } else {
      link.url = '#unknownNavType';
      console.log('Unknown Nav-type in config.');
    }

    link.active = `#${i}` == props.activepage;
    link.text = l.text;
    links.push(link);
  }

  let list = links.map((link, i) => /*#__PURE__*/React.createElement(Navlink, {
    url: link.url,
    text: link.text,
    active: link.active,
    key: i
  }));
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar navbar-expand-md navbar-light border m-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbar-brand"
  }, props.brand), /*#__PURE__*/React.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbar",
    "aria-controls": "navbar",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/React.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/React.createElement("div", {
    id: "navbar",
    className: "collapse navbar-collapse"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, list)));
}function Navitem(props) {
  return /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, props.children);
}function Navlink(props) {
  let aClass = props.active ? " active" : "";
  aClass = "nav-link" + aClass;
  return /*#__PURE__*/React.createElement(Navitem, null, /*#__PURE__*/React.createElement("a", {
    className: aClass,
    href: props.url
  }, props.text));
}function TrashIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-plus",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
  }));
}function SLdiagram(props) {
  if (props.page != '#sldiagram') {
    return null;
  } // Prevent rendering this component if this isn't the page requested.


  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(SLitem, {
    type: "node",
    text: "Node Stj\xF8rdal"
  }), /*#__PURE__*/React.createElement(SLitem, {
    type: "kabel",
    text: "7500-000A"
  }), /*#__PURE__*/React.createElement(SLitem, {
    type: "kum",
    text: "NTEKSTJ100001"
  }), /*#__PURE__*/React.createElement(SLitem, {
    type: "kabel",
    text: "7500-000B"
  }), /*#__PURE__*/React.createElement(SLitem, {
    type: "skap",
    text: "VEAR-00"
  }), /*#__PURE__*/React.createElement(ButtonNewItem, null));
}function SLicon(props) {
  let imgurl = "svg/" + props.type + ".svg";
  return /*#__PURE__*/React.createElement("img", {
    src: imgurl,
    title: props.type
  });
}function SLitem(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-group-prepend"
  }, /*#__PURE__*/React.createElement(GripLabel, null), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-link border-top rounded-0",
    type: "button",
    "data-toggle": "dropdown"
  }, /*#__PURE__*/React.createElement(SLicon, {
    type: props.type
  })), /*#__PURE__*/React.createElement(IconListDropdown, null)), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control border-left-0 border-right-0 border-bottom-0",
    defaultValue: props.text
  }), /*#__PURE__*/React.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/React.createElement(ButtonTrash, null)));
}function SLnewrow(props) {
  function addItem(e) {
    console.log('Handling the click...');
  }

  return /*#__PURE__*/React.createElement("tr", {
    className: "SLnewrow",
    onClick: addItem
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: "2"
  }));
}function SLrow(props) {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "1"
  }, /*#__PURE__*/React.createElement(SLicon, {
    type: props.type
  })), /*#__PURE__*/React.createElement("td", {
    contentEditable: "true"
  }, props.children));
}class Site extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      config: props.config
    };
    this.state.page = window.location.hash ? window.location.hash : '#sldiagram';
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navbar, {
      links: this.state.config.nav,
      brand: this.state.config.title,
      key: "navbar"
    }), /*#__PURE__*/React.createElement(SLdiagram, {
      page: this.state.page
    }));
  }

}function TrashIcon(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 16 16",
    className: "bi bi-trash",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
  }));
}