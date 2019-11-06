import Panel from '../Panel'

const PanelFiles = props => (
  <Panel
    heading='Files'
    height={props.windowDimensions.height / 3 - props.panelMargin / 3 * 4}
    windowDimensions={props.windowDimensions}
    x={props.windowDimensions.width - 400 - props.panelMargin}
    y={props.windowDimensions.height / 3 * 2 + props.panelMargin / 3}
  >
    <Heading> Files Panel Overview </Heading>
    
    <Overview> (Post-MVP) Images, videos, documents, and other files can be stored and shared via the Files Panel. </Overview>

    <Heading> Documents </Heading>

    <Overview> A document is a realtime collaborative text file (essentially a simple version of Google Docs) for taking notes, coordinating logistics, drafting statements, recording meeting minutes, and so on. </Overview>
  </Panel>
)

const Heading = styled.h1`
  font-size: 1.25rem;
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;
`

const Overview = styled.p`
  margin: 1rem;
  margin-bottom: 0;
`

export default PanelFiles
