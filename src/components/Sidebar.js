import styled from 'styled-components'

let Container = styled.div`
  background: var(--main-color);
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: none;
  border-right: 1px solid var(--hr-color);
`

let Img = styled.div`
  height: 150px;
  width: 150px;
  margin-top: 100px;
  margin-bottom: 10px;
  background-image: 
    url("https://user-images.githubusercontent.com/75000376/274210544-208b1244-2d07-4b91-8e09-d41f57e511a3.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

let Info = styled.div`
  padding: 10px;
  width: 100%;
  text-align: center;
`

let Hr = styled.hr`
  border: none;
  border-bottom: 1px solid var(--hr-color);
  margin: 4px 20px
`

let Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0;
  width: 100%;
  text-align: left;
`

let MenuLi = styled.li`
  padding: 20px;
  &:hover {
    background-color: var(--box-hover);
    margin-left: 20px;
    transition: all .3s ease-in-out;
  }
`

let A = styled.a`
  display: flex;
  justify-content: left;
  font-size: var(--font-medium);
  column-gap: 0.8rem;
`

let Icon = styled.div`
  height: 24px;
  width: 24px;
  background-image: url("https://user-images.githubusercontent.com/75000376/274266397-c249770c-ab2a-4b90-b656-e291d0b35c10.png");
  background-size: cover;
`

let PostCount = styled.span`
  font-size: var(--font-small);
  color: var(--text-alert);
`
function Sidebar() {
  return (
    <Container>
      <Img/>
      <Info>
        <Hr/>
        <p className="Font-large">YoungIn</p>
        <p className="Font-small">Front-end dev</p>
        <Hr/>
      </Info>
      <Menu>
        <MenuLi><A href=""><Icon/>HTML/CSS <PostCount>20</PostCount></A></MenuLi>
        <MenuLi><A href=""><Icon/>Javascript<PostCount>20</PostCount></A></MenuLi>
        <MenuLi><A href=""><Icon/>Typescript<PostCount>20</PostCount></A></MenuLi>
        <MenuLi><A href=""><Icon/>React<PostCount>20</PostCount></A></MenuLi>
        <MenuLi><A href=""><Icon/>Git<PostCount>20</PostCount></A></MenuLi>
        <MenuLi><A href=""><Icon/>CS<PostCount>20</PostCount></A></MenuLi>
        <MenuLi><A href=""><Icon/>Algorithm<PostCount>20</PostCount></A></MenuLi>
      </Menu>
    </Container>
  )
}

export default Sidebar;