import classNames from "classNames";
import * as PropTypes from "prop-types";
import * as React from "react";

import { forwardRefAs, Generic, HelpersProps } from "src/base";

export type TabModifierProps = Partial<{
  active: boolean;
  style: React.CSSProperties;
}>;

export type TabProps = HelpersProps & TabModifierProps;

const propTypes = {
  active: PropTypes.bool,
  style: PropTypes.object,
};

export const Tab = Object.assign(
  forwardRefAs<TabProps, "a">(
    ({ active, style, ...rest }, ref) => (
      <li style={style} className={classNames({ "is-active": active })}>
        <Generic ref={ref} {...rest} />
      </li>
    ),
    { as: "a" },
  ),
  { propTypes },
);
