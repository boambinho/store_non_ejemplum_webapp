<template>

    <nav uk-dropnav class="uk-navbar-container uk-margin">
        <div class="uk-grid uk-grid-small uk-flex-between uk-padding-small">

            <!-- Left Side Navbar-->
            <div class="uk-flex uk-flex-middle">
                <ul class="uk-subnav">
                    <!-- Home -->
                    <li>
                        <router-link to="/" class="uk-flex uk-flex-column uk-flex-middle">
                            <i class="fa-solid fa-house"></i>
                            Home
                        </router-link>
                    </li>
                </ul>
            </div>

            <!-- Center side Navbar-->
            <div class="uk-flex uk-flex-middle">
                <ul class="uk-subnav">
                    <!-- Categories dropnav -->
                    <li class="uk-flex uk-flex-middle">
                        <a href="#"> Categories <span uk-drop-parent-icon></span></a>
                        <div class="uk-dropdown">
                            <ul class="uk-nav uk-dropdown-nav">
                                <li class="uk-active">
                                    <a href="#">Offers </a>
                                </li>
                                <li>
                                    <a href="#">Shoes </a>
                                </li>
                                <li>
                                    <a href="#">Pants </a>
                                </li>
                                <li>
                                    <a href="#">Shirts </a>
                                </li>
                                <li>
                                    <a href="#">Sweatshirts</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <!-- Design dropdown -->
                    <li class="uk-flex uk-flex-middle">
                        <a href="#"> Design <span uk-drop-parent-icon></span></a>
                        <div class="uk-dropdown">
                            <ul class="uk-nav uk-dropdown-nav">
                                <li class="uk-active"><a href="#">Sports</a></li>
                                <li><a href="#">Formal</a></li>
                                <li><a href="#">Casual</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <!-- Right side Navbar -->

            <div class="uk-flex uk-flex-middle">
                <ul class="uk-subnav">
                <!-- Search -->
                    <li>
                        <a href="#" class="uk-flex uk-flex-column uk-flex-middle">
                            <i class="fa-solid fa-search"></i>
                            Search
                        </a>
                    </li>
                    <!-- Login -->
                    <li>
                        <router-link to="/login" class="uk-flex uk-flex-column">
                            <i class="fa-solid fa-user"></i>
                            Login
                        </router-link>
                    </li>
                    <li>
                        <router-link to="#" class="uk-flex uk-flex-column">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

</template>