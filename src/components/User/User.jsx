import PropTypes from 'prop-types';
import { Text, NativeText, Btn } from './User.styled';

export const User = ({ user: { name, email, id, hasJob }, delUser, changeStatus }) => {
  const userBiz = email.endsWith('biz');
  return (
    <>
      <Text>
        Name: <NativeText>{name}</NativeText>
      </Text>
      <Text>
        Email: <NativeText isRed={userBiz}>{email}</NativeText>
      </Text>
      <Text>Has Job: { hasJob + " "}</Text>
      <Btn onClick={() => delUser(id)}>Delete</Btn>
      <Btn onClick={() => changeStatus(id)}>Change job status</Btn>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    hasJob: PropTypes.bool.isRequired
  }).isRequired,
};
