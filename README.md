 ## 1. 메인 컴포넌트 TodoListTemplate 구성
    src/components
     - TodoListTemplate.js
     - TodoListTemplate.css
  
   ref) https://velopert.com/3480
 
 ## 2. 컴포넌트 Form 만들기
 인풋과 버튼이 담겨있는 컴포넌트
 
    src/components
      - TodoListTemplate.js
      - TodoListTemplate.css
      - Form.js (+)
      - Form.css (+)
  
   ref) https://velopert.com/3480
   
 ## 3. todoItemList 구성하기
    *checkbox구현
    - && expression
       조건이 true일 경우에는 && 이후에 위치한 expression을 반환하고, false일 경우 expression을 반환하지 않고 무시한다.
    - 삼항연산자를 이용한 조건주기
        조건 ? 참 : 거짓
        
 ## * 공부한 내용 (javascript)
 ### 1. 비구조화 할당 (Destructuring assignment) (TodoListTemplate.js)
 ### 2. css flexbox (Form.css)
   #### 1. 스크롤이 없는 100% 레이아웃
    - flexbox의 필요성
       페이지 전체에는 스크롤이 없는 형태로 영역 내부에서만 스크롤이 생성된다.
       기존에 flex속성을 쓰지 않는 경우에는 html 최상위에서부터 height:100%를 주면서 상속받게 하고
       하위 영역들에는 heigh:calc(100% - 60px)과 같이 계산해서 지정해주는 방식으로 적용.
       또는 일정 padding을 주면서 margin을 음수로 주면서 맞추기도 했음
      
   <div>    
   <img width="600"alt="1" src="https://user-images.githubusercontent.com/31176502/55312843-6146ab80-54a1-11e9-9d49-19d2ec389112.png">
   </div>
   

    전체 래퍼 (.wrap)
    .wrap {
        display:flex;
        flex-direction: column; //default값이 row (가로 정렬)
        position : absolute;
        width:100%;
        height:100%;
    }
    
    .map_wrap{
        flex : 1; /*flex : 0 0 1 , 확장되도록함. 
    }
    
    
    부모 box에 display:flex하면 자식 box에 flex값을 지정할 수 있다.
       
           flex값 속성 -> box내부의 사용가능한 공간을 분배하는 방식을 변경할 수 있음
            - flex-grow
              -> 값을 양수로 지정하면 flex 항목별로 주축 방향 크기가 flex-basis값 이상으로 늘어날 수 있다.
              -> 모든 항목의 flex-grow값을 1로 지정하면 사용가능한 공간은 각 항목에게 동일하게 분배되며, 각 항목은 주축을 따라 분배받은 값만큼 사이즈를 늘려 공간을 차지한다.
              -> 예를 들어, 첫 항목의 flex-grow값을 2로 지정하고 나머지 두 개의 항목을 1로 지정한다면 각 항목에 지정된 flew-grow값의 비율에 따라 남은 공간이 분배된다.
                 flex-grow비율이 2:1:1 이므로 첫 항목에게 100픽셀, 두 번쨰와 세 번째 항목에게 50 픽셀씩 분배된다.
              
            - flex-shrink
              -> 
            - flex-basis
              항목의 크기를 결정.
              기본값 : auto
              flex 항목에 크기가 지정되어 있지 않으면, flex항목의 내용물 크기가 flex-basis값(내용물 크기만큼, auto)으로 사용된다.
           
   ref) https://wit.nts-corp.com/2018/07/27/5274
