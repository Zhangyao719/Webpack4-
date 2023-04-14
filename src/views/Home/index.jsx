import React from 'react';
import avatarSrc from '../../assets/images/avatar.jpg';

import './index.scss';

export default function Home() {
    return (
        <div className="home">
            Home首页123
            <img src={avatarSrc} alt="avatar" width={50} height={50} />
        </div>
    );
}
