<template class="donate">
    <div class="d-flex ma-16 qwerty">
        <a href="/lotr/donate" class="lotr"/>
        <a href="/lotr/donate" class="yar"/>
        <a href="/lotr/donate" class="van"/>
        <a href="/lotr/donate" class="vr"/>
    </div>
</template>

<script>
    export default {
        name: 'YgdDonate',
    };
</script>

<style scoped>
    .qwerty {
        justify-content: center;
    }
    .lotr {
        margin: 10px;
        width: 200px;
        height: 200px;
        background-image: url("../../assets/img/lotr.png");
        background-size: contain;
        background-position: center;
    }
    .yar {
        margin: 10px;
        width: 200px;
        background-image: url("../../assets/img/yarovin.png");
        background-size: contain;
        background-position: center;
    }
    .van {
        margin: 10px;
        width: 200px;
        background-image: url("../../assets/img/vanil.png");
        background-size: contain;
        background-position: center;
    }
    .vr {
        margin: 10px;
        width: 200px;
        background-image: url("../../assets/img/vrazrabotke.png");
        background-size: contain;
        background-position: center;
    }
</style>
