# codespitz step 3 function & OOP

## prologue

* CS에서의 용어 정의
    * domain에 따라
    * routine
    * protocol
* CS에서는 정확함
    * 공리가 없음
    * 재현 가능함
* 이 강의에서는
    * 언어론
    * 프로그래밍 기초론

## sub routine flow

* ...
* 상대적인 관점
    * OS vs Chrome vs javascript
* return point
* argument, return
* javascript 에서는 모두 return 값을 가짐(undefined)
    * undefined vs undefined
* flow
    * up > down, left > right
        * but assignment(right > left)

## communicate with routine

...

## sub routine in sub routine

* ...
* subroutine 호출 순간 메모리를 기억(keep)
* call by call stack

## value vs reference

* value
    * 값을 복사
* reference
    * 메모리 포인터 가리킴
* 언어에서 정함
    * String
        * in java
        * in javascript
* not value => refernece

### value

* arguments: value, return: value
    * state safe

### reference

* arguments: reference, ...
    * state unsafe
    * state safe
        * arguments readonly
        * local variables: new object
        * return: new object
        * !객체 리터럴 순서
            * ES6 에서는 보장
                * HashMap => LinkedHashMap

## structured design

* by 래리 콘스탄틴
    * 높은 응집도
        * Math 와 관련된 것들이 모여있음
    * 낮은 결합도
        * Math 를 쉽게 
* coupling model
    * vs dependency

### coupling

* 강결합
    * content
    * common
    * external
        * 나쁘지만 회피할 수 없음(관리대상)
    * control
        * factory pattern 에서 발생할 수 있는 경우
            * 제어문(switch)으로 발생
        * strategy pattern 으로 해결 할 수 있음
            * 객체지향으로 해결
* 유사약결합
    * stamp
        * 역할에 맞게 범위를 정해서 넘겨주어야 함.
        * data.count => count
* 약결합
    * data

### cohesion

* coincidental
* logical
* temporal
* procedural
    * 순서
* communicational
    * 역할
* sequential
    * with communicational
    * method chaining
    * builder pattern
* functional

### 모순

* 응집도가 높아지면 결합도가 높아짐
* 응집도가 낮아지면 결합도가 낮아짐
* 합치의 수준을 결정(균형을 맞춤)

## role of sub routine
