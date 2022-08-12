import {IBankingState} from 'src/models/reducers/banking';
import { IEvents } from 'src/models/reducers/events';
import { ILearns } from 'src/models/reducers/learns';
import { ILearnStatusState } from 'src/models/reducers/learnStatus';
import { ILearnStatuses } from 'src/models/reducers/learnStatuses';
import {ILoading} from 'src/models/reducers/loading';
import {ILoginState} from 'src/models/reducers/login';
import {IOnboardingState} from 'src/models/reducers/onboarding';
import { IRewards } from 'src/models/reducers/rewards';
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
  learnStatusReducer: ILearnStatusState;
  learnStatusesReducer: ILearnStatuses;
  learnsReducer: ILearns;
  eventsReducer: IEvents;
  rewardsReducer: IRewards;
}
