import { InputHTMLAttributes } from 'react';

export interface AptModalPopupContainerInterface {
  isShown: boolean;
  children: React.ReactNode;
  onClose: () => void;
}
export interface AptTextInputInterface
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'type' | 'id' | 'autoComplete'
  > {
  className?: string;
  label?: string;
  postFix?: string | React.ReactNode;
  onResetAll?: () => void;
}

export interface AptHeaderInterface {
  headerTitle?: string;
}
