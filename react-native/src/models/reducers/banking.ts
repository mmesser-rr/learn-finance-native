import {
  PlaidAccountDetail,
  RecentTransaction,
  UnitAccount,
} from 'src/types/API';

export interface IBankingState {
  step: string;
  podSettingsUpdated: boolean;
  recentTransactions?: RecentTransaction[];
  accounts?: PlaidAccountDetail[];
  selectedAccount?: PlaidAccountDetail;
  transferAmount?: string;
  totalBalance?: number;
  spendingAccount?: UnitAccount;
  investmentsAccount?: UnitAccount;
  savingsAccount?: UnitAccount;
  balanceHistory?: UnitAccount[];
}
