import React, { Component } from 'react';
import fromCDN from "from-cdn";
import PropTypes from 'prop-types';

class ToolbarCdn extends Component {
  constructor(props) {
    super(props);

    this.ready = fromCDN([
      "https://cdn.dhtmlx.com/suite/edge/suite.js",
      "https://cdn.dhtmlx.com/suite/edge/suite.css"
    ]);
  }
  componentDidMount() {
    this.ready.then(() => {
      /* global dhx */
      this.toolbar = new dhx.Toolbar(this.el, {
        css: "dhx_widget--bordered dhx_widget--bg_white",
      });
      if (this.props.ready)
        this.props.ready(this.toolbar)
        this.toolbar.data.load('./static/toolbar.json')
    });
  }
  componentWillUnmount() {
    if (this.toolbar)
      this.toolbar.destructor();
  }
  render() {
    return (
      <div 
        style = {{width: '100%'}}
        ref = {el => this.el = el} > 
      </div>
    );
  }
}
ToolbarCdn.propTypes = {
  css: PropTypes.string,
  data: PropTypes.array,
};
export default ToolbarCdn;
