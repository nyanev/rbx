import { cx } from "emotion";
import React from "react";

import Element from "components/element";
import { ModifierProps } from "modifiers";
import { Colors } from "modifiers/colors";
import { noop } from "utils";

export type InputFileModifierProps = Partial<{
  boxed: boolean;
  className: string;
  color: Colors;
  fileName: boolean;
  fullwidth: boolean;
  icon: React.ReactElement<any>;
  label: string;
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  right: boolean;
  size: "small" | "medium" | "large";
  style: React.CSSProperties;
}>;

export type InputFileProps = ModifierProps &
  InputFileModifierProps &
  Partial<
    Omit<
      React.ComponentPropsWithoutRef<"input">,
      "color" | "size" | "unselectable"
    >
  >;

export interface InputFileState {
  filename?: string;
}

export default class InputFile extends React.PureComponent<
  InputFileProps,
  InputFileState
> {
  public static defaultProps = {
    fileName: true,
    label: "Choose a file...",
    onChange: noop,
  };

  public readonly state: InputFileState = { filename: undefined };

  public select = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    this.setState({
      filename: files && files.length > 0 ? files[0].name : undefined,
    });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  public render() {
    const {
      boxed,
      className,
      color,
      fileName,
      fullwidth,
      icon,
      label,
      name,
      onChange,
      right,
      size,
      style,
      unselectable,
      ...props
    } = this.props;

    const { filename } = this.state;

    return (
      <Element
        className={cx("file", className, {
          "has-name": !fileName,
          [`is-${size}`]: size,
          [`is-${color}`]: color,
          "is-boxed": boxed,
          "is-fullwidth": fullwidth,
          "is-right": right,
        })}
        style={style}
        unselectable={unselectable}
      >
        <label className="file-label">
          <input
            {...props}
            name={name}
            value=""
            type="file"
            className="file-input"
            onChange={this.select}
          />
          <span className="file-cta">
            {icon && <span className="file-icon">{icon}</span>}
            <span className="file-label">{label}</span>
          </span>
          {fileName && filename && (
            <span className="file-name">{filename}</span>
          )}
        </label>
      </Element>
    );
  }
}