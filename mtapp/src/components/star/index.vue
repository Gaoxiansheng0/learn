<template>
    <div class="star-box">
        <i v-for="i in 5" :key="i" :class="getClass(i)"></i>
    </div>
</template>

<script>
    export default {
        props:{
            score:{
                default:5
            }
        },
        methods:{
            getClass(i){
                if(this.score % 1 === 0){
                    return i<=this.score?"icon-star-active":"icon-star"
                }else{
                    if(i<this.score){
                        return "icon-star-active"
                    }else if(Math.ceil(this.score) == i){
                        return "icon-star-half";
                    }else if(i>this.score){
                        return "icon-star";
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .star-box{
        display: inline-block; //这样可以跟其他元素同一行
        i{
            width: 12px;
            height: 12px;
            display: inline-block;
            line-height: 0;
            margin-right: 2px;
            background-size: 100%;
            &.icon-star{    //这个是灰色的小星星
                background-image: url(./images/star.png);
            }
            &.icon-star-active{    //这个是亮色的小星星
                background-image: url(./images/star-active.png);
            }
            &.icon-star-half{    //这个是半亮色的小星星
                background-image: url(./images/star-half.png);
            }
        }
    }
</style>