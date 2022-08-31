import { Fragment, memo } from 'react';
import { IGroupPanel } from './lib/types';

import GroupCards from './ui/GroupCards';
import GroupHeader from './ui/GroupHeader';

const GroupPanel = (props: IGroupPanel) => {
  const { isLearning } = props;

  return (
    <Fragment>
      <GroupHeader isLearning={isLearning} />
      <GroupCards />
    </Fragment>
  );
};

export default memo(GroupPanel);
