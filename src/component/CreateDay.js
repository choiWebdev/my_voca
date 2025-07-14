import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateDay() {
  const days = useFetch(`http://localhost:3001/days`);
  const navigate = useNavigate();
  function createDay() {
    if (window.confirm("Day를 추가하시겠습니까?")) {
      fetch(`http://localhost:3001/days`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: days.length + 1,
        }),
      }).then(res => {
        if (res.ok) {
          alert("Day 추가 완료!");
          navigate("/");
        }
      });
    }
  }
  return (
    <>
      <h2>현재 일수: {days.length}</h2>
      <button onClick={createDay}>Day 추가</button>
    </>
  );
}
