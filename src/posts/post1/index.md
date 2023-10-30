---

---

![썸네일](./thumbnail.png)
# React란?
    
    HTML, CSS, JavaScript를 이용한 웹개발을 편리하게 도와주는 라이브러리이다.
    
## React의 장점
1.    SPA(Single Page Application) 개발이 가능하다.
    자바스크립트만으로도 SPA를 만들 수 있지만 코드가 길어지고 복잡해져 리액트를 사용하면 더 쉽게 만들 수 있다.
        - HTML파일을 1개만 사용하고
        - 다른 페이지를 보여주고 싶을 때 HTML 부분만 교체해 보여준다.
2. HTML 재사용이 편리하다.
        HTML을 함수, array, obejct에 보관하고 재사용할 수 있어서 HTML 관리가 편하다.
        
## 리액트 설치방법
1. NodeJS 설치
    
    [Node.js](https://nodejs.org/ko)
    
2. Visual Studio Code 설치
    
    [VSCode](https://code.visualstudio.com/)
    
3. 작업용 폴더 만들기
    
    ![1번](./image1.png)
    
4. 폴더 shift + 우클릭, powershell 열기
    
    ![2번](./image2.png)
    
5. 터미널에 아래 명령어 작성하기
    
    <aside>
    💡 npx create-react-app 프로젝트명
    
    </aside>
    
    프로젝트명은 원하는거 작성하면 된다.
    
    저는 blog 넣었음

    ![3번](./image3.png)
    
6. VSC에서 폴더 열기
    
    ![4번](./image4.png)
    
7. src폴더 안에 있는 App.js가 메인화면이다.
프로젝트 잘 뜨는지 확인하기
    ![5번](./image5.png)
    
    - node_modules 폴더는 라이브러리 코드 보관함
    - public 폴더는 static 파일 모아놓는 폴더(이미지 같은거)
    - src 폴더는 코드 짜는 폴더
8. 터미널 설정하기
    
    ![6번](./image6.png)
    
    Terminal 탭에서 New Terminal 열기
    
    ![7번](./image7.png)
    <aside>
    npm start
    <aside/>
    
9. emmet에 JSX 추가하기
    
    [[이슈] : jsx 파일에서 emmet 활성화하기](https://merrily-code.tistory.com/167)
    
    - ctrl + shift + p
    - open settings (JSON) 열기
    
    ```jsx
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    },
    ```
    
    추가하기

## 만약 에러가 출력되면 아래 경우들을 확인해보자
1. **npx command not found** 에러
    - 터미널 껐다 켜보기
    - nodeJS 설치 및 최신버전 확인하기
    - 맥북은 brew 쓰지 말고 다운받기
    - 윈도우는 C드라이브에 설치 확인해보기
    - 리눅스는 nodeJS 설치, 버전 업데이트 명령어 다시 입력하기
2. 맥북 **permission이 없어요** 에러
    
    프로젝트 생성시 이런 에러가 뜨면 터미널에
    
    <aside>
    💡 sudo npx create-react-app blog
    
    </aside>
    
    입력하기. 비밀번호 입력하라고 하면 맥북 비밀번호 입력
    
3. 윈도우 **허가되지 않은 스크립트 입니다** 에러
    
    윈도우 하단 검색 메뉴에서 PowerShell 검색-우클릭-관리자 권한 으로 실행한뒤
    
    <aside>
    💡 Set-ExecutionPolicy Unrestricted
    
    </aside>
    
    입력하고 선택하는거에서 y 입력
    
4. **The engine "node" is incompatible with this module** 에러
    
    npx로 설치시 이런 에러가 나올 수 있음 nodeJS버전이 낮거나 너무 높다는 뜻, nodeJS 재설치 하면 됨
    
5. npm 입력시 안되면
    
    [Window에서 npm이 실행되지 않을때 (Node.js설치했는데도 npm이 실행되지 않을 때)](https://imspear.tistory.com/31)
    
    참고해서 환경변수 등록