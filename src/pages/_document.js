import { Html, Head, Main, NextScript } from "next/document";

/**
 *
 * next는 파일 이름으로 정해진 기능들을 수행한다.
 * * _document.js: 클라이언트의 요청 시 가장 먼저 실행되는 _app.js 다음에 실행되며, ~~공통적으로 사용하는 `<head>`, `<bod>`등의 태그 안에 들어갈 내용을 명시할 때 사용한다.
 * 추가적으로 'next/document'의 `Head`와 next/head의 `Head`는 용도가 다른데,
 * next/document의 `Head`는 문서 전체에 대한 공통사항을 다루는 여기 _document에서
 * 전역적으로 내용을 명시할 때 사용하며,
 * next/head의 Head는 각각의 페이지에서 개별적인 `<Head>` 태그를 명시할 때 사용한다.~~
 * 이전 버전의 next에서는 위의 용도로 사용되었는지 모르지만, 지금의 버전에서 _document는 (아마도)
 * 실제 내용이 렌더링 되기 전에 임시로 initial pre-render 되는 목적으로 사용하기 때문에 이 컴포넌트에서
 * 공통의 기능을 지원하는것은 권장되지 않는다. 따라서 공통적으로 명시가 필요한 부분은 _app.js에 명시하는것이
 * 더 바람직하다.(고 번역기가 말한것 같다.)
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
