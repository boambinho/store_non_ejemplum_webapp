<template>

    <nav uk-dropnav class="uk-navbar-container uk-margin">
        <div class="uk-grid uk-grid-small uk-flex-between uk-padding-small">

            <!-- Left Side Navbar-->
            <div class="uk-flex uk-flex-middle">
                <ul class="uk-subnav">
                    <!-- Home -->
                    <li>
                        <a href="#" class="uk-flex uk-flex-column uk-flex-middle">
                            <i class="fa-solid fa-house"></i>
                            Home
                        </a>
                    </li>

                    <!-- Search -->
                    <li>
                        <a href="#" class="uk-flex uk-flex-column uk-flex-middle">
                            <i class="fa-solid fa-search"></i>
                            Search
                        </a>
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
                                <li class="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>

                    <!-- Design dropdown -->
                    <li class="uk-flex uk-flex-middle">
                        <a href="#"> Design <span uk-drop-parent-icon></span></a>
                        <div class="uk-dropdown">
                            <ul class="uk-nav uk-dropdown-nav">
                                <li class="uk-active"><a href="#">Deportivo</a></li>
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
                    <!-- Login -->
                    <li>
                        <a href="#" class="uk-flex uk-flex-column">
                            <i class="fa-solid fa-user"></i>
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>