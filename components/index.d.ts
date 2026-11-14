import type * as React from 'react';

/** The 30 starter icons (Lucide v0.460.0). */
export type IconName = 'search' | 'plus' | 'x' | 'check' | 'chevron-down' | 'chevron-right' | 'arrow-left' | 'arrow-right' | 'menu' | 'settings' | 'user' | 'bell' | 'house' | 'book-open' | 'calendar' | 'trash-2' | 'pencil' | 'upload' | 'download' | 'info' | 'triangle-alert' | 'eye' | 'log-out' | 'filter' | 'clock' | 'star' | 'heart' | 'bookmark' | 'link' | 'rotate-ccw';

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
  /** Hover/focus effect: nudge slides the trailing icon, sweep fills with ink from the left. */
  effect?: 'nudge' | 'sweep';
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
  /** Full-bleed image or illustration across the top of the card. */
  media?: React.ReactNode;
  /** empty: dashed border on a transparent ground, centred; for empty states. */
  variant?: 'default' | 'empty';
  /** Set false to drop the hairline above the footer and separate it with space instead. */
  divider?: boolean;
  /** Ink border for a chosen card in a selectable list. */
  selected?: boolean;
  /** Icon shown in a 40px circle above the eyebrow. */
  icon?: IconName | React.ReactNode;
}
export declare function Card(props: CardProps): React.ReactElement;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** neutral (default) for categories, strong for the one important thing, danger for problems. */
  tone?: 'neutral' | 'strong' | 'danger';
  /** Optional 12px icon before the text. */
  icon?: IconName | React.ReactNode;
}
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface ActionButtonProps {
  label: React.ReactNode; icon?: IconName | React.ReactNode;
  doneLabel: React.ReactNode; doneIcon?: IconName | React.ReactNode;
  /** morph (default): shrink to spinner and grow back; flip: icon turns over; swap: in-place swap. */
  animation?: 'morph' | 'flip' | 'swap';
  variant?: 'primary' | 'secondary' | 'ghost'; doneVariant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'sm';
  /** The work; return a Promise. Rejecting returns the button to idle. */
  onAction?: (e: React.MouseEvent) => unknown;
  /** Return to idle after this many ms (e.g. Copy link). */
  resetAfter?: number; loadingLabel?: string; className?: string;
  /** Latch: clicking the done state returns to idle and calls onUndo. */
  undoable?: boolean; onUndo?: (e: React.MouseEvent) => void; undoHint?: string;
}
export declare function ActionButton(props: ActionButtonProps): React.ReactElement;

export interface ProgressButtonProps {
  label: React.ReactNode; icon?: IconName | React.ReactNode;
  runningLabel?: string; doneLabel?: React.ReactNode; errorLabel?: React.ReactNode;
  /** Call setProgress(0-100) as work goes; resolve or reject when finished. */
  onAction?: (setProgress: (p: number) => void) => Promise<unknown>;
  variant?: 'primary' | 'secondary' | 'ghost'; size?: 'md' | 'sm'; className?: string;
}
export declare function ProgressButton(props: ProgressButtonProps): React.ReactElement;

export interface HoldButtonProps {
  label?: React.ReactNode; doneLabel?: React.ReactNode;
  /** Hold time in ms, default 1000. */
  duration?: number; onConfirm?: () => void; size?: 'md' | 'sm'; hintId?: string; className?: string;
}
export declare function HoldButton(props: HoldButtonProps): React.ReactElement;

export interface UndoButtonProps {
  label?: React.ReactNode; doneLabel?: React.ReactNode; undoLabel?: React.ReactNode;
  /** Undo window in ms, default 5000. */
  duration?: number;
  onDelete?: () => void; onUndo?: () => void; onCommit?: () => void;
  size?: 'md' | 'sm'; className?: string;
}
export declare function UndoButton(props: UndoButtonProps): React.ReactElement;

export interface ReactionButtonProps {
  kind?: 'star' | 'heart' | 'bookmark';
  /** Accessible name; the count is appended. */
  label: string;
  count?: number; defaultPressed?: boolean; onChange?: (pressed: boolean) => void; className?: string;
}
export declare function ReactionButton(props: ReactionButtonProps): React.ReactElement;

export interface IconDiscProps { icon: IconName | React.ReactNode; tone?: 'neutral' | 'strong' | 'danger'; size?: number; label?: string; className?: string; }
export declare function IconDisc(props: IconDiscProps): React.ReactElement;
export interface DateBlockProps { date?: string | number | Date; month?: string; day?: number | string; label?: string; className?: string; }
export declare function DateBlock(props: DateBlockProps): React.ReactElement;
export interface MetaListProps { items: { icon?: IconName | React.ReactNode; text: React.ReactNode }[]; className?: string; }
export declare function MetaList(props: MetaListProps): React.ReactElement;
export interface ProgressProps { value: number; max?: number; label: string; showValue?: boolean; className?: string; }
export declare function Progress(props: ProgressProps): React.ReactElement;
export interface ChecklistProps { items: { label: React.ReactNode; done?: boolean }[]; done?: boolean[]; onChange?: (done: boolean[]) => void; label?: string; className?: string; }
export declare function Checklist(props: ChecklistProps): React.ReactElement;
export interface AvatarProps { name: string; initials?: string; size?: number; className?: string; }
export declare function Avatar(props: AvatarProps): React.ReactElement;
export interface StatProps { value: React.ReactNode; unit?: React.ReactNode; label?: React.ReactNode; trend?: React.ReactNode; trendDirection?: 'up' | 'down' | 'flat'; className?: string; }
export declare function Stat(props: StatProps): React.ReactElement;
export interface SparklineProps { data: number[]; height?: number; label?: string; className?: string; }
export declare function Sparkline(props: SparklineProps): React.ReactElement | null;
export interface SeatMapProps { total: number; taken: number; columns?: number; mine?: boolean; label?: string; className?: string; }
export declare function SeatMap(props: SeatMapProps): React.ReactElement;
export interface CountBadgeProps { count: number; max?: number; label?: string; showZero?: boolean; className?: string; }
export declare function CountBadge(props: CountBadgeProps): React.ReactElement | null;
export interface StatusProps { tone?: 'neutral' | 'live' | 'active' | 'done' | 'danger'; children: React.ReactNode; className?: string; }
export declare function Status(props: StatusProps): React.ReactElement;
export interface TagProps { children: React.ReactNode; onRemove?: () => void; selected?: boolean; onClick?: () => void; label?: string; className?: string; }
export declare function Tag(props: TagProps): React.ReactElement;

declare global { interface Window { Wattle: { Button: typeof Button; Input: typeof Input; Card: typeof Card; Icon: typeof Icon; Badge: typeof Badge; ActionButton: typeof ActionButton; ProgressButton: typeof ProgressButton; HoldButton: typeof HoldButton; UndoButton: typeof UndoButton; ReactionButton: typeof ReactionButton; IconDisc: typeof IconDisc; DateBlock: typeof DateBlock; MetaList: typeof MetaList; Progress: typeof Progress; Checklist: typeof Checklist; Avatar: typeof Avatar; Stat: typeof Stat; Sparkline: typeof Sparkline; SeatMap: typeof SeatMap; CountBadge: typeof CountBadge; Status: typeof Status; Tag: typeof Tag } } }
