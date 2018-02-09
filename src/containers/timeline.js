import { connect } from 'react-redux';
import Timeline from '../components/Timeline';

const mapStateToProps = ({ app }) => ({
  users: app.users,
  user: app.user,
  timeline: app.timeline,
});

export default connect(mapStateToProps)(Timeline);
