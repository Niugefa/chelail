<template>
    <div v-wechat-title="$route.meta.title">
        <div class="index-li" v-for="(zd,i) in zhandian" :key="i" >
            <div class="index-li_a" @click="gotoItem(zd.transitno)">
                <div class="index-li1">
                    <span>{{zd.transitno}}</span>
                    <p>起点站 {{zd.startstation}}</p>
                    <p>开往 {{zd.endstation}}</p>
                </div>
                <div class="index-li2">
                    <!-- <i class="fa fa-feed"></i> -->
                    <span>{{zd.price}}<i>元</i></span>
                    <p>首:{{zd.starttime}}<br>末:{{zd.endtime}}</p>
                </div>
            </div>
        </div>
        <div class="index-none" v-show="none">
            没有站点线路
        </div>
    </div>
</template>

<script>
export default{
	data(){
		return{
            zhandian:null,
            city:"",
            cityid:"",
            station:"",
            none:false
		}
	},
	computed:{
		
	},
	methods:{
        getZhandian(){
            this.$http.get("/cll/zhandian.php",{
                params:{
                    city:this.city,
                    cityid:this.cityid,
                    station:this.station
                }
            }).then(res => {
                if(res.data.msg == "ok"){
                    this.none = false
                    this.zhandian = res.data.result;
                }else{
                    this.none = true
                }
            })
        },
        gotoItem(r){
            this.$router.push({path:'/item/'+r})
        }
	},
    mounted:function(){
        this.city = this.$store.state.city;
        this.cityid = this.$store.state.cityid;
        this.station = this.$route.params.station;
        this.$route.meta.title = this.$route.params.station;
        this.getZhandian();
    }
}
</script>

<style>
</style>
