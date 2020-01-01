<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light shadow">
            <div class="container">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <!-- <a class="nav-item nav-link active" href="#">Dashboard</a>
                        <a class="nav-item nav-link" href="#">User</a> -->
                        <router-link 
                                    to="/"
                                    class="nav-item nav-link text-center"
                                    activeClass="active">
                                        <i class="fas fa-tachometer-alt"></i>
                                        Dashboard
                        </router-link>        
                        <router-link 
                                    to="/user"
                                    class="nav-item nav-link text-center"
                                    activeClass="active">
                                        <i class="fas fa-users"></i>
                                        Pengguna
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    .navbar {
        padding: 0px;
        margin-bottom: 30px;
        .navbar-nav {
            // margin-left: 20px;
            .nav-item {
                width: 150px;
            }
            .nav-item:focus, .nav-item:hover{
                border-bottom: 3px solid #007BFF;
            }
        }
    }
</style>