import { Fragment, memo } from 'react';

import GroupCards from './ui/GroupCards';
import GroupHeader from './ui/GroupHeader';

const GroupPanel = () => (
  <Fragment>
    <GroupHeader />
    <GroupCards />
  </Fragment>
);

export default memo(GroupPanel);
