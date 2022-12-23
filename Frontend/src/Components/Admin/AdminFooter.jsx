import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminFooter() {
    return (
        <>
            <footer>
                <div class="footer clearfix mb-0 text-muted">
                    <div class="float-start">
                        <p>Copyright © 2018 5travellers.com. </p>
                    </div>
                    <div class="float-end">
                        <p>Crafted with <span class='text-danger'><i data-feather="heart"></i></span> by <Link to="https://saugi.me">Saugi</Link></p>
                    </div>
                </div>
            </footer>
        </>
    )
}
