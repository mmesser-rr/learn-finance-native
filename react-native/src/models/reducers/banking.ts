import {RecentTransaction} from 'src/types/API';

export interface IBankingState {
  step: string;
  podSettingsUpdated: boolean;
  recentTransactions?: RecentTransaction[];
}
