import {
  PlaidAccountDetail,
  RecentTransaction,
  UnitAccount,
} from 'src/types/API';

export interface IBankingState {
  step: string;
  podSettingsUpdated: boolean;
  recentTransactions?: RecentTransaction[];
  plaidAccounts?: PlaidAccountDetail[];
  selectedAccount?: PlaidAccountDetail;
  transferAmount?: string;
  totalBalance?: number;
  spendingAccount?: UnitAccount;
  investmentsAccount?: UnitAccount;
  savingsAccount?: UnitAccount;
  balanceHistory?: UnitAccount[];
  transactionHistory?: UnitAccount[];
  unitVerificationToken?: string;
  unitVerificationCodeValid?: boolean;
  unitToken?: string;
  unitTokenExpiration?: number;
}
