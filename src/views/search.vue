<template>
    <div>
        <div class="city-cearch">
            <div class="city-cearch1">
                <i class="fa fa-search"></i>
                <input type="text" placeholder="输入城市名称或拼音" v-model="transitno" autofocus="autofocus" ref="inputVal"/>
            </div>
            <div class="city-cearch2" @click="search">查询</div>
        </div>
        <div class="search-hestory0" v-show="xianlu != null">线路</div>
        <div class="search-hestory" v-show="xianlu != null">
            <div class="index-li_a" @click="gotoItem(xianlu)">
                <div class="search-hestory1">
                    <i class="fa fa-bus"></i>
                    <span>{{xianlu}}</span>
                </div>
            </div>
        </div>
        <div class="search-hestory" v-show="err1">
            <div class="search-hestory4">没有搜索到线路</div>
        </div>
        <div class="search-hestory0" v-show="zhandian != null">站点</div>
        <div class="index-li" v-for="(zd,i) in zhandian" :key="i">
            <div class="index-li1"  @click="gotoXlanlu(zd.station)">
                <span>{{zd.station}}</span>
                <p><label v-for="(xl,i) in zd.lines" :key="i">
                    <label v-if="i%2 == 0">{{xl | ellipsis}} </label>
                </label></p>
            </div>
        </div>
        <div class="search-hestory" v-show="err2">
            <div class="search-hestory4">没有搜索到站点</div>
        </div>
        
    </div>
</template>

<script>
export default{
    data(){
        return{
            xianlu:null,
            zhandian:null,
            transitno:"",
            city:"",
            cityid:"",
            err1:false,
            err2:false,
        }
    },
    filters:{
        ellipsis (value) {
            if (!value) return ''
            if (value.length > 8) {
                return value.substring(0,value.indexOf("路")+1);
            }
            return value
        }
    },
    methods:{
        gotoXlanlu(r){
            this.$router.push({path:'/zhandian/'+r})
        },
        gotoItem(r){
            this.$router.push({path:'/item/'+r})
        },
        search(){
            this.err = false;
            this.$http.get('/cll/xianlu.php',{
                params:{
                    city:this.city,
                    cityid:this.cityid,
                    transitno:this.transitno
                }
            }).then( res => {
                if(res.data.msg == "ok"){
                    this.err1 = false;
                    console.log(res.data.result[0])// res.data为后端返回的具体数据
                    this.xianlu = res.data.result[0].transitno;
                }else{
                    this.xianlu = null;
                    this.err1 = true;
                }
            });
            this.$http.get('/cll/fjzd.php',{
                params:{
                    city:this.city,
                    address:this.transitno
                }
            }).then( res => {
                if(res.data.msg == "ok"){
                    this.err2 = false;
                    console.log(res.data.result)// res.data为后端返回的具体数据
                    this.zhandian = res.data.result;
                }else{
                    this.err2 = true;
                    this.zhandian = null;
                }
            });
        }
    },
    mounted:function(){
        this.city = this.$store.state.city;
        this.cityid = this.$store.state.cityid;
    },
 }
</script>

<style>
</style>
