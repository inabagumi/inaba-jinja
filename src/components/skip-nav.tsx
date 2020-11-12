import {
  SkipNavLink as SkipNavLinkImpl,
  SkipNavLinkProps
} from '@reach/skip-nav'
import type { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --reach-skip-nav: 1;
  }
`

const StyledSkipNavLink = styled(SkipNavLinkImpl)`
  /**
   * see https://github.com/reach/reach-ui/blob/v0.11.2/packages/skip-nav/styles.css
   */
  border: 0;
  clip: rect(0 0 0 0);
  color: #fff;
  height: 1px;
  line-height: 1;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  text-decoration: none;
  width: 1px;

  :focus {
    background-color: var(--ij-color-primary);
    clip: auto;
    height: auto;
    left: 10px;
    padding: 1rem;
    position: fixed;
    top: 10px;
    width: auto;
    z-index: 1;
  }
`

export const SkipNavLink: FC<SkipNavLinkProps> = (props) => (
  <>
    <GlobalStyle />

    <StyledSkipNavLink {...props} />
  </>
)

export { SkipNavContent } from '@reach/skip-nav'
