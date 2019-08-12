import Panel from 'src/components/Panel'

const PageIndex_PanelComms = props => (
  <Panel label='Comms'>
    <Heading> Comms Panel UI pending... </Heading>

    <Features>
      <Feature> Users can communicate via a single comms feed that is an aggregation of direct messages and comms channels (Discord or the WoW chat box, basically) </Feature>
      Clicking a channel indicator/prefix in the chat box will maximize that channel? <BREAK ME
        <Feature> Interactive links </Feature>
        <Features>
          <Feature2> Map annotation links (ex: upon a user creating a POI, a link to the POI is generated in the user's group channel that, when selected, pans the map to center the POI) </Feature2>
          <Feature2> Document links (clicking a document link takes user to the document for viewing and/or realtime collaboration (simplified Google Docs, basically)) </Feature2>
        <Feature2> Poll and survey links </Feature2>
        <Feature2> Group links </Feature2>
      </Features>

      <Feature> Channels support text-to-speech and speech-to-text (particularly useful for those who need to keep their hands free) </Feature>

      <Feature> Push-to-talk </Feature>

      <Feature> A channel corresponds to an event, event group, organization, organization group, or user </Feature>
      <Features>
        <Feature> Event channel examples: </Feature>
        <Features>
          <Feature2> #general (default) </Feature2>
          <Feature2> #announcements </Feature2>
          <Feature2> #jail-support </Feature2>
        </Features>

        <Feature> Event group channel examples (when an event group is created, so too is a corresponding event group channel): </Feature>
        <Features>
          <Feature2> #group-1 </Feature2>
          <Feature2> #vanguard </Feature2>
          <Feature2> #peacekeepers </Feature2>
        </Features>

        <Feature> Organization channel examples: </Feature>
        <Features>
          <Feature2> #charter </Feature2>
          <Feature2> #faq </Feature2>
          <Feature2> #suggestions </Feature2>
        </Features>

        <Feature> Organization group channel examples: </Feature>
        <Features>
          <Feature2> #technology-task-force </Feature2>
          <Feature2> #counter-propaganda-group </Feature2>
          <Feature2> #fundraising </Feature2>
        </Features>

        <Feature> User channel examples: </Feature>
        <Features>
          <Feature2> #my-private-channel </Feature2>
          <Feature2> #ad-hoc-support </Feature2>
          <Feature2> #post-discussion </Feature2>
        </Features>
      </Features>

      <Feature> </Feature>
    </Features>


    Will support linkable events (ex: users can post coords to channel, if other users click,
    will recenter map on those coordinates. )


    /1-2-11 (or) "/peacekeepers"
    /peacekeepers
    /join peacekeepers

    [Peacekeepers][Marshalls][Jackie]: Scouts are reporting 20-40
    counter-protesters about a mile ahead. Maintain current positions relative to crowd,
    but be prepared to reinforce front if things get ugly.
    [Peacekeepers][Jessica]: Got it.
    [Marshalls][Lui]: Copy.

    /join 1 peacekeepers
    /marshalls




    Users have a comms feed.


    Events can have many groups (similar to how FB events can have multiple cosponsors)
    Upon joining events, groups can opt to retain existing hiearchies
    Groups can be
    Users can also create groups


    <h3> Text messaging </h3>
    <ul>
      <li> Text-to-voice option </li>
    </ul>

    <h3> Push-to-talk audio messaging </h3>
    <ul>
      <li> Consecutive Mode (one speaker may speak at a time) </li>
      <li> Simultaneous Mode (multiple speakers may speak at a time) </li>
      <li> Audio messages are converted to text and added to comms stream (Simultaneous Mode updates every N sentences or something) </li>
      <li> Audio messages are replayable (via a 'replay' icon next to text conversion in comms stream) </li>


      </ul>

  </Panel>
)

const Heading = styled.h1`
  font-size: 1.5rem;
  padding: 0.5rem;
  text-align: center;
`

const Features = styled.ul`
  margin-left: 1.5rem;
  margin-right: 0.75rem;
`
const Feature = styled.li`
margin-top: 1rem;
  ${'' /* padding-left: 1rem; */}
`

const Feature2 = styled.li`

`

// Notifications panel

export default PageIndex_PanelComms
