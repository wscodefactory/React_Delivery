import React from 'react';
import Catalog from './Catalog';
import { useNavigate } from 'react-router-dom';

function MainComponent() {
    const navigate = useNavigate();

    const clickButton = () => {
      // 'Detail' 페이지로 이동
    navigate('/detail');
    };
    return (
        <div > {/* 주요 컨테이너 */}
            <div> {/* 버튼 컨테이너 */}
                <h1>
                    <button className='button1' onClick={clickButton}>주문하기</button>
                </h1>
            </div>

            <div > {/* Catalog 컨테이너 */}
                <Catalog />
            </div>
        
        </div>
    );
}

export default MainComponent;
