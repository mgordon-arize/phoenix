import { Theme, css } from "@emotion/react";

export const resizeHandleCSS = (theme: Theme) => css`
  transition: 250ms linear background-color;
  background-color: ${theme.colors.gray500};
  --px-resize-handle-size: 2px;
  outline: none;
  &[data-panel-group-direction="vertical"] {
    height: var(--px-resize-handle-size);
  }
  &[data-panel-group-direction="horizontal"] {
    width: var(--px-resize-handle-size);
  }

  &:hover {
    background-color: ${theme.colors.arizeLightBlue};
  }
`;
