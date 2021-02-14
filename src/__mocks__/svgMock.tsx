import type { VFC } from 'react'

type Props = Omit<JSX.IntrinsicElements['svg'], 'ref'>

const SvgMock: VFC<Props> = (props) => <svg data-testid="svg-mock" {...props} />

export default SvgMock
