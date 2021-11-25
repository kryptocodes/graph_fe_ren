import React from 'react'

interface NavBarProps {

}

const NavBar: React.FC<NavBarProps> = ({}) => {
        return (
            <nav className="mx-auto p-4">
                <a className="text-2xl font-bold" href="#">Graph</a>
            </nav>
        );
}

export default NavBar