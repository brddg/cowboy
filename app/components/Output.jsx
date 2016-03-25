import React from 'react';

export default class Output extends React.Component {

  render() {
    return (
      <section style={{padding: "20px 0"}}>
        <h4>Chunk #{this.props.chunkNum + 1}</h4>
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
