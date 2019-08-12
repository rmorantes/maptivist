import Panel from 'src/components/Panel'

const PageIndex_PanelComms = props => (
  <Panel label='Comms'>
    <Heading> Overview </Heading>

    <Overview> Direct communication between users is done via the Comms Panel. Something like (from Jackie's perspective): </Overview>

    <Features>
      <Mockup>
        <FeedTabs>
          <FeedTab> March Against Cages </FeedTab>
          <FeedTab> No to China Extradition in Hong Kong </FeedTab>
          <FeedTab> + Add Feed </FeedTab>
        </FeedTabs>
        <Message>
          <TeamIndicator> [Peacekeepers] </TeamIndicator>
          <TeamIndicator> [Medics] </TeamIndicator>
          <UserIndicator isCurrentUser={true}> [Jackie]: </UserIndicator>
          Scouts have spotted 20-40 counter-protesters a mile ahead of the march. Here's a map marker:
          <MapMarker>
            [
            <i className='fas fa-map-marker-alt'/>
            Counter-protesters]
          </MapMarker>
          . They'll keep it updated.
        </Message>

        <Message>
          <TeamIndicator> [Peacekeepers] </TeamIndicator>
          <TeamIndicator> [Medics] </TeamIndicator>
          <UserIndicator isCurrentUser> [Jackie]: </UserIndicator>
          Those toward the back, please reinforce the front of the march with half or so of your people.
        </Message>

        <Message>
          <TeamIndicator> [General] </TeamIndicator>
          <UserIndicator> [Joe]: </UserIndicator>
          Are we there yet???
        </Message>

        <Message>
          <TeamIndicator> [Peacekeepers] </TeamIndicator>
          <UserIndicator> [Lui][<i className='fas fa-microphone'/>]: </UserIndicator>
          Got it.
          <AudioIndicator>
            [
            <i className='fas fa-redo-alt'/>
            Replay Message]
          </AudioIndicator>
        </Message>

        <Message>
          <TeamIndicator> [Medics] </TeamIndicator>
          <UserIndicator> [Sam]: </UserIndicator>
          Copy.
        </Message>

        <MessagePrivate>
          [Lui,
          <UserIndicator> [Matt]</UserIndicator>
          , Sam]: Gotta pee, heading to the DD ahead. Anyone need anything?
        </MessagePrivate>

        <MessagePrivate>
          [Lui, Matt,
          <UserIndicator> [Sam]</UserIndicator>
          ]: A plain bagel would be awesome. :-)
        </MessagePrivate>

        <Input>
          /general @Joe We're about 20-30 minutes away from t_
        </Input>
      </Mockup>
    </Features>

    <Heading> Feeds </Heading>

    <Overview> A feed is a stream of messages from channels and conversations that only the feed's user can see. </Overview>

    <Features>
      <Feature> Users begin with one feed, the minimum, but may create several more. </Feature>
      <Feature> To begin populating a feed with messages from a new channel, users must join the channel (ex: type or say "/join general" to join the General channel). </Feature>
      <Feature> Feed names can be changed by the user. </Feature>
    </Features>

    <Heading> Channels </Heading>

    <Overview> A channel is a stream of text and transcribed voice messages between channel members, usually for some topic or purpose. Groups (including subgroups), users, and organizations can have channels. </Overview>

    <Features>
      <Feature> Group channels can be joined by any member of the group, according to permissions. Examples: </Feature>

      <Features>
        <Feature> /group - Created by default, joined by users automatically as they join the group. </Feature>
        <Feature> /subgroup-3 - When a subgroup is created, so too is a corresponding subgroup channel, automatically joined by users joining the subgroup. </Feature>
        <Feature> /sign-suggestions - Group channels often but don't necessarily correspond to physical formations of people. </Feature>
        <Feature> NOTE: Subgroups can have channels other than their corresponding subgroup channel, useful to larger groups for maintaining channel continuity when merging and seperating. </Feature>
      </Features>

      <Feature> (Post-MVP) Organization channels can be joined by any user, according to permissions. Examples: </Feature>

      <Features>
        <Feature> /general </Feature>
        <Feature> /announcements </Feature>
        <Feature> /elections </Feature>
      </Features>

      <Feature> (Post-MVP) User channels can be joined by any user, according to permissions. Examples: </Feature>

      <Features>
        <Feature> /my-private-channel </Feature>
        <Feature> /maptivist-feedback </Feature>
        <Feature> /lets-talk-about-succulents </Feature>
      </Features>
    </Features>

    <Heading> (Post-MVP) Conversations </Heading>

    <Overview> Conversations are similar to channels but differ in that they are permanently private and limited to a handful of users. </Overview>

    <Heading> (Post-MVP) Links </Heading>

    <Overview> Channels and conversations support links to various items. Examples: </Overview>

    <Features>
      <Feature> Map annotation links - Map annotations can be linked to channels such that, when the link is selected, the user is taken to the map with the corresponding annotation centered. </Feature>
      <Feature> Document links - Clicking a document link takes the user to the Docs Panel with the corresponding document selected. </Feature>
      <Feature> Group links - Clicking a group link takes the user to the Groups Panel with the corresponding group selected. </Feature>
    </Features>

    <Heading> Speech </Heading>

    <Overview> Channels and conversations support text-to-speech and speech-to-text for hands-free operation. </Overview>

    <FeaturesLast>
      <Feature> Push-to-talk input mode. </Feature>
      <Feature> Live streaming and audio amplification of speeches and deliberations via devices so all can hear (versus the cumbersomeness of the people's mic). </Feature>
    </FeaturesLast>
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

const Mockup = styled.div`
  padding: 1rem;
  border: solid white 0.125rem;
  border-top: none;
  padding-top: 0;
  margin-left: -1.5rem;
  margin-right: -0.75rem;
  margin-top: 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
`

const FeedTabs = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
`

const FeedTab = styled.div`
  text-align: center;
  flex: 1;
  padding: 0.5rem;
  background: black;
  border-bottom: solid 0.125rem white;
  :first-child {
    background: white;
    color: black;
    border: none;
  }
`

const Message = styled.p`
  line-height: 1.15rem;
  margin-top: 1rem;
`

const TeamIndicator = styled.span`
  color: gold;
`

const UserIndicator = styled.span`
  color: ${props => props.isCurrentUser ? 'lawngreen' : 'deepskyblue'};
  i {
    color: ${props => props.isCurrentUser ? 'lawngreen' : 'deepskyblue'};
  }
`

const AudioIndicator = styled.span`
  color: deepskyblue;
  margin-left: 0.5rem;
  i {
    color: deepskyblue;
    margin-right: 0.5rem;
  }
`

const MapMarker = styled.span`
  margin-left: 0.5rem;
  color: red;
  i {
    color: red;
    margin-right: 0.5rem;
  }
`

const MessagePrivate = styled.p`
  margin-top: 1rem;
  color: #ff4e00;
`

const Input = styled.p`
  border: solid white 0.125rem;
  margin-top: 1rem;
  padding: 0.75rem;
  line-height: 1.15rem;
  border-radius: 1rem;
`

const Features = styled.ul`
  margin-left: 1.5rem;
  margin-right: 0.75rem;
`

const FeaturesLast = styled(Features)`
  margin-bottom: 1rem;
`

const Feature = styled.li`
  margin-top: 1rem;
`

export default PageIndex_PanelComms
