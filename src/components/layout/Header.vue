<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="navbar-brand mx-auto">Project-1</a></li>
                </ul>
                <ul class="nav navbar-nav">
                    <li class="nav-item dropdown">
                        <a 
                        class="nav-link dropdown-toggle" 
                        href="#" 
                        id="navbarDropdown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                            <i class="far fa-user-circle"></i>
                            Admin 1
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href=""><i class="fas fa-user-plus"></i>Add User</a>
                            <a class="dropdown-item" href=""><i class="fas fa-sign-out-alt"></i>Log Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .navbar {
        .navbar-brand {
            float: none;
        }
        .dropdown-menu {
            i {
                margin-right: 10px;
            }
        }
    }
</style>