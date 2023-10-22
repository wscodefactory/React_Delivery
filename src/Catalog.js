import React from 'react';

function SubComponent() {
    return (
        <div>
            <header className="Catalog">
            <img className="realDew1" alt="realdew" src={require("./realDew1.png").default} />
            <h2>메인 내의 하위 컴포넌트</h2>
            </header>
        </div>
    );
}

export default SubComponent;
