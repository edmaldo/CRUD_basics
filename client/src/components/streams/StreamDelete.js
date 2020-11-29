import React from'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchOneStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchOneStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to='/' className="ui button">Cancel</Link>
      </React.Fragment>
    );
  }

  renderDeleteContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }

    return `You will delete: ${this.props.stream.title}`
  }

  render(){
    return (
      <Modal
        title="Delete Stream"
        content={this.renderDeleteContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(
  mapStateToProps,
  { fetchOneStream, deleteStream }
)(StreamDelete);