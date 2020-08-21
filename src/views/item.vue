<template>
    <div v-wechat-title="$route.meta.title">
        <div class="item">
            <div class="item1">
                <p><label>{{startstation}}</label><i class="fa fa-long-arrow-right"></i><label>{{endstation}}</label></p>
                <span>首{{starttime}} 末{{endtime}}·票价{{price}}元 <!-- <label><i class="fa fa-calendar"></i>时刻表</label> --></span>
            </div>
            <div class="item1_1" @click="change()"> 
                <i class="fa fa-exchange"></i>
                <p>换向</p>
            </div>
        </div>
        <div class="item3">
            <div class="item3_1">
                <li v-for="(zhand,i) in zdx" :key="i">{{zhand.station}}</li>
            </div>
        </div>
        <div class="item4">
            <div>
                <i class="fa fa-star"></i>
                <p>收藏</p>
            </div>
            <div>
                <i class="fa fa-share"></i>
                <p>分享</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
	data(){
		return{
			xianlu:null,
			xianlu1:null,
            zdx:null,
			city:"",
            cityid:"",
            transitno:"",
            startstation:"",
            endstation:"",
            starttime:"",
            endtime:"",
            price:"",
            direction:true
		}
	},
	computed:{
		
	},
	methods:{
        change(){
            if(this.direction){
                this.startstation = this.xianlu1.startstation; //起点站
                this.endstation = this.xianlu1.endstation; //终点站
                this.starttime = this.xianlu1.starttime; //发车时间
                this.endtime = this.xianlu1.endtime; //收车时间
                this.price = this.xianlu1.price; //票价
                this.zdx = this.xianlu1.list //站点列表
                this.direction=false;
            }else{
                this.startstation = this.xianlu.startstation; //起点站
                this.endstation = this.xianlu.endstation; //终点站
                this.starttime = this.xianlu.starttime; //发车时间
                this.endtime = this.xianlu.endtime; //收车时间
                this.price = this.xianlu.price; //票价
                this.zdx = this.xianlu.list //站点列表
                this.direction=true;
            }
        },
        getItem(){
            this.$http.get("/cll/xianlu.php",{
                params:{
                    city:this.city,
                    cityid:this.cityid,
                    transitno:this.transitno
                }
            }).then(res => {
                this.xianlu = res.data.result[0];
                this.xianlu1 = res.data.result[1];
                this.zdx = res.data.result[0].list;
                console.log(res.data.result[0]);
                this.startstation = this.xianlu.startstation; //起点站
                this.endstation = this.xianlu.endstation; //终点站
                this.starttime = this.xianlu.starttime; //发车时间
                this.endtime = this.xianlu.endtime; //收车时间
                this.price = this.xianlu.price; //票价
            })
        }
	},
    mounted:function() {
        this.city = this.$store.state.city;
        this.cityid = this.$store.state.cityid;
        this.transitno = this.$route.params.transitno;
        this.$route.meta.title = this.$route.params.transitno;
        this.getItem();
    }
}
</script>

<style>
</style>
