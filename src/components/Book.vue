<template>
    <div class="block">
        <input type="text" placeholder="please enter book name!"/>
        <button class="btn">添加</button>
        <ul v-if="booklist.length > 0">
            <li v-for="(item, index) in booklist" v-text="item"></li>
        </ul>
        <p class="nodata" v-else>暂无数据</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                booklist: ["a", "b"]
            }
        }
    }
</script>


<style scoped>
    input{
        padding: 4px;
        font-size: 14px;
        min-width: 300px;
    }
    .btn{
        padding: 4px;
        width: 100px;
    }
</style>
