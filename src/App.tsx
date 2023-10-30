import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import PostBox from './components/PostBox'
import Search from './components/Search'
import Post from './routes/Post'
import PostEdit from './routes/PostEdit'
import Darkmode from './components/Darkmode'
import EditBtn from './components/EditBtn'
import WhiteSpace from './components/WhiteSpace'
function App() {
  return (
    <div className="App">

      {/* 메인화면 컨텐츠 + 사이드바 */}
      <div className="Content-container">

        {/* 사이드바 */}
        <Sidebar/>

        {/* 메인화면 컨텐츠 */}
        <div className="Main-container">

          {/* 헤더 */}
          <Header/>

          {/* 여백 */}
          
          {/* 리액트 라우터 */}
          <Routes>
            {/* 게시글 */}
            <Route path="/" element={ <PostBox/> }/>
            <Route path="/Post" element={ <Post/> }/>
            <Route path="/Post/Edit" element={ <PostEdit/> }/>
          </Routes>
        </div>
      {/* 다크모드 */}
      <Darkmode/>
      {/* 어드민 게시글작성 */}
      <EditBtn/>
      </div>
    </div>
  );
}

export default App;
