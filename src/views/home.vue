<template>
	<div class="home">
		<div class="header">
            <div class="diqu">
                <router-link to="city">
                <span>{{city}}</span><i class="fa fa-sort-down"></i>
                </router-link>
            </div>
            <router-link to="search">
            <div class="cearch">
                <i class="fa fa-search"></i><span>搜索公交线路、车站、地点</span>
            </div></router-link>
            <div class="index1">
                <div>
                    <p><i class="fa fa-suitcase"></i></p>
                    <p>高薪招聘</p>
                </div>
                <div>
                    <p><i class="fa fa-building"></i></p>
                    <p>附近租房</p>
                </div>
            </div>
        </div>
        <div class="index2">
            <div v-for="(nev,i) in menv" :key="i" :class="filter == i ? 'active' : ''"  @click="toggleFilter(i)">
                {{nev}}
            </div>
        </div>
        <div class="index3" v-show="filter == 0">
            <div class="index-none" v-show=" fjzd == null ">
                没有附近线路
            </div>
            <div class="index-li" v-for="(zd,i) in fjzd" :key="i">
                <div class="index-li1" @click="gotoXlanlu(zd.station)">
                    <span>{{zd.station}}</span>
                    <p><label v-for="(xl,i) in zd.lines" :key="i">
                        <label v-if="i%2 == 0">{{xl | ellipsis}} </label>
                    </label></p>
                </div>
            </div>
        </div>
        <div class="index3" v-show="filter == 1" >
            <div class="index-none">
                没有收藏线路
            </div>
        </div>
        <div class="index3" v-show="filter == 2" >
            <div class="index-none">
                没有历史线路
            </div>
        </div>
        <div class="fo"></div>
	</div>
</template>

<script>
export default {
	name: 'home',
	components: {
	},
    data(){
        return{
            menv : ["推荐","收藏","历史"],
            filter: 0,
            fjzd: null,
            city:"成都",
            cityip:"成都",
            cityid:"321",
            address:"太平园",
            ak:'8nHBaSQpVjGyb5tpho1XmGvvcH48AI2K',
        }
    },
    computed:{
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
		getFjzd(){
			this.$http.get("/cll/fjzd.php",{
                params:{
                    city:this.city,
                    address:this.address
                }
            }).then(res => {
                this.fjzd = res.data.result
			})
		},
        toggleFilter(r){
            this.filter = r;
        },
        gotoXlanlu(r){
            this.$router.push({path:'/zhandian/'+r})
        }
	},
	mounted:function(){
        this.city = this.$store.state.city;
        this.cityid = this.$store.state.cityid;
        this.address = this.$store.state.address;
        this.getFjzd();
	},
    created() {
        
    }
}
</script>
