import React, { Component } from 'react';

import SocialNav from "../components_re/social/SocialNav";

import "../css/index.css";

export class Social extends Component {
  render() {
    return (
      <div className="socialBackground">
        <SocialNav/>
      </div>
    )
  }
}

export default Social;
