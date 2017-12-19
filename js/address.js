/**
 * Created by Administrator on 2017/12/18.
 */
new Vue({
    el:".container",
    mounted:function(){
      this.$nextTick(function(){
        this.getAddressData();
      })
    },
    data:{
        addressList:[],
        limitNumber:3,
        currentIndex:0
    },
    methods:{
        getAddressData:function(){
            var _this=this;
            this.$http.get("data/address.json").then(function(response){
                var res=response.data;
                if(res.status==0){
                    _this.addressList=res.result;
                }
            })
        },
        setlimitNumber:function(){
            if(this.limitNumber==3){
            this.limitNumber=this.addressList.length;
            }else{
                this.limitNumber=3;
            }
        },
        setDefault:function(addressId){
            this.addressList.forEach(function(address,index){
                if(address.addressId==addressId){

                }
            })
        }
    },
    computed:{
        filterAddress:function(){
            return this.addressList.slice(0,this.limitNumber);
        }
    }

})