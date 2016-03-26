import React from 'react';

export default class Output extends React.Component {

  toggleComplete(event) {
    event.preventDefault();
    let img = event.currentTarget.children[0];
    if (img.src.match(/sam/) === null) {
      img.src = "/sam.png";
    } else {
      img.src = "/cow.png";
    }
  }

  render() {
    return (
      <section style={{padding: "20px 0", position: "relative" }}>
        <a href="#" onClick={this.toggleComplete} style={{ position: "absolute", right: "0", top: "-10px" }}>
          <img src="/sam.png" />
        </a>
        <h4>Herd #{this.props.chunkNum + 1}</h4>
        <p><small>{this.props.emails.length} chars</small></p>
        <textarea
          className="form-control"
          value={this.props.emails}
          rows="6"
          readOnly={true}
          style={{
            backgroundColor: "#fff",
            cursor: "default"
          }}
        />
      </section>
    );
  }

}
