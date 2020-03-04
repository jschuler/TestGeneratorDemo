import * as React from 'react';

export enum MyAlertVariant {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  default = 'default'
}

export interface MyAlertProps {
  /** string literals */
  variant?: 'success' | 'danger' | 'warning' | 'info' | 'default';
  /** boolean */
  isInline?: boolean;
  /** required: ReactNode */
  title: React.ReactNode;
  /** ReactNode */
  children?: React.ReactNode;
  /** string */
  className?: string;
  /** function */
  onClose?: () => void;
}

const MyAlert: React.FunctionComponent<MyAlertProps> = ({
  variant = 'info',
  isInline = false,
  title,
  children = '',
  className = '',
  ...props
}: MyAlertProps) => (
  <div {...props} className={className}>
    <h4 className="alert-title">{title}</h4>
    {children && <div className="alert-description">{children}</div>}
  </div>
);

export { MyAlert };
