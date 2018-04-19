'use strict';

import React from 'react';
import ManagerContainerView from './ManagerContainerView';
import ManagerDescriptionInputView from './ManagerDescriptionInputView';
import ManagerRateInputView from './ManagerRateInputView';
import ManagerButtonView from './ManagerButtonView';

export default props => (
  <ManagerContainerView {...props}>
    <ManagerDescriptionInputView {...props} />
    <ManagerRateInputView        {...props} />
    <ManagerButtonView           {...props} />
  </ManagerContainerView>
);