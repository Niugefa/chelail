<template>
    <div>
        <div class="header">
            <div class="diqu"><span>路线</span></div>
            <div class="xianl">
                <div class="xianl1">
                    <i class="fa fa-circle"></i>
                    <input type="text" placeholder="我的位置" v-model="start"/>
                </div>
                <div class="xianl1 xianl2">
                    <i class="fa fa-circle"></i>
                    <input type="text"  placeholder="您要去哪儿?" v-model="end"/>
                </div>
                <div class="xianl3" @click="change()"><i class="fa fa-retweet"></i></div>
            </div>
            <div class="chaxun" @click="getLuxian()">查询</div>
        </div>
        <div class="index-li" v-for="(zd,i) in all" :key="i">
            <label>{{zd.totalduration}}</label>·
            <label>{{zd.totaldistance}}</label>·
            <label><i class="fa fa-child"></i>{{zd.totalwalkdistance}}</label>
            <div class="index-li-p" v-for="(luc,i) in zd.steps" :key="i">
                <p>{{luc.steptext}} {{luc.endname}}</p>
                <i class="fa fa-long-arrow-down"></i>
            </div>
            <div class="index-li-p">
                <p>{{end}}</p>
            </div>
        </div>
        <div class="search-hestory" v-show="err">
            <div class="search-hestory4">没有搜索到线路</div>
        </div>
        <div class="fo"></div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            start:"",
            end:"",
            city:"",
            all:"",
            all1:"",
            err : false
        }
    },
    filters:{
        
    },
    methods:{
        change(){
            let temp=this.start;
            this.start = this.end;
            this.end = temp;
            this.all = null;
            this.err = false;
            this.getLuxian();
        },
        getLuxian(){
            this.all = null;
            this.err = false;
            this.$http.get('/cll/station.php',{
                    params:{
                    city:this.city,
                    start:this.start,
                    end:this.end
                }
            }).then( res => {
                if(res.data.msg == "ok"){
                    console.log(res.data.result);
                    this.all = res.data.result;
                    this.all1 = res.data.result.steps;
                }else{
                    this.err = true;
                }
            });
        }
    },
    mounted:function(){
        this.city = this.$store.state.city;
    },
 }
</script>

<style scoped>
    .index-li{
        margin-bottom:0.9375rem;
    }
</style>
