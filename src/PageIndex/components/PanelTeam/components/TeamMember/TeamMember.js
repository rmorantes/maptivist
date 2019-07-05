import styled from 'styled-components'

const PanelTeam_TeamMember = props => (
  <Wrapper>
    <Avatar src={props.avatar}/>
    
    {/* TODO: '23 min ago'  */}
    {props.isOnline &&
      <IndicatorOnline/>
    }

    <Details>
      <UserName> {props.userName}
        {/* TODO: Create UI for role CRUD. ~ RM */}
        {props.isMedic &&
          <IndicatorMedic className='fas fa-plus'/>
        }
      </UserName>
      <Distance> {props.distance} </Distance>
    </Details>
  </Wrapper>
)

export default PanelTeam_TeamMember

const Wrapper = styled.div`
  display: flex;
  margin: 1rem 0.75rem 0;
  position: relative;
  :last-child {
    margin-bottom: 1rem;
  }
`

const Avatar = styled.img`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
`

const IndicatorOnline = styled.div`
  background: #04c604;
  border-radius: 50%;
  height: 0.75rem;
  left: 2.5rem;
  position: absolute;
  top: 2.25rem;
  width: 0.75rem;
`

const IndicatorMedic = styled.span`
  background: white;
  border-radius: 50%;
  color: red;
  height: 1.25rem;
  line-height: 1.25rem;
  margin-left: 0.5rem;
  text-align: center;
  width: 1.25rem;
`

const Details = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-left: 0.75rem;
  width: 100%;
`

const UserName = styled.p`
  font-size: 1rem;
`
const Distance = styled.p`
  font-size: 0.8rem;
`
