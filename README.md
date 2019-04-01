#To-do-List

 
 ## 메인 컴포넌트 TodoListTemplate 구성
 components
 - TodoListTemplate.js
 - TodoListTemplate.css
  
 ref) https://velopert.com/3480
 
 ## 컴포넌트 Form 만들기
 인풋과 버튼이 담겨있는 컴포넌트
 
 components
  - TodoListTemplate.js
  - TodoListTemplate.css
  
  +
  
  - Form.js
  - Form.css
  
 
 
 ## 공부한 내용 (javascript)
 ###1 비구조화 할당 (Destructuring assignment) (TodoListTemplate.js)
 ###2 css flexbox (Form.css)
   #### 1 스크롤이 없는 100% 레이아웃
    - flexbox의 필요성
       페이지 전체에는 스크롤이 없는 형태로 영역 내부에서만 스크롤이 생성된다.
       기존에 flex속성을 쓰지 않는 경우에는 html 최상위에서부터 height:100%를 주면서 상속받게 하고
       하위 영역들에는 heigh:calc(100% - 60px)과 같이 계산해서 지정해주는 방식으로 적용.
       또는 일정 padding을 주면서 margin을 음수로 주면서 맞추기도 했음
       
    <img width="801" alt="스크린샷 2019-04-01 오후 4 57 56" src="https://user-images.githubusercontent.com/31176502/55311991-  5d198e80-549f-11e9-9706-91478eb8f262.png">

    
   ref) https://wit.nts-corp.com/2018/07/27/5274
