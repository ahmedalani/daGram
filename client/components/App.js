import { connect } from "react-redux";
import Main from "./Main";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

const App = connect(mapStateToProps)(Main);

export default App;
