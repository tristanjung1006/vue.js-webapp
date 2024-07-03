<template>
  <div>
    <transition-group name="list" tag="p">
<!--      v-for 디렉티브를 사용할 때 소괄호는 배열이나 객체를 순회할 때 사용되고 {} 중괄호는 Javascript 객체를 정의할 때 사용된다.-->
      <li v-for="(todoItem, index) in this.storedTodoItems" class="shadow" v-bind:key="todoItem.item">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
           v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  methods: {
    // mutatations과 달리 payload 인자는 암묵적으로 인식이 된다
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    }),

    // removeTodo(todoItem, index) {
    //   // this.$emit('removeItem', todoItem, index);
    //   // const obj = {
    //   //   todoItem,
    //   //   index
    //   // }
    //   // ES6로 프로세스 단축 -> payload에 바로 담아버리기
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete(todoItem, index) {
    //   // this.$emit('toggleItem', todoItem, index);
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  },
  computed: {
    // todoItems() {
    //   // 템플릿 안에서는 자바스크립트 연산을 최대한 줄이는 것이 권고사항
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems'])
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
