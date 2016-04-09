import React from 'react';
import Input from "./Input.jsx";
import Output from "./Output.jsx";

export default class Top extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      emails: [],
      chunks: [],
      errors: []
    }
  }

  parseEmails(event) {
    event.preventDefault();

    const emails = document.getElementsByName("emails")[0].value.split("\n");

    let chunks = [];
    let errors = [];
    let chunk = "";
    emails.map((email) => {
      if (email === "") return
      if (email.match(/[\w\.\'_%-]+(\+[\w-]*)?@([\w-]+\.)+[\w-]+/i) === null){
        errors.push(email);
        return
      }

      if (chunk === "") {
        chunk += `${email}`
      } else {
        if (chunk.length + (email.length + 2) > 500) {
          chunks.push(chunk);
          chunk = email;
        } else {
          chunk += `, ${email}`
        }
      }

    });

    if (chunk.length > 0) chunks.push(chunk)

    this.setState({
      emails: emails,
      chunks: chunks,
      errors: errors
    });
  }

  render() {
    return (
      <div>
        <header className="page-header">
          <h1 className="text-center">Cowboy</h1>
        </header>
        <Input handleSubmit={this.parseEmails.bind(this)} />

        {() => {
          if (this.state.chunks.length > 0) {
            return <h2 style={{ paddingTop: "30px" }}>{this.state.chunks.length} herds</h2>
          }
        }()}

        {() => {
          if (this.state.errors.length > 0) {
            return <h3>{this.state.errors.length} bandits</h3>
          }
        }()}

        <div className="bg-danger">
          {this.state.errors.map((error, i) => {
            return <p style={{ paddingLeft: "10px" }}>{error}</p>
          })}
        </div>


        {this.state.chunks.map((chunk, i) => {
          return <Output emails={chunk} key={i} chunkNum={i} />
        })}

      </div>
    );
  }
}
