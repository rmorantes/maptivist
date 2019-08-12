import Panel from 'src/components/Panel'

const PageIndex_PanelDocs = props => (
  <Panel label='Files'>
    <Heading> Overview </Heading>

    <Overview> (Post-MVP) Images, videos, documents, and other files can be stored and shared via the Files Panel. </Overview>

    <Heading> Documents </Heading>

    <Overview> A document is a realtime collaborative text file (essentially a simple version of Google Docs) for taking notes, coordinating logistics, drafting statements, recording meeting minutes, and so on. </Overview>
  </Panel>
)


const Heading = styled.h1`
  font-size: 1.25rem;
  padding: 0.5rem;
  text-align: center;
  margin-top: 1rem;
`

const Overview = styled.p`
  margin: 1rem;
  margin-bottom: 0;
`

export default PageIndex_PanelDocs
