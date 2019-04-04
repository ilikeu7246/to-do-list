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
 ### 1. 비구조화 할당 (Destructuring assignment) (TodoListTemplate.js) (ES6)
    - 배열이나 객체의 요소를 해체하여 별개의 변수로 추출할 수 있도록 하는 것.
    - 배열이나 객체에 있는 각 데이터의 값을 자동으로 추출하기 위한 방법.
    
    * 배열 비구조화
     let [a, b] = [3, 4]; //a=3, b=4
     console.log('${a}, $(b)'); // "3, 4"
     
     [a, b] = [b, a] ; a=b, b=a를 대입(교환)
     console.log('${a}, $(b)'); // "4, 3"
        -> 값을 각각 순서대로 전달받는다. 순서를 바꾸어 대입하면 값을 서로 교환하는 처리가 가능해진다. (원래는 temp같은 임시 저장할 변수가 필요한데 간단해졌다.)
        
        
     let numbers = [1, 2, 3];
     let [a, b] = numbers; -> 길이가 일치하지 않아도 남는부분은 무시하고 할당할 수 있음.
     let [c, , d] = numbers; -> c와 d사이의 빈 값을 둠으로 할당할 배열에서 해당 위치의 값은 제외하고 할당할 수도 있다.
    
     console.log(`${a}, ${b}`); // "1, 2" 
     console.log(`${c}, ${d}`); // "1, 3"   
        
        
     let numbers = [1, 2, 3];
     let [a, ...b] = numbers; -> (펼침 연산자 or 나머지 연산자, a 이후 요소 ~ b까지 : ...b, 함수로 실제로 전달되는 인수는 제외된다.)
     
     console.log(a); // 1
     console.log(b); // [2,3]   
     
     
     *객체 비구조화
      - 객체의 각 프로퍼티를 객체로부터 추출하여 변수 리스트에 할당한다. 이때 할당 기준은 프로퍼티 이름(키)이다.
     
         let book = {
            title : 'HTML',
            price : 23000
         };
         
         let {title, price} = book; //book객체의 속성을 개별적으로 좌측의 변수에 전달
          -> 객체의 속성명과 할당하여 담을 변수명은 같아야한다. 'book.title'과 'title'이 같아야하는 것처럼!
      
       - 
       
       const todos = [
         { id: 1, content: 'HTML', completed: true },
         { id: 2, content: 'CSS', completed: false },
         { id: 3, content: 'JS', completed: false }
       ];
       
       // todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다. -> Array.prototype.filter 메소드
       const completedTodos = todos.filter(({ completed }) => completed);
       console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]
     
     
         
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


   ### 3. 화살표 함수 (Arrow function) (ES6)
    - this,arguments, super, new.target을 바인딩하지 않는다.
    - 나머지 매개변수(Rest parameter), 기본 매개변수(Default parameter), 구조 분해(Destructuring)를 지원한다.
     1. 나머지 매개변수(Rest parameter)란?
      - 이름을 정해주지 않은 파라미터 (arguments는 함수로 전달되는 모든 파라미터이다.)
          let test = function(a, b, ...theArgs) {
                    console.log(a);
                    console.log(b);
                    console.log(theArgs);
                }
                test(1, 2, 3, 4, 5);
                
      - Array이므로 sort, map, forEach, pop 메소드 사용이 가능하다.
      - rest parameter를 변수에 담기
        function f(...[a,b,c]) => {
            return a+b+c;
        }
        
        console.log(f(1)) //NaN (b와 c가 선언되지 않음.)
        console.log(f(1,2,3)) //6 -> 정상
        console.log(f(1,2,3,4)) //6 -> 네번째 파라미터가 할당되지 않음
      2. 기본 매개변수 (Default parameter)
       - 함수에 전달된 파라미터의 값이 undefined이거나 전달된 값이 없을 떄, 초기화 설정된 값 (함수도 가능)
       
       - 구조 분해 할당도 가능
      
       ref) https://beomy.tistory.com/17?category=591557
       
     ** 바인딩(binding)이란?
      - 속성과 개체 사이 또는 연산과 기호 사이와 같은 연관(Association)이다.
      - 이름을 속성에 연관(bind)시키는 과정
     ** 할당(allocating)이란?
      - 기억 장소 할당 : 변수에 메모리 공간을 바인딩하는 과정.