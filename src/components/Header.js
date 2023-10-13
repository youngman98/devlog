import styled from 'styled-components'

let HeaderBox = styled.div`
  height: 80px;
  width: 100%;
  top: 0;
  z-index: 10;
  background: var(--main-color);
`

let Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 65px;
  width: 100%;
  max-width: 100%;
`

let Logo = styled.div`
  height: 65px;
  width: 230px;
  background-image: url(https://user-images.githubusercontent.com/75000376/274241409-70c5b77f-842c-44b9-87bf-e8061a6f8a64.png);
  background-size: cover;
`

let Navbar = styled.ul`
  display: flex;
  align-items: center;
`

let NavbarLi = styled.li`
  position: relative;
  height: 100%;
  line-height: 65px;
  margin: 0 5px;
  padding: 0 15px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: var(--box-hover);
    transform: scale(1.1);
  }
`
function Header() {
  return (
    <HeaderBox>
    <Container>
      <a href=""><Logo/></a>
      <Navbar>
        <a href=""><NavbarLi>Contact</NavbarLi></a>
        <a href=""><NavbarLi>Github</NavbarLi></a>
        <a href=""><NavbarLi>Portfolio</NavbarLi></a>
      </Navbar>
    </Container>
    </HeaderBox>
  )
}

export default Header
