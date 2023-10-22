import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function mypage() {
    const movePage = useNavigate();

    function gohome(){
        movePage('/drink/Order2');
    }
    return (
    <div className="mypage">
    마이페이지 입니다.
    <button onClick={gohome}>홈으로이동</button>
    </div>
    );
}