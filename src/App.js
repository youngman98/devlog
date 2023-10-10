import './App.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="Header">
        <div className="Header-container">
          <div className="Header-logo">로고</div>
          <ul className="Header-navbar">
            <li>contact</li>
            <li>github</li>
            <li>portfolio</li>
          </ul>
        </div>
      </div>

      <div className="Content-container">

      {/* white-space */}
      {/* <div className="White-space height-large"></div> */}

      {/* sidebar */}
      <div className="Sidebar-container">
        <div className="Sidebar-profile-img">
          
        </div>
        <div className="Sidebar-profile-info">
          <p className="font-large">YoungIn</p>
          <p className="font-small">Front-end dev</p>
        </div>
        <ul className="Sidebar-menu">
          <li><a href="">HTML/CSS</a></li>
          <li><a href="">Javascript</a></li>
          <li><a href="">Typescript</a></li>
          <li><a href="">React</a></li>
          <li><a href="">Git</a></li>
          <li><a href="">CS</a></li>
          <li><a href="">Algorithm</a></li>
        </ul>
      </div>

      {/* main */}
      <div className="Main-container">
        {/* search */}
        <div className="Search">
          <input type="text" placeholder="Search"/>
          <button className="Search-icon"></button>
        </div>
        <div className="PostList">
          <div className="Post-container">
            <a href="">
              <div className="Post">
                <div className="Thumbnail">
                  <img src="https://user-images.githubusercontent.com/75000376/273954097-0b7bfc4b-b86c-4eab-9e25-50bd830f4aac.png" alt="" />
                </div>
                <div className="Post-inner">
                  <span>[React]</span>
                  <p>JSX란?</p>
                </div>
                <p className="Post-date">
                  2023. 10. 10
                </p>
              </div>
            </a>
          </div>
          <div className="Post-container">
            <a href="">
              <div className="Post">
                <div className="Thumbnail">
                  <img src="https://user-images.githubusercontent.com/75000376/273962704-aefa72e5-6698-44db-b09d-610885799755.png" alt="" />
                </div>
                <div className="Post-inner">
                  <span>[Javascript]</span>
                  <p>동기/비동기처리</p>
                </div>
                <p className="Post-date">
                  2023. 10. 10
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
