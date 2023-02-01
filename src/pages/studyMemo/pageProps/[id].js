import Link from "next/link";
import React, { useEffect, useState } from 'react';

/**
 * next의 컴포넌트들(보통 page 컴포넌트)은
 * 가장 먼저 요청을 받는 _app과 _document에 호출되어 그들이 전달한
 * pageProps를 받고, 아래의 function을 export하면 렌더링 시점과
 * 방법에 대한 핸들링을 할 수 있다.
 * 
 * 1. `getServerSideProps`
 * * 짧: 페이지를 pre-render할 때 필요한 데이터를 추가할 수 있다.
 * * 길: 선언된 페이지 컴포넌트를 서버가 렌더링 하여 응답값으로 전달할 때(response)
 * 인터셉트하여 전달하기 전 페이지 컴포넌트에 새로운 데이터를 삽입하거나, 다른 서버와 api 통신을 하는 등의 작업을 수행할 수 있다.
 * 이때 return하는 object의 key값은 props를 준수하여야 한다.
 * ---
 * 추가적으로 You should not access 'res' after getServerSideProps resolves가 발생하는 경우
 * 이는 getServerSideProps()에 parameter를 전달할 시 서버가 응답하는 데이터를 받는데,
 * getServerSideProps이 실행되고 난뒤 res의 데이터가 변경되는데, 페이지 컴포넌트에 전달되는 res가 변동이 적용된 데이터인지
 * 확인할 수 없다는 에러이다. 
 * => 고냥 getServerSideProps에 Paremeter를 사용하지 않거나, res 빼고 다른 데이터만 사용하면 된다.
 * 
 * => 고럼 아래의 페이지 컴포넌트 내부에서 useEffect 선언하고 api 찔러서 데이터 받아오면 되지 않냐!
 * 라고 한다면 아래는 클라이언트에서 실행되고 이 getServeriSideProps는 서버에서 실행되기 때문에 클라이언트에게 실행에 대한 결과 등을 숨길 수 있다.
 * => 백엔드와의 통신을 클라이언트에서 하지 말고 웹서버에서 통신하고 렌더링까지 원큐에해서 완성품을 클라이언트에게
 * 
 * */
// export async function getServerSideProps({req}) {
//   // 여기 parameter엔 페이지를 렌더링하는 서버가 전달하는 req, res 정보가 담겨있다. res는 데이터 변동 때문에 핸들링을 시도하면 warning이 발생하므로 res 빼고 쓰거나 쓰지 말것.
//   console.log(111111);
//   return {
//     // api 요청 및 다른 로직 수행 가능
//     // const mockupData = await fetch('httpppp/mockup') // api 요청을 사용할 수 있어 async를 붙여서 선언한것으로 보인다.

//     // key값은 props 고정
//     props: {
//       // props 내부의 값은 이름제한 없음
//       awesomeData: {req}
//     }
//     // function이름대로 서버에서 생성한 props을 페이지 컴포넌트에 전달하는 함수. 라고 보면 될듯
//   };
// }



/**
 * 2. `getStaticProps`
 * * 서버상에서만 프로젝트가 빌드될 때 실행되며, 클라이언트에서는 실행되지 않는다.
 * 이 점을 이용하여 DB에 접근하는 기능을 작성할 수 있다.
 * * 사용자가 페이지를 요청하기 전에 미리 데이터를 세팅하고 페이지를 렌더링한다.
 * => 사용자의 요청으로 동적으로 바뀌는것이 아니라 회사 안내 페이지처럼 항상 고정된 데이터를 보여주는 페이지에 사용하는 기능.
 * 빌드 시에 보여줄 페이지를 준비하고 빠르게 보여줄 수 있다는 점.(어차피 불러올 데이터를 알고 있으니 미리 준비하는것)
 * * props을 세팅한다는 점에서 getServerSideProps와 결과적으로는 같기 때문에 서로 같이 선언할 수 없다.(라고 생각한다.)
 * * 이렇게 생성되고 렌더링된 페이지들은 데이터가 바뀔 일이 없기 때문에 한번 생성해서 계속 재사용된다.
 */
// export async function getStaticProps(context) {
//   console.log(context);
//   return {
//     props:{
//       data: {post: {}}
//     }
//   }
// }

/**
 * 3. `getStaticPaths`
 * * 페이지가 동적 라우팅(여러 페이지)을 지원하고, getStaticProps를 사용할 때, 동적 라우팅으로 보여줄 페이지들을 미리 만들어 두는 함수이다.
 * 아래의 paths에서 params에 동적라우팅의 페이지 변수를 기입하면 (아마 getStatidProps처럼 빌드 시 미리 렌더링 해 둘 듯)
 * * 여기에서도 api요청을 하고 params에 사용할 데이터를 받아서 로직을 작성할 수 있따.
 */
// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }], // 예시로 사용하는 동적 라우팅의 경로가 /login/[id].js 이니 key를 id로 설정한다.
//     fallback: false, // can also be true or 'blocking'
//   }
// }


/*
  위 방식들이 Next가 지원하는 ssr과 static generation인 pre-rendering 방식이며, 위 방법을 섞어 두가지 방법을 혼용한 hybrid next 앱을 만들 수 있다.
  ssr은 요청마다 렌더링 되기 때문에 재사용 안되고, static은 고정 데이터를 사용하기 때문에 재사용된다.

  next에서는 성능상의 이유로 static을 추천한다는데, 데이터 변동되는 부분을 제외하면 다 이걸로 떼우는게 ux 측면을 크게 향상 시킬 수 있을듯하다.
 */


export default function index(props) {
  const [a, setabc] = useState()
  const abc = async () => {
    try {
      const bbb = await fetch('/api/hello');
      const aaa = bbb.json()
      console.log("띠용해요", aaa, bbb.body);
      setabc(aaa)
      return aaa
    } catch (error) {
      return error
    }
    
    
  }
  useEffect(() => {
    console.log(2222222222);
    console.log(props);
    
    abc()
  }, []);

  return (

    <main>
      <h1>Login</h1>
      {/* <h1>{!!a ? a : "없음"}</h1> */}
      h1
      <Link href={'/'}>SSCK 메인페이지</Link>
    </main>
  );
}
