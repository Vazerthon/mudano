import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/app';
import { actions } from '../state/actions/app';

const mapStateToProps = ({ app }) => ({
  users: app.users,
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
