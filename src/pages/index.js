import Head from "next/head";
import Link from "next/link";
import React, {useEffect} from "react";
// import EditorJS from '@editorjs/editorjs';
// console.log(EditorJS);
import dynamic from 'next/dynamic';
// const EditorJS = dynamic(() => import('@editorjs/editorjs'), { ssr: false });
// const EditorJS = dynamic(() => import('@editorjs/editorjs'), { ssr: false });
// const Editor = new EditorJS();
// console.log(EditorJS);
/**
 * * index.js: next는 pages 폴더를 기준으로, 요청받은 url에 해당하는 컴포넌트를 렌더링한다.
 * 그리고 이때 index.js란 이름을 가진 js파일을 찾아내어 화면에 띄워준다.
 * * `<Link>`: next에서는 페이지의 이동(라우팅)에 next/Link의 `<Link>` 사용을 권장한다. 이는 `<a>` 태그를 생성하고 SEO 또한 지원하며, 페이지를 이동할때 페이지를 다시 로드하지 않아(새로고침) SPA처럼 '보여지게' 한다.
 * * 권장되지 않는 라우팅 방식
 *   * `<a>`: 순수 HTML 요소로, 사용자가 원하는 페이지로 이동시키며 '페이지를 새로고침 한다.'
 *   * `router.push()`: 자바스크립트를 사용하여 페이지를 이동하는 방식인데, 이 때문에 SEO를 지원할 수 없고, 이렇게 명시한 링크는 크롤링 되지 않는다.
 */

const Editor = dynamic(() => import('components/Editor'), { ssr: false });

export default function index() {

  return (
    <>
      <Head>
        {/* <meta name="description" content="프론트엔드 이야기" />
        <meta name="author" content="chan" />
        <meta name="keyword" content="frontend, react" /> */}
      </Head>
      <main>
        <h1>메인 페이지에용</h1>
        <Link href={"/studyMemo/pageProps/1"}>GoToStudy</Link>
        <Editor />
      </main>
    </>
  );
}
