'use client'

import { useEffect, useState } from 'react'

import clsx from 'clsx'
import Image from 'next/image'

import NavLink from '/components/NavLink/NavLink'
import Button from '/components/Button/Button'
import Menu from '/components/Menu/Menu'

import Logo from 'public/images/logo.png'

import s from './Header.module.sass'
import MenuButton from 'components/Menu/MenuButton'

export default function Header({ settings }) {
    const [hasScrolled, setHasScrolled] = useState(false)
    const [hideHeader, setHideHeader] = useState(false)
    const [mobileMenuOpen, setMenuOpen] = useState(false)

    const menu = settings?.menuItems

    useEffect(() => {
        let lastScrollTop = 0

        window.addEventListener("scroll", function () {
            var st = window.scrollY || document.documentElement.scrollTop
            if (window.scrollY > 0) {
                setHasScrolled(true)
            } else {
                setHasScrolled(false)
            }
            if (st > lastScrollTop && window.scrollY > 100) {
                setHideHeader(true)
            } else if (st < lastScrollTop) {
                setHideHeader(false)
            }
            lastScrollTop = st <= 0 ? 0 : st
        }, false)
    }, [settings])

    return (
        <header className={clsx(s.Header, 'Container', hideHeader ? s.Hide : '', hasScrolled ? s.HasScrolled : '')}>
            <NavLink href={'/'}>
                <Image
                    src={Logo}
                    alt="Session Token"
                    // onClick={() => setMenuOpen(false)}
                    priority
                />
            </NavLink>
            <Menu menu={menu} />
            <div className={s.Buttons}>
                <Button
                    title={'Buy $SENT'}
                    small
                    iconName={'logoWithCircle'}
                />
                <MenuButton
                    open={mobileMenuOpen}
                    setOpen={setMenuOpen}
                />
            </div>
        </header>
    )
}
