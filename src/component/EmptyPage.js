import { Link } from "react-router-dom"

export default function EmptyPage() {
  return (
    <>
      <p>🚨 <strong>잘못된 접근입니다.</strong></p>
      <Link to="/" className="link">메인으로 돌아가기</Link>
    </>
  )
}