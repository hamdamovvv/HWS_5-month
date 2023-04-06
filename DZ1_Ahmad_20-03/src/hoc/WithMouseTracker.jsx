import React from 'react';

function withMouseTracker(WrappedComponent) {
  return class extends React.Component {
    state = {
      isMouseInside: false,
      mouseX: null,
      mouseY: null,
    };

    handleMouseEnter = () => {
      this.setState({
        isMouseInside: true,
      });
    };

    handleMouseLeave = () => {
      this.setState({
        isMouseInside: false,
        mouseX: null,
        mouseY: null,
      });
    };

    handleMouseMove = (event) => {
      this.setState({
        mouseX: event.clientX,
        mouseY: event.clientY,
      });
    };

    render() {
      const { isMouseInside, mouseX, mouseY } = this.state;
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
        >
          <WrappedComponent
            isMouseInside={isMouseInside}
            mouseX={mouseX}
            mouseY={mouseY}
            {...this.props}
          />
        </div>
      );
    }
  };
}


export default withMouseTracker;
