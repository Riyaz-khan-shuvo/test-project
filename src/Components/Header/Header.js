import React from 'react';
import Menu from '../Menu/Menu';

const Header = () => {
    return (
        <div>
            <div className="mb-3 mt-4">
                <div className="d-flex">
                    <div className="mr-5">
                        <h5>Home Page</h5>
                    </div>
                    <div>
                        All Products
                </div>
                </div>
            </div>
            <Menu />
        </div>
    );
};

export default Header;