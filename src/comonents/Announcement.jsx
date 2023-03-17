import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color: blue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Announcement = () => {
  return (
    <Container>
       HOLI SUPER SAVER OFFER IS NOW LIVE
    </Container>
  )
}

export default Announcement
