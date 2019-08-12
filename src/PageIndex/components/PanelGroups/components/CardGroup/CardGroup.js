const PanelGroups_CardGroup = props => (
  <Wrapper isSelected={props.isSelected}>
    <Avatar isSelected={props.isSelected}>
      {props.hierarchyPosition}
    </Avatar>

    <Details>
      {props.isSelected &&
        <UserName>
          <ButtonRhombus>
            <Icon className='fas fa-comment'/>
          </ButtonRhombus>
          <ButtonRhombus>
            <Icon className='fas fa-expand-arrows-alt'/>
          </ButtonRhombus>
          <ButtonRhombus>
            <Icon className='fas fa-cog'/>
          </ButtonRhombus>
        </UserName>
      }
      <StatBar hasMarginTop={!props.isSelected}>
        <Name> {props.name} </Name>
        <Stat> {props.count} </Stat>
      </StatBar>
    </Details>

    {props.name !== 'Group' &&
      <Button
        className={`fas fa-${props.isCollapsed ? 'plus' : 'minus'}`}
        isCollapsed={props.isCollapsed}
      />
    }
  </Wrapper>
)

export default PanelGroups_CardGroup

const Wrapper = styled.div`
  display: flex;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  position: relative;
  justify-content: space-between;
  background: ${props => props.isSelected && 'rgba(255,255,255, 0.25)'};
  :last-child {
    margin-bottom: 1rem;
  }
`

const Avatar = styled.div`
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

const UserName = styled.p`
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

const ButtonRhombus = styled.button`
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

const StatBar = styled.div`
  flex: 1;
  transform: skew(-15deg, -15deg) rotate(15deg);
  width: fit-content;
  margin-left: 0.4rem;
  margin-top: 0.05rem;
  display:flex;
  margin-top: ${props => props.hasMarginTop ? '2rem' : 0};
`

const Stat = styled.div`
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
  max-width: calc(75vw - 5rem);
  overflow: hidden;
  text-overflow: ellipsis;
`

const Button = styled.button`
  border-radius: 50%;
  font-size: 1.25rem;
  height: 2.5rem;
  width: 2.5rem;
  z-index: 1;
  background: black;
  color: white;
  margin: auto;
  min-width: 2.5rem;
  ${props => !props.isCollapsed && css`
    background: white;
    box-shadow: 0 0 0.5rem 0 white;
    color: black;
  `}
`
