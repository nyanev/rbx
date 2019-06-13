import classNames from "classnames";
import PropTypes from "prop-types";

import {
  makePropTypesFactory,
  makeValidatingTransformFactory,
  TransformFunction,
} from "./factory";

export type OtherHelpersProps = Partial<{
  /** Removes any margin */
  marginless: boolean;
  /** Removes any padding */
  paddingless: boolean;
  /** Removes any radius */
  radiusless: boolean;
  /** Applies position: relative to the element */
  relative: boolean;
  /** Removes any shadow */
  shadowless: boolean;
  /** Prevents the text from being selectable */
  unselectable: boolean;
}>;

// Factories
export const makePropTypes = makePropTypesFactory(vars => ({
  marginless: PropTypes.bool,
  paddingless: PropTypes.bool,
  radiusless: PropTypes.bool,
  relative: PropTypes.bool,
  shadowless: PropTypes.bool,
  unselectable: PropTypes.bool,
}));

export const transform: TransformFunction<OtherHelpersProps> = props => {
  const {
    marginless,
    paddingless,
    radiusless,
    relative,
    shadowless,
    unselectable,
    ...rest
  } = props;
  rest.className = classNames(
    {
      "is-marginless": marginless,
      "is-paddingless": paddingless,
      "is-radiusless": radiusless,
      "is-relative": relative,
      "is-shadowless": shadowless,
      "is-unselectable": unselectable,
    },
    rest.className,
  );

  return rest;
};

export const makeValidatingTransform = makeValidatingTransformFactory(
  makePropTypes,
  transform,
);
