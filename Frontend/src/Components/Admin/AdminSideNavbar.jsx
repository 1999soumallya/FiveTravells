import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminSideNavbar() {
    return (
        <>
            <div id="sidebar" class='active'>
                <div class="sidebar-wrapper active">
                    <div class="sidebar-header">
                        <img src="assets/images/logo.svg" alt="" srcset="" />
                    </div>
                    <div class="sidebar-menu">
                        <ul class="menu">
                            <li class='sidebar-title'>Main Menu</li>
                            <li class="sidebar-item active ">
                                <Link to="/admin" class='sidebar-link'>
                                    <i data-feather="home" width="20"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li class="sidebar-item has-sub">
                                <Link to="#" class='sidebar-link'>
                                    <i data-feather="triangle" width="20"></i>
                                    <span>Components</span>
                                </Link>
                                <ul class="submenu ">
                                    <li> <Link to="component-alert.html">Alert</Link> </li>
                                    <li> <Link to="component-badge.html">Badge</Link> </li>
                                    <li> <Link to="component-breadcrumb.html">Breadcrumb</Link> </li>
                                    <li> <Link to="component-buttons.html">Buttons</Link> </li>
                                    <li> <Link to="component-card.html">Card</Link> </li>
                                    <li> <Link to="component-carousel.html">Carousel</Link> </li>
                                    <li> <Link to="component-dropdowns.html">Dropdowns</Link> </li>
                                    <li> <Link to="component-list-group.html">List Group</Link> </li>
                                    <li> <Link to="component-modal.html">Modal</Link> </li>
                                    <li> <Link to="component-navs.html">Navs</Link> </li>
                                    <li> <Link to="component-pagination.html">Pagination</Link> </li>
                                    <li> <Link to="component-progress.html">Progress</Link> </li>
                                    <li> <Link to="component-spinners.html">Spinners</Link> </li>
                                    <li> <Link to="component-tooltips.html">Tooltips</Link> </li>
                                </ul>
                            </li>
                            <li class="sidebar-item has-sub">
                                <Link to="#" class='sidebar-link'>
                                    <i data-feather="briefcase" width="20"></i>
                                    <span>Extra Components</span>
                                </Link>
                                <ul class="submenu ">
                                    <li> <Link to="component-extra-avatar.html">Avatar</Link> </li>
                                    <li> <Link to="component-extra-divider.html">Divider</Link> </li>
                                </ul>
                            </li>
                            <li class='sidebar-title'>Forms &amp; Tables</li>
                            <li class="sidebar-item has-sub">
                                <Link to="#" class='sidebar-link'>
                                    <i data-feather="file-text" width="20"></i>
                                    <span>Form Elements</span>
                                </Link>
                                <ul class="submenu ">
                                    <li> <Link to="form-element-input.html">Input</Link> </li>
                                    <li> <Link to="form-element-input-group.html">Input Group</Link> </li>
                                    <li> <Link to="form-element-select.html">Select</Link> </li>
                                    <li> <Link to="form-element-radio.html">Radio</Link> </li>
                                    <li> <Link to="form-element-checkbox.html">Checkbox</Link> </li>
                                    <li> <Link to="form-element-textarea.html">Textarea</Link> </li>
                                </ul>
                            </li>
                            <li class="sidebar-item ">
                                <Link to="form-layout.html" class='sidebar-link'>
                                    <i data-feather="layout" width="20"></i>
                                    <span>Form Layout</span>
                                </Link>
                            </li>
                            <li class="sidebar-item ">
                                <Link to="form-editor.html" class='sidebar-link'>
                                    <i data-feather="layers" width="20"></i>
                                    <span>Form Editor</span>
                                </Link>
                            </li>
                            <li class="sidebar-item ">
                                <Link to="table.html" class='sidebar-link'>
                                    <i data-feather="grid" width="20"></i>
                                    <span>Table</span>
                                </Link>
                            </li>
                            <li class="sidebar-item ">
                                <Link to="table-datatable.html"
                                    class='sidebar-link'>
                                    <i data-feather="file-plus" width="20"></i>
                                    <span>Datatable</span>
                                </Link>
                            </li>
                            <li class='sidebar-title'>Extra UI</li>
                            <li class="sidebar-item has-sub">
                                <Link to="#" class='sidebar-link'>
                                    <i data-feather="user" width="20"></i>
                                    <span>Widgets</span>
                                </Link>
                                <ul class="submenu ">
                                    <li> <Link to="ui-chatbox.html">Chatbox</Link> </li>
                                    <li> <Link to="ui-pricing.html">Pricing</Link> </li>
                                    <li> <Link to="ui-todolist.html">To-do List</Link> </li>
                                </ul>
                            </li>
                            <li class="sidebar-item has-sub">
                                <Link to="#" class='sidebar-link'>
                                    <i data-feather="trending-up" width="20"></i>
                                    <span>Charts</span>
                                </Link>
                                <ul class="submenu ">
                                    <li> <Link to="ui-chart-chartjs.html">ChartJS</Link> </li>
                                    <li> <Link to="ui-chart-apexchart.html">Apexchart</Link> </li>
                                </ul>
                            </li>
                            <li class='sidebar-title'>Pages</li>
                            <li class="sidebar-item has-sub">
                                <Link to="#" class='sidebar-link'>
                                    <i data-feather="user" width="20"></i>
                                    <span>Authentication</span>
                                </Link>
                                <ul class="submenu ">
                                    <li> <Link to="auth-login.html">Login</Link> </li>
                                    <li> <Link to="auth-register.html">Register</Link> </li>
                                    <li> <Link to="auth-forgot-password.html">Forgot Password</Link> </li>
                                </ul>
                            </li>
                            <li class="sidebar-item has-sub">
                                <Link to="#" class='sidebar-link'>
                                    <i data-feather="alert-circle" width="20"></i>
                                    <span>Errors</span>
                                </Link>
                                <ul class="submenu ">
                                    <li> <Link to="error-403.html">403</Link> </li>
                                    <li> <Link to="error-404.html">404</Link> </li>
                                    <li> <Link to="error-500.html">500</Link> </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
                </div>
            </div>
        </>
    )
}
