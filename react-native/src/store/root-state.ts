import {IBankingState} from 'src/models/reducers/banking';
import {ILoading} from 'src/models/reducers/loading';
import {ILoginState} from 'src/models/reducers/login';
import {IOnboardingState} from 'src/models/reducers/onboarding';
import {IThemeState} from 'src/models/reducers/theme';
import {IUserState} from 'src/models/reducers/user';
import {IWyreState} from 'src/models/reducers/wyre';

export interface RootState {
  bankingReducer: IBankingState;
  loadingReducer: ILoading;
  loginReducer: ILoginState;
  onboardingReducer: IOnboardingState;
  themeReducer: IThemeState;
  userReducer: IUserState;
  wyreReducer: IWyreState;
}
