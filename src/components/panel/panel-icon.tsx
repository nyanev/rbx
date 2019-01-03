import classNames from "classNames";
import * as React from "react";

import { forwardRefAs, Generic, HelpersProps } from "src/base";

export type PanelIconProps = HelpersProps;

export const PanelIcon = forwardRefAs<PanelIconProps, "span">(
  ({ className, ...rest }, ref) => (
    <Generic
      className={classNames("panel-icon", className)}
      ref={ref}
      {...rest}
    />
  ),
  { as: "span" },
);
