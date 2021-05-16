export interface TooltipProps {
  className?: string;
  tooltip: string;
  flow?: string;
  children: React.ReactChildren;
}

const Tooltip = ({ children, tooltip, flow, className }: TooltipProps) => {
  return (
    <Span tooltip={tooltip} flow={flow}>
      {children}
    </Span>
  );
};

// Do avoid an error
export const Span = ({ children, ...props }) => {
  return <span children={children} {...props} />;
};

export default Tooltip;
