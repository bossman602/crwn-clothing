import React from 'react';
import Directory from '../../components/directory/directory.component';
import MenuItem from '../../components/menu-item/menu-item.component';
import './homepage.styles.scss';

export const HomePage = () => (
    <div className='homepage'>
        <Directory>
            <MenuItem />
        </Directory>

    </div>
)

export default HomePage;