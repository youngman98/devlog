import styled from 'styled-components'
import Separator from './../components/Separator.js'

let Postcontainer = styled.div`
  display: flex;

`
let PostInfo = styled.div`
  width: 768px;
  min-height: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5.5rem;
  background: var(--sub-color);
`

let PostTitle = styled.p`
  font-size: 3rem;
`

let PostDate = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 20px;
  
`

let PostTags = styled.div`

`

let PostContent = styled.div`
  
`

function PostPage() {
  return (
    <Postcontainer>
      <PostInfo>
        <PostTitle>포스트 제목</PostTitle>
        <PostDate>
          <span><a href="">[포스트 카테고리]</a></span>
          <Separator/>
          <span>게시일</span>
        </PostDate>
        <PostTags>

        </PostTags>
      </PostInfo>
      <PostContent>
        
      </PostContent>
    </Postcontainer>
  )
}

export default PostPage