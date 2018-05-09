'use strict';

import debounceRender from 'react-debounce-render';
import ManagerView from 'views/ManagerView';

export default debounceRender(ManagerView, 0, {leading: false});