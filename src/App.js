import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.js'
import Sidebar from './components/Sidebar.js'
import Post from './components/Post.js'
import Search from './components/Search.js'
import Darkmode from './components/Darkmode.js'
import PostPage from './routes/PostPage.js'

function App() {
  return (
    <div className="App">
      {/* 다크모드 */}
      <Darkmode/>

      {/* 메인화면 컨텐츠 + 사이드바 */}
      <div className="Content-container">

        {/* 사이드바 */}
        <Sidebar/>

        {/* 메인화면 컨텐츠 */}
        <div className="Main-container">

          {/* 헤더 */}
          <Header/>

          {/* 검색창 */}
          <Search/>

          {/* 게시글 */}
          <Post/>

          {/* 리액트 라우터 */}
          <Routes>
            <Route path="/" element={ <PostPage/> }/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
