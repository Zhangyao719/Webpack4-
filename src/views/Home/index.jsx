import React from 'react';
// import moment from 'moment';
import dayjs from 'dayjs';
import avatarSrc from '../../assets/images/avatar.jpg';

import './index.scss';

export default function Home() {
    return (
        <div className="home">
            Home首页123
            <br />
            {/* {moment().format('YYYY-MM-DD HH:mm:ss')} */}
            <br />
            {dayjs().format('YYYY-MM-DD HH:mm:ss')}
            <img src={avatarSrc} alt="avatar" width={50} height={50} />
        </div>
    );
}
