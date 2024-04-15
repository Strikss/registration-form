import { Button, IconButton } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import CustomLink from './custom-link';

type ButtonProps = React.ComponentProps<typeof Button>;

export interface CustomButtonProps extends ButtonProps {
  startIconMargin?: string;
  endIconMargin?: string;
  iconOnly?: boolean;
  fontSize?: number | string;
  target?: React.HTMLAttributeAnchorTarget;
}

const CustomButton: FC<PropsWithChildren<CustomButtonProps>> = ({
  children,
  iconOnly,
  startIconMargin,
  endIconMargin,
  fontSize = 16,
  ...rest
}) => {
  return iconOnly ? (
    <IconButton
      LinkComponent={CustomLink}
      disableRipple
      {...rest}
      sx={{ height: 'fit-content', ...rest.sx }}
    >
      {children}
    </IconButton>
  ) : (
    <Button
      LinkComponent={CustomLink}
      sx={{
        '& .MuiButton-startIcon': {
          marginRight: startIconMargin,
        },
        '& .MuiButton-endIcon': {
          marginLeft: endIconMargin,
        },
        fontSize,
        ...rest.sx,
      }}
      disableRipple
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
