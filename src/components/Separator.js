import styled from 'styled-components'

let SeparatorDot = styled.span`
  margin-right: .5rem;
  margin-left: .5rem;
  margin-bottom: .5rem;
`

function Separator() {
  return (
    <SeparatorDot>
      .
    </SeparatorDot>
  )
}

export default Separator