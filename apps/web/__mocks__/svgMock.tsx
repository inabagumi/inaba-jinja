import { type FC } from 'react'

type Props = Omit<JSX.IntrinsicElements['svg'], 'ref'>

const SvgMock: FC<Props> = (props) => <svg data-testid="svg-mock" {...props} />

export default SvgMock
