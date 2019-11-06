import Panel from '../Panel'

const PanelProfile = props => (
  <Panel
    heading='Profile'
    height={props.windowDimensions.height / 3 - props.paneMargin / 3 * 4}
    windowDimensions={props.windowDimensions}
    x={props.windowDimensions.width - 400 - props.paneMargin}
    y={props.windowDimensions.height / 3 + props.paneMargin / 3 * 2}
  >
    <Heading> Profile Panel Overview </Heading>

    <Overview> Profile management is done via the Profile Panel. </Overview>

    <Heading> Profiles </Heading>

    <Overview> A profile is a collection of settings and information associated with a user. Users with profiles can: </Overview>

    <Features>
      <Feature> (Post-MVP) Store contacts (the profiles of other users). </Feature>
      <Feature> (Post-MVP) Create and be invited to organizations. </Feature>
      <Feature> (Post-MVP) Opt to share their profiles with other users and groups. </Feature>
      <Feature> (Post-MVP) Write a profile description. </Feature>
      <Feature> (Post-MVP) Create and manage their own channels. </Feature>
    </Features>
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

export default PanelProfile
