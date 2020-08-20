<template>
    <div class="fooder">
        <router-link to="/home" >
            <div >
                <i class="fa fa-map-marker"></i>
                <p>首页</p>
            </div>
        </router-link>
        <router-link to="/xianlu">
            <div>
                <i class="fa fa-location-arrow"></i>
                <p>线路</p>
            </div>
        </router-link>
        <a>
            <div>
                <i class="fa fa-share-alt"></i>
                <p>分享</p>
            </div>
        </a>
        <router-link to="/member">
            <div>
                <i class="fa fa-user"></i>
                <p>我的</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'fooder',
}
</script>

<style>
</style>
