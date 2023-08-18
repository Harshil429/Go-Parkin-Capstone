import React from "react";
import "./styles/admin.css";
import logo from "./img/logo.png";

function Admin() {
  return (
    <div>
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <nav
          class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
          id="navbarVertical"
        >
          <div class="container-fluid">
            <button
              class="navbar-toggler ms-n2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarCollapse"
              aria-controls="sidebarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <a
              class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0 text-center"
              href="#"
            >
              <img src={logo} alt="..." />
            </a>

            <div class="navbar-user d-lg-none">
              <div class="dropdown">
                <a
                  href="#"
                  id="sidebarAvatar"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div class="avatar-parent-child">
                    <img
                      alt="Image Placeholder"
                      src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                      class="avatar avatar- rounded-circle"
                    />
                    <span class="avatar-child avatar-badge bg-success"></span>
                  </div>
                </a>

                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="sidebarAvatar"
                >
                  <a href="#" class="dropdown-item">
                    Profile
                  </a>
                  <a href="#" class="dropdown-item">
                    Settings
                  </a>
                  <a href="#" class="dropdown-item">
                    Billing
                  </a>
                  <hr class="dropdown-divider" />
                  <a href="#" class="dropdown-item">
                    Logout
                  </a>
                </div>
              </div>
            </div>

            <div class="collapse navbar-collapse" id="sidebarCollapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-house"></i> Dashboard
                  </a>
                </li>
              </ul>

              <div class="mt-auto"></div>
              <hr></hr>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-person-square"></i> Account
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-box-arrow-left"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="h-screen flex-grow-1 overflow-y-lg-auto">
          <header class="bg-surface-primary border-bottom pt-6">
            <div class="container-fluid">
              <div class="mb-npx">
                <div class="row align-items-center">
                  <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                    <h1 class="h2 mb-0 ls-tight">Application</h1>
                  </div>

                  <div class="col-sm-6 col-12 text-sm-end">
                    <div class="mx-n1 d-inline-flex">
                      <a
                        href="#"
                        class="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                      >
                        <span class=" pe-2">
                          <i class="bi bi-pencil"></i>
                        </span>
                        <span>Edit</span>
                      </a>
                      <a
                        href="#"
                        class="btn d-inline-flex btn-sm btn-primary mx-1"
                      >
                        <span class=" pe-2">
                          <i class="bi bi-plus"></i>
                        </span>
                        <span>Create</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main class="py-6 bg-surface-secondary">
            <div class="container-fluid">
              <div class="row g-6 mb-6">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            New location added
                          </span>
                          <span class="h3 font-bold mb-0">100</span>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-up me-1"></i>20%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Canceled customers
                          </span>
                          <span class="h3 font-bold mb-0">215</span>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-up me-1"></i>30%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Repeat Customers
                          </span>
                          <span class="h3 font-bold mb-0">140</span>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-down me-1"></i>5%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Active Customer
                          </span>
                          <span class="h3 font-bold mb-0">95%</span>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-up me-1"></i>10%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card shadow border-0 mb-7">
                <div class="card-header">
                  <h5 class="mb-0">Applications</h5>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Location</th>
                        <th scope="col">Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Robert Fox
                          </a>
                        </td>
                        <td>Feb 15, 2021</td>

                        <td>Waterloo</td>
                        <td>
                          <span class="badge badge-lg badge-dot">
                            <i class="bg-success"></i>Active
                          </span>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Darlene Robertson
                          </a>
                        </td>
                        <td>Apr 15, 2021</td>

                        <td>Cambridge</td>
                        <td>
                          <span class="badge badge-lg badge-dot">
                            <i class="bg-warning"></i>Pending
                          </span>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Theresa Webb
                          </a>
                        </td>
                        <td>Mar 20, 2021</td>

                        <td>Nigra</td>
                        <td>
                          <span class="badge badge-lg badge-dot">
                            <i class="bg-success"></i>Active
                          </span>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Cody Fisher
                          </a>
                        </td>
                        <td>Apr 10, 2021</td>

                        <td>Hemilton</td>
                        <td>
                          <span class="badge badge-lg badge-dot">
                            <i class="bg-danger"></i>Canceled
                          </span>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Robert Fox
                          </a>
                        </td>
                        <td>Feb 15, 2021</td>

                        <td>Brampton</td>
                        <td>
                          <span class="badge badge-lg badge-dot">
                            <i class="bg-success"></i>Active
                          </span>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer border-0 py-5">
                  <span class="text-muted text-sm">
                    Showing 10 items out of 250 results found
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Admin;
