<template>
    <!-- BEGIN: Left Aside -->
    <div id="m_aside_left" class="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
        <!-- BEGIN: Aside Menu -->
        <div id="m_ver_menu" class="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="1" m-menu-dropdown-timeout="500" style="position: relative;">
            <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">

                <router-link v-if="role === 'administrator' || role === 'assistant' || role === 'visitor'"
                             :to="{ name: 'sales' }" v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" >
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon  fa fa-chart-line"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">Ventas</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

                <router-link v-if="role === 'administrator' || role === 'visitor'"
                             :to="{ name: 'current-accounts.visitor' }"
                             v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" >
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon  fa fa-calculator"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">Cuenta Corriente</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

                <router-link v-if="role === 'administrator' || role === 'assistant' || role === 'visitor'"
                             :to="{ name: 'customers' }" v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" >
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon  fa fa-address-book"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">Clientes</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

                <router-link v-if="role === 'administrator' || role === 'assistant'"
                             :to="{ name: 'cancellations-report' }" v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" >
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon  fa fa-chart-area"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">Informe de Cancelaciones</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

                <hr>

                <router-link v-if="role === 'administrator'"
                             :to="{ name: 'expenses' }" v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" >
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon  fa fa-chart-pie"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">Gastos</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

                <router-link v-if="role === 'administrator'"
                             :to="{ name: 'providers' }" v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']">
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon fa fa-box"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">Proveedores</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

                <hr>

                <li v-if="role === 'administrator'" class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
                    <a href="javascript:;" class="m-menu__link m-menu__toggle">
                        <i class="m-menu__link-icon fa fa-chevron-down"></i>
                        <span class="m-menu__link-text">Productos</span>
                        <i class="m-menu__ver-arrow la la-angle-right"></i>
                    </a>
                    <div class="m-menu__submenu "><span class="m-menu__arrow"></span>
                        <ul class="m-menu__subnav">
                            <li class="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                                <span class="m-menu__link"><span class="m-menu__link-text">Productos</span></span>
                            </li>
                            <router-link
                                         :to="{ name: 'products.export.pdf' }"
                                         v-slot="{ href, route, navigate, isActive, isExactActive }"
                            >
                                <li class="m-menu__item " :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" aria-haspopup="true">
                                    <a :href="href" @click="navigate" class="m-menu__link ">
                                        <i class="m-menu__link-icon fa fa-download"></i>
                                        <span class="m-menu__link-text">Exportar Productos</span>
                                    </a>
                                </li>
                            </router-link>
                            <router-link
                                         :to="{ name: 'products.report' }"
                                         v-slot="{ href, route, navigate, isActive, isExactActive }"
                            >
                                <li class="m-menu__item " :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" aria-haspopup="true">
                                    <a :href="href" @click="navigate" class="m-menu__link ">
                                        <i class="m-menu__link-icon fa fa-chart-bar"></i>
                                        <span class="m-menu__link-text">Informe Productos</span>
                                    </a>
                                </li>
                            </router-link>
                        </ul>
                    </div>
                </li>

                <router-link v-if="role === 'administrator'"
                             :to="{ name: 'drugs.list' }"
                             v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" >
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon  fa fa-pills"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">Drogas</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

                <router-link v-if="role === 'administrator'"
                             :to="{ name: 'quoter.list' }"
                             v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" >
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon  fa fa-file-medical-alt"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">Cotizador</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

                <hr>

                <router-link v-if="role === 'administrator'"
                             :to="{ name: 'update-database.index' }"
                             v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" >
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon  fa fa-database"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">CronJobs</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

                <router-link v-if="role === 'administrator'"
                             :to="{ name: 'users' }" v-slot="{ href, route, navigate, isActive, isExactActive }"
                >
                    <li class="m-menu__item" aria-haspopup="true" :class="[isActive && 'm-menu__item--active', isExactActive && 'm-menu__item--active']" >
                        <a class="m-menu__link" :href="href" @click="navigate">
                            <i class="m-menu__link-icon fa fa-users"></i>
                            <span class="m-menu__link-title">
                                    <span class="m-menu__link-wrap">
                                        <span class="m-menu__link-text">Usuarios</span>
                                    </span>
                                </span>
                        </a>
                    </li>
                </router-link>

            </ul>
        </div>
        <!-- END: Aside Menu -->
    </div>
    <!-- END: Left Aside -->
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "LeftAside",
    computed: {
        ...mapGetters({
            user: 'auth/user'
        }),
        role() {
            return this.user? this.user.role.keyname: null
        }
    },
    data() {
        return {
            isActive: false,
            contents: {
                sections: {

                }
            }
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
