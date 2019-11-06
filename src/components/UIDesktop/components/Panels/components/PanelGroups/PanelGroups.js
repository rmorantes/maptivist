import Panel from '../Panel'
import PanelGroups_CardUser from './components/CardUser'
import PanelGroups_CardGroup from './components/CardGroup'

const PanelGroups = props => {
  // TEMP: Pending actual users. ~ RM
  const medics = [
    {name: 'Sam', avatar: 'https://picsum.photos/id/338/100/100', distance: '150 ft', isOnline: true, battery: 90, role: 'leader'},
    {name: 'Lee', avatar: 'https://picsum.photos/id/1014/100/100', distance: '0.7 mi', isOnline: true, battery: 50},
    {name: 'Gabriella', avatar: 'https://picsum.photos/id/1011/100/100', distance: '0.2 mi', isOnline: true, battery: 90},
  ]

  const protesters = [
    {name: 'Jackie', avatar: 'https://picsum.photos/id/342/100/100', distance: '150 ft', isOnline: true, battery: 90, role: 'leader', isSelected: false},
    {name: 'Scot', avatar: 'https://picsum.photos/id/349/100/100', distance: '0.7 mi', isOnline: true, battery: 90, isSelected: false},
    {name: 'Agnes', avatar: 'https://picsum.photos/id/550/100/100', distance: '0.2 mi', isOnline: false, battery: 90, isSelected: false},
  ]

  return (
    <Panel heading='Groups' {...props}>
      <Heading> Groups Panel Overview </Heading>

      <Overview> Group and subgroup management is done via the Group Panel. Something like: </Overview>

      <Mockup>
        <FeedTabs>
          <FeedTab> March Against Cages </FeedTab>
          <FeedTab> No to China Extradition in Hong Kong </FeedTab>
          <FeedTab> + Add Group </FeedTab>
        </FeedTabs>

        <PanelGroups_CardGroup
          count='837'
          hierarchyPosition='G'
          name='Group'
        />

        <PanelGroups_CardGroup
          count='5'
          hierarchyPosition='1'
          isCollapsed
          name='Observers'
        />

        <PanelGroups_CardGroup
          count='3'
          hierarchyPosition='2'
          isCollapsed={false}
          isSelected
          name='Medics'
        />

        {medics.map((medic, i) => (
          <PanelGroups_CardUser key={i} {...medic}/>
        ))}

        <PanelGroups_CardGroup
          count='17'
          hierarchyPosition='3'
          name='Peacekeepers'
          isCollapsed
        />

        {protesters.map((protester, i) => (
          <PanelGroups_CardUser key={i} {...protester}/>
        ))}

        <AndSoOn> ... </AndSoOn>
      </Mockup>

      <Heading> Groups </Heading>

      <Overview> A group is a representation of a physical deployment of users, optionally containing subgroups, subsubgroups, and so on. </Overview>

      <Features>
        <Feature> To join a group, users can create the group, browse a list of groups to request to join, or be invited to join. </Feature>
        <Feature> (Post-MVP) Groups can also be created by organizations. </Feature>
        <Feature> A user may only belong to one group within a particular hierarchy of groups, as a user cannot physically be in multiple places. </Feature>
        <Feature> A user may belong to multiple groups so long as these groups belong to seperate hierarchies. </Feature>
        <Feature> Users may switch groups within a hierarchy or be switched by other users, according to permissions. </Feature>
        <Feature> (Post-MVP) Groups are customizable. </Feature>
        <Features>
          <Feature> Auto-assignment - Groups can be set to automatically assign users to specified groups under specified conditions. </Feature>
          <Feature> Capping - Groups and subgroups can be capped and floored at N users. </Feature>
          <Feature> Automatic Creation and Merging - Groups and subgroups can be set to automatically create or merge groups and subgroups under specified conditions (ex: if a group reaches its assigned cap, it can be made to automatically split into N groups). </Feature>
          <Feature> Custom subgroup name conventions - For instance, subgroup names can be made to default to 'Company N', subsubgroups might be 'Platoon N', subsubsubgroups might be 'Squad N', and so on </Feature>
          <Feature> Custom roles - Groups support custom roles for users to choose or be assigned. </Feature>
          <Feature> Templates - Users have the option of creating reusable templates for groups and subgroups (ex: a 'first aid station' creates a group of 10 medics for stationary treatment, with 4 patrol subgroups of 6 for collecting the injured). </Feature>
        </Features>
      </Features>

      <Heading> (Post-MVP) Roles </Heading>

      <Overview> A role is an assignable set of permissions and responsibilities. </Overview>

      <Features>
        <Feature> Examples of roles are leaders, subleaders, police liaisons, legal observers, and so on. </Feature>
        <Feature> Examples of role permissions include role assignment (ex: only leaders might be able to assign subleaders or create map annotations), channel permissions (ex: only leaders might be able to post messages in /announcements), and group management (ex: inviting, transferring, booting). </Feature>
        <Feature> Users can be referenced by their roles (upon being assigned a role, users automatically join a channel corresponding to this role for role-specific communication). </Feature>
        <Feature> Automatic group adjustments can take roles into account (ex: leaders remain evenly distributed, medics are grouped into first-aid stations, and so on). </Feature>
      </Features>
    </Panel>
  )
}

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

const Mockup = styled.div`
  border: solid white 0.125rem;
  margin-top: 1.5rem;
  border-radius: 1rem;
  padding-top: 0;
  overflow: hidden;
`

const FeedTabs = styled.div`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`

const FeedTab = styled.div`
  text-align: center;
  flex: 1;
  padding: 0.5rem;
  background-color: black;
  border-bottom: solid 0.125rem white;
  :first-child {
    background-color: white;
    color: black;
    border: none;
  }
`

const AndSoOn = styled.p`
  margin-left: 1.75rem;
  margin-bottom: 1rem;
  font-size: 2rem;
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

export default PanelGroups
