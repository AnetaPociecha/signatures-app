import React from 'react'

class Nav extends React.Component {

    render() {
        return (
            <div>
                <ul class="nav justify-content-end bg-dark">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Sign out</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;