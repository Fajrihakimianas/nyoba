import React from 'react';
import Button from 'Element/Button';

export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location === path ? " active" : "" // kalau path sesuai yang kita minta, maka linknya active dan dikasih stylenya di scss
    }

    return (
        <header className="spacing-sm">
            <nav className="navbar navbar-expand-lg navbar-light">
                <h2>Rachel Smith</h2>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item${getNavLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="/">
                                About
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/Resume")}`}>
                            <Button className="nav-link" type="link" href="/Resume">
                                Resume
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/Education")}`}>
                            <Button className="nav-link" type="link" href="/Education">
                                Education
                            </Button>
                        </li>
                        <li className={`nav-item${getNavLinkClass("/Portofolio")}`}>
                            <Button className="nav-link" type="link" href="/Portofolio">
                                Portofolio
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
