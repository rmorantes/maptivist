import styled from 'styled-components'
import Panel from '../../../components/Panel/Panel'
import PanelTeam_TeamMember from './components/TeamMember/TeamMember'

const PanelTeam = props => {
  // TEMP: Pending actual users. ~ RM
  // TODO: Use Faker.js to mock users. ~ RM
  const teamMembers = [
    {userName: 'Jane', avatar: 'https://picsum.photos/id/550/50/50', distance: '150 ft', isOnline: true},
    {userName: 'Bob', avatar: 'https://picsum.photos/id/450/50/50', distance: '0.7 mi', isOnline: false},
    {userName: 'Vivian', avatar: 'https://picsum.photos/id/350/50/50', distance: '0.2 mi', isOnline: true, isMedic: true},
    {userName: 'Jane', avatar: 'https://picsum.photos/id/550/50/50', distance: '150 ft', isOnline: true},
    {userName: 'Bob', avatar: 'https://picsum.photos/id/450/50/50', distance: '0.7 mi', isOnline: false},
    {userName: 'Vivian', avatar: 'https://picsum.photos/id/350/50/50', distance: '0.2 mi', isOnline: true, isMedic: true},
    {userName: 'Jane', avatar: 'https://picsum.photos/id/550/50/50', distance: '150 ft', isOnline: true},
    {userName: 'Bob', avatar: 'https://picsum.photos/id/450/50/50', distance: '0.7 mi', isOnline: false},
    {userName: 'Vivian', avatar: 'https://picsum.photos/id/350/50/50', distance: '0.2 mi', isOnline: true, isMedic: true},
    {userName: 'Jane', avatar: 'https://picsum.photos/id/550/50/50', distance: '150 ft', isOnline: true},
    {userName: 'Bob', avatar: 'https://picsum.photos/id/450/50/50', distance: '0.7 mi', isOnline: false},
    {userName: 'Vivian', avatar: 'https://picsum.photos/id/350/50/50', distance: '0.2 mi', isOnline: true, isMedic: true},
    {userName: 'Jane', avatar: 'https://picsum.photos/id/550/50/50', distance: '150 ft', isOnline: true},
    {userName: 'Bob', avatar: 'https://picsum.photos/id/450/50/50', distance: '0.7 mi', isOnline: false},
    {userName: 'Vivian', avatar: 'https://picsum.photos/id/350/50/50', distance: '0.2 mi', isOnline: true, isMedic: true},
    {userName: 'Jane', avatar: 'https://picsum.photos/id/550/50/50', distance: '150 ft', isOnline: true},
    {userName: 'Bob', avatar: 'https://picsum.photos/id/450/50/50', distance: '0.7 mi', isOnline: false},
    {userName: 'Vivian', avatar: 'https://picsum.photos/id/350/50/50', distance: '0.2 mi', isOnline: true, isMedic: true},
  ]

  return (
    <Panel label="Team">
      {teamMembers.map((teamMember, i) => (
        <PanelTeam_TeamMember key={i} {...teamMember}/>
      ))}
    </Panel>
  )
}

export default PanelTeam
