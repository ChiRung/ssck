import Head from "next/head";
// import '../styles/default.css'
import 'styles/default.css'

/**
 * next는 파일 이름으로 정해진 기능들을 수행한다.
 * * _app.js: 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트, 페이지에 공통적으로 적용할 기능을 명시할 수 있다.
 * @param Component 서버가 요청받은 url에 해당하는 페이지 컴포넌트
 * @param pageProps ~`getInitialProps`~, `getStaticProps`, `getServerSideProps`, `getStaticPaths` 중 하나를 통해 fetching한 초기 속성값이 된다.
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SSCK</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
