/*
 * combines all existing reducers
 */
import * as loadingReducer from './loadingReducer';
// import * as loginReducer from './loginReducer';
import * as themeReducer from './themeReducer';
import * as bankingReducer from './bankingReducer';
import * as onboardingReducer from './onboardingReducer';
import * as userReducer from './userReducer';
import * as wyreReducer from './wyreReducer';
import * as learnStatusReducer from './learnStatusReducer';

export default Object.assign(
  // loginReducer,
  loadingReducer,
  themeReducer,
  bankingReducer,
  onboardingReducer,
  userReducer,
  wyreReducer,
  learnStatusReducer
);
