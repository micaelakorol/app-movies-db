export const ExternalLink = ({ href, label, children, className }) => {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label={label} className={className}>
        {children}
      </a>
    );
  };