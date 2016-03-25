import React from 'react';

export default class Input extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <textarea
            name="emails"
            className="form-control"
            rows="10"
            placeholder="Paste in your emails..."
          />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }
}
