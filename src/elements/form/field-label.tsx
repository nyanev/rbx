import classNames from "classNames";
import * as PropTypes from "prop-types";
import * as React from "react";

import { forwardRefAs, Generic, HelpersProps } from "src/base";
import { tuple } from "src/utils";

export const FILED_LABEL_SIZES = tuple("small", "normal", "medium", "large");
export type FieldLabelSizes = (typeof FILED_LABEL_SIZES)[number];

export type FieldLabelModifierProps = Partial<{
  size: FieldLabelSizes;
}>;

export type FieldLabelProps = HelpersProps & FieldLabelModifierProps;

const propTypes = {
  size: PropTypes.oneOf(FILED_LABEL_SIZES),
};

export const FieldLabel = Object.assign(
  forwardRefAs<FieldLabelProps, "div">(
    ({ className, size, ...rest }, ref) => (
      <Generic
        className={classNames(
          "field-label",
          { [`is-${size}`]: size },
          className,
        )}
        ref={ref}
        {...rest}
      />
    ),
    { as: "div" },
  ),
  { propTypes },
);
