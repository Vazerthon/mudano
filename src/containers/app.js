import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/App';
import { actions } from '../state/actions/app';

const mapStateToProps = ({ app: { users, user, timeline } }) => ({
  users,
  user: users.find(u => u.userId === user.userId),
  timeline,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(actions.loadData()),
  login: () => dispatch(actions.login('Paul Vallis', '555')),
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
