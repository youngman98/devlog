import styled from 'styled-components'

let PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 310px;
`

let Container = styled.div`
  height: 310px;
  width: 25%;
  padding: 10px;
  box-sizing: border-box;
`

let PostBox = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0px 4px 10px 2px rgba(0,0,0,.3);
  overflow: hidden;
  &:hover {
    background: var(--box-hover);
  }
  &:hover img{
    transform: scale(1.1);
  }
`

let Thumbnail = styled.div`
  width: 100%;
  height: 165px;
  overflow: hidden;
`

let ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  transition: transform .3s ease-in-out;
  background-image: 
    url("https://user-images.githubusercontent.com/75000376/273962704-aefa72e5-6698-44db-b09d-610885799755.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
`

let InnerBox = styled.div`
  display: flex;
  padding: 12px;
`

let Inner = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

let PostDate = styled.p`
  text-align: right;
  padding-left: 15px;
  padding-right: 15px;
`

function Post() {
  return(
    <PostList>
    <Container>
      <a href="">
        <PostBox>
          <Thumbnail>
            <ThumbnailImg/>
          </Thumbnail>
          <InnerBox>
            <span>[React]</span>
            <Inner>JSX란?</Inner>
          </InnerBox>
          <PostDate>
            2023. 10. 10
          </PostDate>
        </PostBox>
      </a>
    </Container>
    </PostList>
    
  )
}

export default Post