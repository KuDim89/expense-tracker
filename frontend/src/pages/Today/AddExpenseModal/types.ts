export interface AddExpenseModalProps {
  isOpen: boolean;
  toggleModal: (state: boolean) => void;
}

export interface AddExpenseFormData {
  // category?: string;
  // cost: number;
  date: string;
  // expenseName: string;
}
