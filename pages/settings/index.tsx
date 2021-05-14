import { Redirect } from '../../utils/react/redirect';

const index = () => {
  return (
    <Redirect
      type='replace'
      url='/settings/settings'
      tooltip='Redirecting...'
    />
  );
};

export default index;
