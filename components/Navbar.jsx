import React from 'react'

const Navbar = () => {
    const NavMenu = [
        {
            id: 1,
            title: 'podcast studio',
            path: '/',
            delay: 0.1,
        },
        {
            id: 2,
            title: 'video production',
            path: '/',
            delay: 0.2,
        },
        {
            id: 3,
            title: 'business consultancy',
            path: '/',
            delay: 0.3,
        },
        {
            id: 4,
            title: 'marketing contact',
            path: '/',
            delay: 0.4,
        }
    ]

    const slideDown = (delay) => {
        return {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.8,
                    delay: delay,
                }
            }
        }
    }

    return (
        <nav className='container flex m-auto justify-center pt-8 z-1 absolute top-0'>
            <ul className='flex gap-6'>
                {NavMenu.map((menu) => (
                    <li
                        variants={slideDown(menu.delay)}
                        initial="initial"
                        animate="animate"
                        key={menu.id}
                        className='nav-menu'
                        data-delay={menu.delay}
                    >
                        <a href={menu.path} className='inline-block px-2 py-2 text-2xl text-white'>{menu.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;
