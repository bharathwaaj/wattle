import type * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: the one wattle action per view. secondary (default): everything else. ghost: low-emphasis, toolbars. danger: destructive. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** md is 40px tall (default), sm is 32px. */
  size?: 'md' | 'sm';
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible label, always provide one. */
  label?: React.ReactNode;
  /** Helper text under the field, in ink-muted. */
  hint?: React.ReactNode;
  /** Error message; sets aria-invalid and a danger border. */
  error?: React.ReactNode;
}
export declare function Input(props: InputProps): React.ReactElement;

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render, default section. */
  as?: keyof JSX.IntrinsicElements;
  /** Small uppercase overline above the title. */
  eyebrow?: React.ReactNode;
  /** Card title, set in Fraunces. */
  title?: React.ReactNode;
  /** Actions row under a hairline, usually Buttons. */
  footer?: React.ReactNode;
  /** Ink border for a chosen card in a selectable list. */
  selected?: boolean;
}
export declare function Card(props: CardProps): React.ReactElement;

declare global { interface Window { Wattle: { Button: typeof Button; Input: typeof Input; Card: typeof Card } } }
