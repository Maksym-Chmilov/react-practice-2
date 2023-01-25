import { User } from 'components/User/User';
import PropTypes from 'prop-types';

export const UsersList = ({ users, delUser, changeStatus }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <User user={user} delUser={delUser} changeStatus={changeStatus} />
          </li>
        );
      })}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  delUser: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
};
