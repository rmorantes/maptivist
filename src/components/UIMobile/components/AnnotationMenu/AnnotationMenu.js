import { useStateValue } from 'src/services/context'

// TODO: Full CRUD UI for annotations, perhaps as seperate panel in addition to
// map-based UI. Some way of browsing annotations would be helpful for
// temporarily disabling, deleting ("WHERE on the map is it?"), and so on. ~ RM
// TODO: Users may subscribe to sets of annotations from users and groups (ex:
// "Here's the route I took to get around the counter-protests", "OrgX is pretty
// good about indicating which Hong Kong subways are currently operational
// and/or occupied by police, I'll subscribe to them as an individual and/or
// have my group admin add them to the group subscriptions"). ~ RM
const AnnotationMenu = () => {
  const [{ draw }] = useStateValue()

  return (
    <Buttons>
      <Button
        className='fas fa-map-marker-alt'
        onClick={() => draw.changeMode('draw_point')}
      />

      <Button
        className='fas fa-route'
        onClick={() => draw.changeMode('draw_line_string')}
      />

      <Button
        className='fas fa-draw-polygon'
        onClick={() => draw.changeMode('draw_polygon')}
      />
    </Buttons>
  )
}

const Buttons = styled.div`
  bottom: 4rem;
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 100%;
`

const Button = styled.button`
  background-color: black;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
`

export default AnnotationMenu
