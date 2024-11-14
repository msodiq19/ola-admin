export interface Transaction {
  transactionId: string;
  transactionType: string;
  dateAndTime: string;
  amount: string;
  userName: string;
  vendorName: string;
  exchangeRate: string;
  status: string;
}

export interface UserInfo {
  userId: string;
  name: string;
  emailAddress: string;
  verification: string;
  lastLogin: string;
  totalTransactions: number;
  escrowStatus: string;
  flagged: string;
}