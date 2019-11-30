import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {

    if (!this.props.stream){
      return <div>Loading...</div>
    }

    console.log({ props: this.props });
    //console.log({ state: this.state });
  return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
 // console.log({ otherState: state });
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
