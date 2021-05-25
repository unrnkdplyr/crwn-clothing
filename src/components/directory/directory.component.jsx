import { Component } from "react";

import MenuItem from "../menu-item/menu-item.component";

import SECTIONS_DATA from "./directory.data";

import "./directory.styles.scss";

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
