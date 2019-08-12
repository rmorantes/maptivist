const PanelGroups_CardGroup = props => (
  <Wrapper>
    <Avatar src={props.avatar}/>

    <IndicatorOnline isOnline={props.isOnline}/>

    <Details>
      {props.isSelected &&
        <BarTop>
          <Button>
            <Icon className='fas fa-comment'/>
          </Button>
          <Button>
            <Icon className='fas fa-expand-arrows-alt'/>
          </Button>
          <Button>
            <Icon className='fas fa-cog'/>
          </Button>
        </BarTop>
      }

      <BarBottom hasMarginTop={!props.isSelected}>
        <Name battery={props.battery}>
          {props.name}
          {props.role === 'leader' &&
            <RoleLeader className='fas fa-crown'/>
          }
        </Name>
        <Distance> {props.distance} </Distance>
      </BarBottom>
    </Details>
  </Wrapper>
)

export default PanelGroups_CardGroup

const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  position: relative;
  :last-child {
    margin-bottom: 1rem;
  }
`

const Avatar = styled.img`
  width: 3rem;
  background: ${props => props.isSelected ? 'white' : 'black'};
  color: ${props => props.isSelected ? 'black' : 'white'};
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  height: 4rem;
  min-width: 4rem;
  line-height: 4rem;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 0.125rem;
  z-index: 2;
  transform: scale(1.15);
`

const Details = styled.div`
  display: flex;
  margin-left: -1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const BarTop = styled.p`
  flex: 1;
  transform: skew(15deg, 15deg) rotate(-15deg);
  line-height: 2rem;
  padding-left: 1rem;
  font-size: 1.25rem;
  width: fit-content;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: -0.55rem;
`

const Button = styled.button`
  font-size: 1.5rem;
  border-left: solid rgba(255, 255, 255, 0.5) 0.25rem;
  background: black;
  line-height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  :first-child {
    border: none;
  }
`

const Icon = styled.i`
  transform: skew(-15deg, -15deg) rotate(15deg);
  font-size: 1.25rem;
`

const BarBottom = styled.div`
  flex: 1;
  transform: skew(-15deg, -15deg) rotate(15deg);
  width: fit-content;
  margin-left: 0.4rem;
  margin-top: 0.05rem;
  display: flex;
  margin-top: ${props => props.hasMarginTop ? '2rem' : 0};
`

const Distance = styled.div`
  line-height: 2rem;
  padding-right: 0.5rem;
  font-size: 1.25rem;
  background: rgba(255,255,255,0.5);
  padding-left: 0.5rem;
  color: black;
`

const Name = styled.div`
  line-height: 2rem;
  font-size: 1.25rem;
  background: rgba(0,0,0,0.5);
  margin-left: -0.5rem;
  padding-left: 1.75rem;
  padding-right: 1.5rem;
  background: ${props => props.battery > 75 ? 'rgba(127, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)'};
`

const RoleLeader = styled.i`
  margin-left: 1rem;
  color: gold;
`

const IndicatorOnline = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  z-index: 3;
  left: 4.5rem;
  top: 2rem;
  background: ${props => props.isOnline ? 'green' : 'grey'};
  border-radius: 50%;
  border: solid 0.125rem white;
`
