import type { VariantProps } from 'tailwind-variants';

import { colorVariants, dataFocusVisibleClasses } from '../utils';
import { tv } from '../utils/tv';

/**
 * Popover wrapper **Tailwind Variants** component
 *
 * const { base, backdrop, arrow } = popover({...})
 *
 * @example
 * <div>
 *  <div className={backdrop()} />
 *  <div className={base()}>
 *    // popover content
 *    <span className={arrow()} data-placement="top/bottom/left/right..." /> // arrow
 *  </div>
 * </div>
 */
const popover = tv({
  slots: {
    base: [
      'z-10',
      'relative',
      'inline-flex',
      'flex-col',
      'items-center',
      'justify-center',
      'box-border',
      'subpixel-antialiased',
      'px-4',
      'py-2',
      'outline-none',
      'box-border',
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    backdrop: ['hidden'],
    arrow: [
      'absolute',
      // top
      // bottom
      '[&>svg]:data-[placement=bottom]:rotate-180',
      // left
      '[&>svg]:data-[placement=left]:-rotate-90',
      // right
      '[&>svg]:data-[placement=right]:rotate-90',
    ],
  },
  variants: {
    size: {
      sm: { base: 'text-sm' },
      md: { base: 'text-base' },
      lg: { base: 'text-lg' },
    },
    color: {
      default: {
        base: 'bg-content1',
        arrow: '[&>svg]:fill-content1',
      },
      foreground: {
        base: colorVariants.solid.foreground,
        arrow: '[&>svg]:fill-foreground',
      },
      primary: {
        base: colorVariants.solid.primary,
        arrow: '[&>svg]:fill-primary',
      },
      secondary: {
        base: colorVariants.solid.secondary,
        arrow: '[&>svg]:fill-secondary',
      },
      success: {
        base: colorVariants.solid.success,
        arrow: '[&>svg]:fill-success',
      },
      warning: {
        base: colorVariants.solid.warning,
        arrow: '[&>svg]:fill-warning',
      },
      danger: {
        base: colorVariants.solid.danger,
        arrow: '[&>svg]:fill-danger',
      },
    },
    radius: {
      none: { base: 'rounded-none' },
      sm: { base: 'rounded-small' },
      md: { base: 'rounded-medium' },
      lg: { base: 'rounded-large' },
      full: { base: 'rounded-full' },
    },
    shadow: {
      sm: {
        base: 'shadow-small',
      },
      md: {
        base: 'shadow-medium',
      },
      lg: {
        base: 'shadow-large',
      },
    },
  },
  defaultVariants: {
    color: 'default',
    radius: 'lg',
    size: 'md',
    shadow: 'md',
  },
});

export type PopoverVariantProps = VariantProps<typeof popover>;
export type PopoverSlots = keyof ReturnType<typeof popover>;

export { popover };
