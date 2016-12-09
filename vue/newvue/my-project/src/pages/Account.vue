<!-- Account.vue -->
	<template>
		<div>
			<detail-header></detail-header>
			<div id="firstcomponent" class="firstcomponent">
				<h1>I am a title.</h1>
				<a>这是：{{ author }}</a>
			</div>
			<p>Reversed message: {{ reverseMessage }}</p>

			<div v-bind:class="classObject">123</div>
			
			<div id="app-7">
			  <ol>
			    <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
			  </ol>
			</div>
			
		</div>
	</template>
	<style scoped>
		.header_btn_back{
			font-size: 15px;
		}
		.firstcomponent{
			font-size: 20px;
			text-align: center;
		}
	</style>
	<script type="text/javascript">
//		import DetailHeader from '../components/DetailHeader'
//
//		export default {
//			components: {
//				DetailHeader,
//				props: ['todo'],
//template: '<li>{{ todo.text }}</li>'
//			},
//			data() {
//				return {
//					author: "haha"
//				}
//			},
//			computed: {
//			    // a computed getter
//			    reverseMessage: function () {
//			      // `this` points to the vm instance
//			      return this.author.split('').reverse().join('')
//			    },
//			    classObject: function(){
//			    		return {
//			    			active: this.isActive2 && !this.error,
//    					'text-danger': this.error && this.error.type === 'fatal',
//			    		}
//			    }
//			},
//		}
		import Vue from 'vue'
		Vue.component('todo-item', {
		  props: ['todo'],
		  template: '<li>{{ todo.text }}</li>'
		})
		var app7 = new Vue({
		el: '#app-7',
		data: {
		    groceryList: [
		      { text: 'Vegetables' },
		      { text: 'Cheese' },
		      { text: 'Whatever else humans are supposed to eat' }
		    ]
		}
		})
	</script>  