import { connectWithLifecycle } from 'react-lifecycle-component';
import App from '../components/App';
import { actions } from '../state/actions/app';

const mapStateToProps = ({ app }) => ({
  user: app.user,
  stagedEntry: app.stagedEntry,
  showEntryMaker: app.showEntryMaker,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(actions.loadData()),
  login: () => dispatch(actions.login('Paul Vallis', '555')),
  stageNewEntry: entry => dispatch(actions.stageNewEntry(entry)),
  submitEntry: (userId, entry) => dispatch(actions.submitEntry(userId, entry)),
  saveEntries: () => dispatch(actions.saveEntries()),
  toggleEntryMaker: () => dispatch(actions.toggleEntryMaker()),
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
