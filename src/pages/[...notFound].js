import Link from "next/link";
import { useRouter } from "next/router";

/**
 * next 동적 라우팅의 페이지 컴포넌트의 이름을 [...slug]로 작성하면
 * 해당 경로 이하의 중첩되는 모든 페이지가 이 페이지로 이동한다.
 *  존재하지 않는 페이지로 이동할 때 현재 페이지를 클라이언트로 return한다.
 */
export default function NotFound() {
    const router = useRouter()
    const goback = () => {
        // router.back()
    console.log(router);}

  return (
    <>
    <main>
        <h1>page not found</h1>
        {/* <Link href={'/'}>GoToBack</Link> */}
        {/* <Link onClick={goback}>GoToBack</Link> */}
        <a onClick={goback}>GoToBack</a>
    </main>
    </>
  )
}
