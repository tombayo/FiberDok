function Navbar(props) {
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
    className: "navbar navbar-expand-md navbar-light bg-bjork rounded mt-3 pb-0 pt-0 border border-bjork"
  }, /*#__PURE__*/React.createElement("button", {
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
  aClass = "p-3 nav-link" + aClass;
  return /*#__PURE__*/React.createElement(Navitem, null, /*#__PURE__*/React.createElement("a", {
    className: aClass,
    href: props.url
  }, props.text));
}function SLdiagram(props) {
  if (props.page != '#sldiagram') {
    return null;
  } // Prevent rendering this component if this isn't the page requested.


  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Test"));
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
      key: "navbar"
    }), /*#__PURE__*/React.createElement(SLdiagram, {
      page: this.state.page
    }));
  }

}