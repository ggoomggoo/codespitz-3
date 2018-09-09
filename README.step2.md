# step2

## spread ref

* 참조의 전파
    * 안전하지 않음
    * 새로운 객체를 사용할 것
    * ([immutable](#))

## sub routine chain

* 함수 호출시 메모리
    * [Execution Context](#) in javascript
* 함수의 return point 변경
    * 메모리 call stack 해제 가능
    * 언어 수준에서 지원해야 함
    * 꼬리 물기 최적화
    * like for 제어문
        * [stack clear](#)
    * 현재 사파리 브라우저 지원

## tail recursion

* (화면 중) [+] 연산자가 stack 메모리 유발
    * 모든 연산자가 그러함
* 해결 방안
    * 연산을 인자로 넘긴다.
        * 연산을 다음 호출에서 처리하도록(남겨주지 않도록)
    * 자바스크립트에서는 ?(삼항연산자), &&, || 가 스택메모리를 잡지 않는다.
    * 변수, 연산을 남겨두지 않는다.
* [agrregation](#)

```javascript
const sum = (v, prev = 0) => {
    prev += v;
    return (v > 1 ? sum( v - 1) : sum(prev));
}
```

```javascript

```

## static state

* **closure**
* lambda
    * "루틴을 값으로" 라는 관점
* VS runtime state
    * 동적으로 routine 을 만들 수 있음
    * routine 은 flow 를 알고 있는 게아니라 flow와 관계를 맺고 있음.
        * free variables
        * free variable' closure
        * context

## nested closure

* scope -> closure 유발
    * block

## shadowing

* closure 내에서 자유변수에 대한 접근을 막는다.
* 중첩된 클로저에서 자유변수를 보호할 수 있는 유일한 방법
* 권한과 보호

## co routine

* 문을 중간에 저장
* 문을 실행하는 도중에 멈추어서 객체에 저장
* command pattern
* in ES6
    * 제어문을 [record](#) 라는 객체로 저장함
* VS single routine
* yield 키워드([suspension](#))
    * ES6 는 C# 문법이 많이 들어옴
* co routine 내 지역변수로 상태가 공유
* loop -> recuorsive -> return(suspension)
* generator
    * coroutine generator
        * iterrator result object
    * coroutine()
    * coroutine.next()

## link

[OneTab shared tabs.html](https://www.one-tab.com/page/c9h92FdTQzOStW835Jlo1A)

## 과제

ouput:

```text
1 x 1 = 1
1 x 2 = 2
...
9 x 9 = 81
```

```javascript
const generator = function*(i,j){
    // TODO implements
}

for(const [i,j,k] of generator(9,9)){
    console.log(`${i} x ${j} = ${k}`);
}
```