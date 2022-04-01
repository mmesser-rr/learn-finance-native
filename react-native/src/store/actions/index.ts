// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';
import * as bankingActions from './bankingActions';
import * as userActions from './userActions';
import * as wyreActions from './wyreActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  themeActions,
  bankingActions,
  userActions,
  wyreActions,
);
