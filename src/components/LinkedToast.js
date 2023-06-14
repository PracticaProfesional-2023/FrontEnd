import * as React from 'react';
import { Link } from 'react-router-dom';

const LinkedToast = (link) => (
    <div>
        <Link to={link}  target='_blank'>"Check your code here"</Link>
    </div>
);

export default LinkedToast