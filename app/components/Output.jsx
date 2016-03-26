import React from 'react';

export default class Output extends React.Component {

  getSrc(src, options = { alwaysComplete: false }) {
    if (options.alwaysComplete) return "/cow.png"

    if (src.match(/sam/) === null) {
      return "/sam.png";
    } else {
      return "/cow.png";
    }
  }

  toggleComplete(event) {
    event.preventDefault();
    let img = event.currentTarget.children[0];
    img.src = this.getSrc(img.src);
  }

  componentDidMount() {
    window.addEventListener("keydown", function(e){
        if (e.keyCode == 67 && (e.ctrlKey || e.metaKey)){
          let img = e.target.parentElement.children[0].children[0];
          img.src = this.getSrc(img.src, { alwaysComplete: true });
        }
    }.bind(this));
  }

  render() {
    return (
      <section style={{padding: "20px 0", position: "relative" }}>
        <a href="#" onClick={this.toggleComplete.bind(this)} style={{ position: "absolute", right: "0", top: "-10px" }}>
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
