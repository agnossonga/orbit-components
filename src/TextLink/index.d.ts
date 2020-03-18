// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/TextLink";

export { TextLink, TextLink as default };

declare namespace TextLink {
  type Type = "primary" | "secondary";

  interface Props extends Common.Global {
    readonly children: React.ReactNode;
    readonly href?: string;
    readonly icon?: React.ReactNode;
    readonly onClick?: Common.Event<React.SyntheticEvent<HTMLLinkElement>>;
    readonly external?: boolean;
    readonly type?: Type;
    readonly size?: Common.Size;
    readonly rel?: string;
    readonly tabIndex?: string;
    readonly component?: Common.Component;
  }
}

declare class TextLink extends React.Component<TextLink.Props> {}