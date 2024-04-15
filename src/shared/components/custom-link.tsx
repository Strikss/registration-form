import { Link, SxProps, Theme } from '@mui/material';
import { forwardRef } from 'react';
import { Link as ReactRouterDomLink } from 'react-router-dom';

type LinkProps = React.ComponentProps<typeof Link>;

interface CustomLinkProps extends LinkProps {
  to: string;
  isExternal?: boolean;
}

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ children, to, isExternal, ...rest }, ref) => {
    const sx: SxProps<Theme> = { textDecoration: 'none', ...rest.sx };

    return rest?.target === '_blank' || isExternal ? (
      <Link href={to ?? rest.href} {...rest} sx={sx} ref={ref}>
        {children}
      </Link>
    ) : (
      <Link component={ReactRouterDomLink} to={to ?? rest.href} {...rest} sx={sx} ref={ref}>
        {children}
      </Link>
    );
  },
);

export default CustomLink;
