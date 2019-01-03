import classNames from "classNames";
import * as React from "react";

import { forwardRefAs, Generic, HelpersProps } from "src/base";

export type NavbarStartProps = HelpersProps;

export const NavbarStart = forwardRefAs<NavbarStartProps, "div">(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("navbar-start", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "div" },
);
