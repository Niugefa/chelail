<template>
    <div>
        <div class="city-cearch">
            <div class="city-cearch1">
                <i class="fa fa-search"></i>
                <input type="text" placeholder="输入城市名称或拼音"/>
            </div>
            <div class="city-cearch2">查询</div>
        </div>
        <div class="search-hestory0">当前城市</div>
        <div class="city-now" @click="back">
            <span>{{new_city}}</span>
            <i class="fa fa-check-circle"></i>
        </div> 
        <div class="search-hestory0">定位城市</div>
        <div class="city-now" @click="hreftwo(city,cityid,station)">
            <span>{{city}}</span>
            <i class="fa fa-location-arrow"></i>
        </div>
        <div class="search-hestory0">热门城市</div>
        <div class="city-hot clearfix">
            <div class="city-hot1" v-for="(hot,i) in city_hot" :key="i" @click="hreftwo(hot.name,hot.cityid,hot.name)">
                <img :src="hot.jc" />
                <p>{{hot.name}}</p>
            </div>
        </div>
        <div class="search-hestory0">全部城市</div>
        <div class="city-hot clearfix city-all" id="city-all">
            <span v-for="(city,i) in city_jc" :key="i" @click='goAnchor("#"+city)'>{{city}}</span>
        </div>
        <div v-for="(city,i) in city_jc" :key="i">
            <div class="search-hestory0" :id="city">{{city}}</div>
            <div class="city-hot clearfix city-all">
                <div v-for="(city_name,i) in city_all" :key="i" @click="hreftwo(city_name.name,city_name.cityid,city_name.name)">
                    <div class="city-all1" v-if="city_name.code.slice(0,1).toUpperCase() == city">
                        <label>{{city_name.name}}</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            city_jc: ["A","B","C","D","E","F","G","B","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            city_hot: [
                {"name":"北京","cityid":1,"jc":require("../img/bj.png")},
                {"name":"上海","cityid":24,"jc":require("../img/sh.png")},
                {"name":"广州","cityid":75,"jc":require("../img/gz.png")},
                {"name":"深圳","cityid":76,"jc":require("../img/sz.png")},
                {"name":"天津","cityid":26,"jc":require("../img/tj.png")},
                {"name":"成都","cityid":321,"jc":require("../img/cd.png")},
                {"name":"重庆","cityid":31,"jc":require("../img/cq.png")},
                {"name":"佛山","cityid":79,"jc":require("../img/fs.png")},
                {"name":"青岛","cityid":283,"jc":require("../img/qd.png")},
                {"name":"东莞","cityid":78,"jc":require("../img/dg.png")},
                {"name":"贵阳","cityid":110,"jc":require("../img/gy.png")}
            ],
            city_all: null,
			city_name :null,
            new_city:"成都",
            city:"成都",
            cityid:"321",
            station:"太平园",
        }
    },
    computed:{
    },
    methods:{
		back(){
            this.$router.go(-1);//返回上一层
        },
        goAnchor(r){
            var anchor = this.$el.querySelector(r);
            document.documentElement.scrollTop = anchor.offsetTop;
        },
        hreftwo(a,b,c){
            this.$store.commit('nameCity',a);
            this.$store.commit('nameCityid',b);
            this.$store.commit('nameAddress',c);
            this.$router.push({path:'/home'})
        },
        getCity(){
            this.$http.get("/cll/city.php").then(res => {
                this.city_all = res.data.result;
            })
        },
    },
    mounted:function(){
        this.new_city = this.$store.state.city;
        this.getCity()
    },
}
</script>
<style>
</style>
