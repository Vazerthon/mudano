import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/App';
import { actions } from '../state/actions/app';

const mapStateToProps = ({ app: { users, user, timeline, stagedEntry } }) => ({
  users,
  user: users.find(u => u.userId === user.userId),
  timeline,
  stagedEntry,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(actions.loadData()),
  login: () => dispatch(actions.login('Paul Vallis', '555')),
  stageNewEntry: entry => dispatch(actions.stageNewEntry(entry)),
  submitEntry: entry => dispatch(actions.submitEntry(entry)),
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  componentDidMount: () => {
    dispatchProps.loadData();
    dispatchProps.login();
  },
});

export default connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(App);
