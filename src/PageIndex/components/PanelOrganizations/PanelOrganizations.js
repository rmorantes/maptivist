import Panel from 'src/components/Panel'

const PageIndex_PanelOrganizations = props => (
  <Panel label='Organizations'>
    <Heading> Overview </Heading>

    <Overview> Users can interact with their associated organizations via the Organizations Panel. </Overview>

    <Heading> (Post-MVP) Organizations </Heading>

    <Overview> An organization is a number of users working together via associated channels and groups to achieve tactical and strategic objectives and goals, optionally containing suborganizations, subsuborganizations, and so on. </Overview>

    <Features>
      <Feature> Organizations can be created by users and parent organizations. </Feature>
      <Feature> Organizations can merge and seperate in various ways similar to groups. </Feature>
      <Feature> Organizations may associate with organizations outside their organizational hierarchy (friends lists for organizations). </Feature>
      <Feature> Organizations can have associated channels (beside the default). </Feature>
      <Feature> Organizations can have associated groups (ex: an organization may create a group for an upcoming march and another group for a subsequent vigil, or maintain groups corresponding to permanent or semi-permanent formations). </Feature>
      <Feature> Organizations have built-in infrastructure to address weaknesses of most modern movements (which tend to quickly outgrow their developed organizational capacity): </Feature>
      <Features>
        <Feature> Customizable organizational government templates (ex: representive democracy, direct democracy, good governance councils, custom templates). </Feature>
        <Feature> Customizable deliberation formats (ex: council circle, Robert's Rules of Order). </Feature>
        <Feature> Customizable election formats (ex: simple majority, ranked choice). </Feature>
        <Feature> UI-mediated deliberation and decision-making for physical and/or virtual assemblies (ex: parliamentary procedure via channels, supported by linked votes, polls, surveys, realtime collaborative docs, enforced time limits for speaking). </Feature>
      </Features>
    </Features>
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

const Features = styled.ul`
  margin-left: 1.5rem;
  margin-right: 0.75rem;
  :last-child {
    margin-bottom: 1rem;
  }
`

const Feature = styled.li`
  margin-top: 1rem;
`

export default PageIndex_PanelOrganizations
