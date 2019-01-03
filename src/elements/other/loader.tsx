import classNames from "classNames";
import * as React from "react";

import { forwardRefAs, Generic, HelpersProps } from "src/base";

export type LoaderProps = HelpersProps;

export const Loader = forwardRefAs<LoaderProps, "div">(
  ({ className, ...rest }, ref) => (
    <Generic className={classNames("loader", className)} ref={ref} {...rest} />
  ),
  {
    as: "div",
    children: false,
  },
);
