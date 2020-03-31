import React, { Component } from "react";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      description: "",
      name: "",
      tags: ""
    };
  }
  render() {
    return <div className="Edit">{JSON.parse(this.props)}</div>;
  }
}
export default Edit;
