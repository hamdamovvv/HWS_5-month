import React from 'react';
import withMouseTracker from "../../hoc/WithMouseTracker.jsx";
class Header extends React.Component {
  render() {
    const { isMouseInside, mouseX, mouseY } = this.props;
    return (
      <div>
        <h1>Header</h1>
        <p>Mouse inside: {isMouseInside.toString()}</p>
        {isMouseInside && <p>Mouse X: {mouseX}, Mouse Y: {mouseY}</p>}
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    const { isMouseInside, mouseX, mouseY } = this.props;
    return (
      <div>
        <h1>Footer</h1>
        <p>Mouse inside: {isMouseInside.toString()}</p>
        {isMouseInside && <p>Mouse X: {mouseX}, Mouse Y: {mouseY}</p>}
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
    const { isMouseInside, mouseX, mouseY } = this.props;
    return (
      <div>
        <h1>Main</h1>
        <p>Mouse inside: {isMouseInside.toString()}</p>
        {isMouseInside && <p>Mouse X: {mouseX}, Mouse Y: {mouseY}</p>}
      </div>
    );
  }
}

const HeaderWithMouseTracker = withMouseTracker(Header);
const FooterWithMouseTracker = withMouseTracker(Footer);
const MainWithMouseTracker = withMouseTracker(Main);

export { HeaderWithMouseTracker, FooterWithMouseTracker, MainWithMouseTracker}
