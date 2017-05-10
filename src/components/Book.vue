<template>
    <div class="block">
        <input type="text" placeholder="please enter book name!" v-model="enterName"/>
        <button class="btn" @click="handlebook">添加</button>
        <ul v-if="booklist.length > 0">
            <li v-for="(item, index) in booklist" v-text="item"></li>
        </ul>
        <p class="nodata" v-else>暂无数据</p>
    </div>
</template>

<script>
    import {mapGetters, mapState, mapActions} from "vuex";

    export default {
        data() {
            return {
                enterName: ""
            }
        },
        computed: {
            ...mapGetters([
                'booklist'
            ]),
            // enterName: state => state.book.enterName
        },

        methods: {
            ...mapActions([
                'addBook'
            ]),
            handlebook(){
                this.addBook(this.enterName)
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
