/**
 * 通用js
 * @yehui 
 * @date    2017-05-27 16:58:10
 * @version 1.0.0
 */
$(function(){

	/*关闭alert*/
	$("#J_comFixColse, #J_comFixCancel, #J_comFixSure").on('click', function(event) {
		event.preventDefault();
		$(this).closest(".com-fix").addClass('none');
	});
});
