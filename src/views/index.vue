<template>
    <div>
        <router-view></router-view>
        <fooder></fooder>
    </div>
</template>

<script>
import fooder from "./fooder.vue";
export default {
    name: 'index',
    components: {
        fooder,
    },
    data() {
        return {
            
        }
    },
    methods:{
        
    },
    mounted:function(){
        
    }
}
</script>

<style>
</style>
