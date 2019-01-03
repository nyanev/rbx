import classNames from "classNames";
import * as PropTypes from "prop-types";
import * as React from "react";

import { forwardRefAs, Generic, HelpersProps } from "src/base";

export type ListItemModifierProps = Partial<{
  active: boolean;
}>;

export type ListItemProps = HelpersProps & ListItemModifierProps;

const propTypes = {
  active: PropTypes.bool,
};

export const ListItem = Object.assign(
  forwardRefAs<ListItemProps, "a">(
    ({ active, className, ...rest }, ref) => (
      <Generic
        className={classNames("list-item", { "is-active": active }, className)}
        ref={ref}
        {...rest}
      />
    ),
    { as: "a" },
  ),
  { propTypes },
);
