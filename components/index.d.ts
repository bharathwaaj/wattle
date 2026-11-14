import type * as React from 'react';

/** The 24 starter icons (Lucide v0.460.0). */
export type IconName = 'search' | 'plus' | 'x' | 'check' | 'chevron-down' | 'chevron-right' | 'arrow-left' | 'arrow-right' | 'menu' | 'settings' | 'user' | 'bell' | 'house' | 'book-open' | 'calendar' | 'trash-2' | 'pencil' | 'upload' | 'download' | 'info' | 'triangle-alert' | 'eye' | 'log-out' | 'filter';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Which icon to draw. */
  name: IconName;
  /** Size in px, default 24. */
  size?: number;
  /** Accessible name; only for icons that stand alone. Without it the icon is aria-hidden. */
  label?: string;
}
export declare function Icon(props: IconProps): React.ReactElement | null;
export declare namespace Icon { const names: IconName[]; }

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary: the one wattle action per view. secondary (default): everything else. ghost: low-emphasis, toolbars. danger: destructive. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** md is 40px tall (default), sm is 32px. */
  size?: 'md' | 'sm';
  /** Icon before the label: a Lucide name or a React node. With no children it makes an icon-only button; pass aria-label. */
  icon?: IconName | React.ReactNode;
  /** Icon after the label, e.g. 'arrow-right'. */
  iconEnd?: IconName | React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible label, always provide one. */
  label?: React.ReactNode;
  /** Helper text under the field, in ink-muted. */
  hint?: React.ReactNode;
  /** Error message; sets aria-invalid and a danger border. */
  error?: React.ReactNode;
  /** Decorative icon at the start of the field, e.g. 'search'. */
  icon?: IconName | React.ReactNode;
  /** Decorative icon at the end of the field, e.g. 'calendar'. */
  iconEnd?: IconName | React.ReactNode;
}
export declare function Input(props: InputProps): React.ReactElement;

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render, default section. */
  as?: keyof JSX.IntrinsicElements;
  /** Link target when as="a" (shortcut cards). */
  href?: string;
  /** Small uppercase overline above the title. */
  eyebrow?: React.ReactNode;
  /** Card title, set in Fraunces. */
  title?: React.ReactNode;
  /** Actions row under a hairline, usually Buttons. */
  footer?: React.ReactNode;
  /** Ink border for a chosen card in a selectable list. */
  selected?: boolean;
  /** Icon shown in a 40px circle above the eyebrow. */
  icon?: IconName | React.ReactNode;
}
export declare function Card(props: CardProps): React.ReactElement;

declare global { interface Window { Wattle: { Button: typeof Button; Input: typeof Input; Card: typeof Card; Icon: typeof Icon } } }
