<!-- Account.vue -->
	<template>
		<div>
			<detail-header></detail-header>
			<div id="firstcomponent" class="firstcomponent">
				<h1>I am a title.</h1>
				<a>这是：{{ author }}</a>
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
		import DetailHeader from '../components/DetailHeader'

		export default {
			components: {
				DetailHeader
			},
			data() {
				return {
					author: "haha"
				}
			}
		}
	</script>  