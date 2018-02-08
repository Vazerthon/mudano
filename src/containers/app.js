import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/App';
import { actions } from '../state/actions/app';

const mapStateToProps = ({ app: { users, timeline } }) => ({
  users,
  timeline,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(actions.loadData()),
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  componentDidMount: () => dispatchProps.loadData(),
});

export default connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App);
