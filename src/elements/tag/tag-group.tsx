import { cx } from "emotion";
import React from "react";

import { Generic } from "@/base";
import { ModifierProps } from "@/modifiers";

export type TagGroupModifierProps = Partial<{
  gapless: boolean;
}>;

export type TagGroupProps = Prefer<
  ModifierProps & TagGroupModifierProps,
  React.HTMLAttributes<HTMLSpanElement>
>;

export const TagGroup = React.forwardRef<HTMLDivElement, TagGroupProps>(
  (props, ref) => {
    const { gapless, ...rest } = props;
    rest.className = cx("tags", rest.className, {
      "has-addons": gapless,
    });
    return <Generic<"span"> as="span" ref={ref} {...rest} />;
  },
);

TagGroup.defaultProps = { gapless: false };