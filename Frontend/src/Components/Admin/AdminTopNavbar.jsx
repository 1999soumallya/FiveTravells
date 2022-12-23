import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminTopNavbar() {
    return (
        <>
            <div id="main">
                <nav class="navbar navbar-header navbar-expand navbar-light">
                    <Link class="sidebar-toggler" href="#"><span class="navbar-toggler-icon"></span></Link>
                    <button class="btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav d-flex align-items-center navbar-light ms-auto">
                            <li class="dropdown nav-icon">
                                <Link href="#" data-bs-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                    <div class="d-lg-inline-block">
                                        <i data-feather="bell"></i>
                                    </div>
                                </Link>
                                <div class="dropdown-menu dropdown-menu-end dropdown-menu-large">
                                    <h6 class='py-2 px-4'>Notifications</h6>
                                    <ul class="list-group rounded-none">
                                        <li class="list-group-item border-0 align-items-start">
                                            <div class="avatar bg-success me-3">
                                                <span class="avatar-content"><i data-feather="shopping-cart"></i></span>
                                            </div>
                                            <div>
                                                <h6 class='text-bold'>New Order</h6>
                                                <p class='text-xs'> An order made by Ahmad Saugi for product Samsung Galaxy S69 </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="dropdown nav-icon me-2">
                                <Link href="#" data-bs-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                    <div class="d-lg-inline-block">
                                        <i data-feather="mail"></i>
                                    </div>
                                </Link>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <Link class="dropdown-item" href="#"><i data-feather="user"></i> Account</Link>
                                    <Link class="dropdown-item active" href="#"><i data-feather="mail"></i> Messages</Link>
                                    <Link class="dropdown-item" href="#"><i data-feather="settings"></i>
                                        Settings</Link>
                                    <div class="dropdown-divider"></div>
                                    <Link class="dropdown-item" href="#"><i data-feather="log-out"></i> Logout</Link>
                                </div>
                            </li>
                            <li class="dropdown">
                                <Link href="#" data-bs-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                    <div class="avatar me-1">
                                        <img src="assets/images/avatar/avatar-s-1.png" alt="" srcset="" />
                                    </div>
                                    <div class="d-none d-md-block
                                        d-lg-inline-block">Hi, Saugi</div>
                                </Link>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <Link class="dropdown-item" href="#"><i data-feather="user"></i> Account</Link>
                                    <Link class="dropdown-item active" href="#"><i data-feather="mail"></i> Messages</Link>
                                    <Link class="dropdown-item" href="#"><i data-feather="settings"></i> Settings</Link>
                                    <div class="dropdown-divider"></div>
                                    <Link class="dropdown-item" href="#"><i data-feather="log-out"></i> Logout</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}
