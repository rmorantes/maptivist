import { useStateValue } from 'src/services/context'

const DrawMenu = () => {
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
  background: black;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
`

export default DrawMenu
