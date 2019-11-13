// IDEA: Search map for users and such. ~ RM
// * https://docs.mapbox.com/mapbox-gl-js/example/filter-markers-by-input/
const SearchBar = props => (
  <Wrapper onSubmit={e => {
    alert('Feature pending!')
    e.preventDefault()
  }}>
    <Logo> M </Logo>
    <InputField placeholder='Search'/>
    <Button className='fas fa-search'/>
  </Wrapper>
)

const Wrapper = styled.form`
  align-items: center;
  display: flex;
  flex: 1;
`

const Logo = styled.h1`
  font-size: 2rem;
`

const InputField = styled.input`
  background-color: grey;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  display: flex;
  flex: 1;
  height: 1.75rem;
  line-height: 1.75rem;
  margin-left: 1rem;
  padding: 0.25rem 1rem;
  ::placeholder {
    color: lightgrey;
  }
`

const Button = styled.button`
  background-color: grey;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  line-height: 1.75rem;
  padding-right: 0.5rem;
`

export default SearchBar
