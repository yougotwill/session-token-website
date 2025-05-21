'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import { useDebounce } from '@uidotdev/usehooks';
import {
  Fragment,
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/utils';
import { QuestionIcon } from '../Icons/QuestionIcon';
import { TriangleAlertIcon } from '../Icons/TriangleAlertIcon';
import { ReactPortal } from '../ReactPortal/ReactPortal';

const TooltipRoot = PopoverPrimitive.Root;

const TooltipTrigger = forwardRef<
  ElementRef<typeof PopoverPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Trigger ref={ref} className={cn('cursor-pointer', className)} {...props} />
));

TooltipTrigger.displayName = PopoverPrimitive.Trigger.displayName;

const TooltipContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    side="top"
    className={cn(
      'fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 animate-in border-px text-session-white data-[state=closed]:animate-out z-50 max-w-[90svw] flex-wrap overflow-hidden text-wrap rounded-xl border border-[#1C2624] bg-black bg-opacity-50 px-4 py-2 text-sm shadow-xl outline-none focus-visible:outline-none md:max-w-xl',
      className
    )}
    {...props}
  ></PopoverPrimitive.Content>
));
TooltipContent.displayName = PopoverPrimitive.Content.displayName;

type TooltipProps = ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
  disableOnHover?: boolean;
  tooltipContent: ReactNode;
  triggerProps?: Omit<ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>, 'children'>;
  contentProps?: Omit<ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>, 'children'>;
  putContentInPortal?: boolean;
};

const Tooltip = forwardRef<ElementRef<typeof PopoverPrimitive.Content>, TooltipProps>(
  (
    {
      tooltipContent,
      children,
      contentProps,
      triggerProps,
      disableOnHover,
      putContentInPortal,
      ...props
    },
    ref
  ) => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const debouncedHover = useDebounce(hovered, 150);

    const handleMouseEnter = () => {
      if (disableOnHover) {
        return;
      }
      setHovered(true);
    };

    const handleMouseLeave = () => {
      if (disableOnHover) {
        return;
      }
      if (!clicked) {
        setHovered(false);
      }
    };

    const handleClick = () => {
      setClicked((prev) => !prev);
    };

    const Container = putContentInPortal ? ReactPortal : Fragment;

    return (
      <TooltipRoot open={debouncedHover || clicked} onOpenChange={setHovered} {...props}>
        <TooltipTrigger
          asChild
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          {...triggerProps}
        >
          {children}
        </TooltipTrigger>
        <Container>
          <TooltipContent
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={ref}
            {...contentProps}
          >
            {tooltipContent}
          </TooltipContent>
        </Container>
      </TooltipRoot>
    );
  }
);

Tooltip.displayName = 'Tooltip';

const UnderlinedTooltip = forwardRef<ElementRef<typeof PopoverPrimitive.Content>, TooltipProps>(
  ({ children, ...props }, ref) => (
    <Tooltip {...props} ref={ref}>
      <span className="underline decoration-dotted">{children}</span>
    </Tooltip>
  )
);

UnderlinedTooltip.displayName = 'UnderlinedTooltip';

const AlertTooltip = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  Omit<TooltipProps, 'children'> & { iconClassName?: string }
>(({ iconClassName, ...props }, ref) => (
  <Tooltip {...props} ref={ref}>
    <TriangleAlertIcon className={cn('stroke-warning h-4 w-4', iconClassName)} />
  </Tooltip>
));

AlertTooltip.displayName = 'AlertTooltip';

const HintTooltip = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <Tooltip ref={ref} tooltipContent={children}>
      <div className={cn('cursor-pointer', className)} {...props}>
        <QuestionIcon className="h-3.5 w-3.5 fill-primary" />
      </div>
    </Tooltip>
  )
);
HintTooltip.displayName = 'InfoTooltip';

export {
  AlertTooltip,
  HintTooltip,
  Tooltip,
  TooltipContent,
  TooltipRoot,
  TooltipTrigger,
  UnderlinedTooltip,
};
