<template>
    <section v-if="position === 'left'" class="sidebar-items sidebar-items--left">
        <div class="d-flex sidebar-item">
            <div class="sidebar-image sidebar-image-lotr"/>
            <div class="sidebar-cloud text-center">
                <a href="/lotr">Lotr</a>
                <v-divider class="pt-1 pb-1"/>
                <app-players-progress-bar :minecraft-server-url="'qqq'"/>
            </div>
        </div>
        <div class="d-flex sidebar-item">
            <div class="sidebar-image sidebar-image"/>
<!--            <div class="sidebar-cloud text-center">-->
<!--                <a href="">None</a>-->
<!--                <v-divider class="pt-1 pb-1"/>-->
<!--                <app-players-progress-bar :minecraft-server-url="'qqq'"/>-->
<!--            </div>-->
        </div>
        <div class="d-flex sidebar-item">
            <div class="sidebar-image sidebar-image"/>
<!--            <div class="sidebar-cloud text-center">-->
<!--                <span>Lotr</span>-->
<!--                <v-divider class="pt-1 pb-1"/>-->
<!--                <app-players-progress-bar :minecraft-server-url="'qqq'"/>-->
<!--            </div>-->
        </div>
        <div class="d-flex sidebar-item">
            <div class="sidebar-image sidebar-image"/>
<!--            <div class="sidebar-cloud text-center">-->
<!--                <span>Lotr</span>-->
<!--                <v-divider class="pt-1 pb-1"/>-->
<!--                <app-players-progress-bar :minecraft-server-url="'qqq'"/>-->
<!--            </div>-->
        </div>
    </section>
    <section v-else-if="position === 'right'" class="sidebar-items sidebar-items--right">
        <div class="d-flex sidebar-item sidebar-item--right">
            <div class="sidebar-image sidebar-image ml-auto"/>
        </div>
        <div class="d-flex sidebar-item sidebar-item--right">
            <div class="sidebar-image sidebar-image ml-auto"/>
            <!--            <div class="sidebar-cloud text-center">-->
            <!--                <a href="">None</a>-->
            <!--                <v-divider class="pt-1 pb-1"/>-->
            <!--                <app-players-progress-bar :minecraft-server-url="'qqq'"/>-->
            <!--            </div>-->
        </div>
        <div class="d-flex sidebar-item sidebar-item--right">
            <div class="sidebar-image sidebar-image ml-auto"/>
            <!--            <div class="sidebar-cloud text-center">-->
            <!--                <span>Lotr</span>-->
            <!--                <v-divider class="pt-1 pb-1"/>-->
            <!--                <app-players-progress-bar :minecraft-server-url="'qqq'"/>-->
            <!--            </div>-->
        </div>
        <div class="d-flex sidebar-item sidebar-item--right">
            <div class="sidebar-image sidebar-image ml-auto"/>
            <!--            <div class="sidebar-cloud text-center">-->
            <!--                <span>Lotr</span>-->
            <!--                <v-divider class="pt-1 pb-1"/>-->
            <!--                <app-players-progress-bar :minecraft-server-url="'qqq'"/>-->
            <!--            </div>-->
        </div>
    </section>
</template>

<script>
    import AppPlayersProgressBar from '../components/minecraft-info/AppPlayersProgressBar';
    export default {
        name: 'SidebarBadComponent',
        components: { AppPlayersProgressBar },
        props: {
            position: String,
        }
    };
</script>



<style scoped lang="scss">
    .sidebar-item {
        &:hover {
            & .sidebar-image {
                transform: translateX(50px);
            }
            & .sidebar-cloud {
                opacity: 1;
                transform: translateX(50px);
            }
        }
        &--right {
            &:hover {
                & .sidebar-image {
                    transform: translateX(-50px);
                }
                & .sidebar-cloud {
                    opacity: 1;
                    transform: translateX(-50px);
                }
            }
        }
    }
    .sidebar-items {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top: 120px;
        bottom: 60px;

        &--left {
            left: -50px;
        }

        &--right {
            right: -50px;
            & .sidebar-image {
                order: 2;
            }

            & .sidebar-cloud {
                order: 1;
            }
        }
    }
    .sidebar-image {
        background-image: url("../assets/img/vrazrabotke.png");
        background-size: cover;
        width: 100px;
        height: 100px;
        transition: .8s transform;
        margin-right: 10px;
    }
    .sidebar-image-lotr {
        background-image: url("../assets/img/lotr.png");
    }
    .sidebar-image-vanilla {
        background-image: url("../assets/img/vanil.png");
    }
    .sidebar-image-terra {
        background-image: url("../assets/img/terra.png");
    }
    .sidebar-cloud {
        margin-top: 10px;
        order: 2;
        opacity: 0;
        height: 80px;
        width: 150px;
        border: 1px solid black;
        border-radius: 10px;
        background-color: #1e88e5;
        padding: 10px;
        transition: .8s transform, .8s opacity;

    }
</style>
