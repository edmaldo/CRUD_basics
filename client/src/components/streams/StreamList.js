import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchAllStreams } from "../../actions"

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchAllStreams()
  }

  // Helper Function
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      )
    }
  }

  // Helper Method
  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }

  renderStreamList() {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" style={{ padding: "15px" }} key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon video" />
          <div className="content">
            <Link
              to={`/streams/${stream.id}`}
              className="header"
              style={{ margin: "1rem 0", fontSize: "1.3rem" }}
            >
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h2 style={{ color: "#a30000" }}>Choose a Stream: </h2>
        <div className="ui celled list">{this.renderStreamList()}</div>
        {this.renderCreateButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { fetchAllStreams })(StreamList)
