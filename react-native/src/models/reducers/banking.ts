import {PlaidAccountDetail, RecentTransaction} from 'src/types/API';

export interface IBankingState {
  step: string;
  podSettingsUpdated: boolean;
  recentTransactions?: RecentTransaction[];
  accounts?: PlaidAccountDetail[];
  selectedAccount?: PlaidAccountDetail;
  transferAmount?: string;
}
