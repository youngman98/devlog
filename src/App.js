import './App.css';

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="Header">
        <div className="Header-container">
          <a href=""><div className="Header-logo"></div></a>
          <ul className="Header-navbar">
            <li>Contact</li>
            <li>Github</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>

      <div className="Content-container">

      {/* white-space */}

      {/* sidebar */}
      <div className="Sidebar-container">
        <div className="Sidebar-profile-img"></div>
        <div className="Sidebar-profile-info">
          <hr/>
          <p className="Font-large">YoungIn</p>
          <p className="Font-small">Front-end dev</p>
          <hr/>
        </div>
        <ul className="Sidebar-menu">
          <li><a href=""><div className="Sidebar-icon"></div>HTML/CSS <span className="Sidebar-postCount">20</span></a></li>
          <li><a href=""><div className="Sidebar-icon"></div>Javascript</a></li>
          <li><a href=""><div className="Sidebar-icon"></div>Typescript</a></li>
          <li><a href=""><div className="Sidebar-icon"></div>React</a></li>
          <li><a href=""><div className="Sidebar-icon"></div>Git</a></li>
          <li><a href=""><div className="Sidebar-icon"></div>CS</a></li>
          <li><a href=""><div className="Sidebar-icon"></div>Algorithm</a></li>
        </ul>
      </div>

      {/* main */}
      <div className="Main-container">
        {/* search */}
        <div className="Search">
          <input type="text" placeholder="Search"/>
          <div className="Search-icon"></div>
        </div>
        <div className="Darkmode-toggle-container"></div>
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
                <p className="Post-"></p>
              </div>
            </a>
          </div>
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
          
          
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
