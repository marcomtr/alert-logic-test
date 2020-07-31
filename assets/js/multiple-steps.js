$( document ).ready(function() {

// ------------------------- SELECTORS ------------------------- //

    var stepWrapper = ".js-step-wrapper";
    var nextStepAction = $(".js-next-step");
    var prevStepAction = $(".js-prev-step");
    var submitAction = $(".js-submit");
    
// ------------------------- EVENTS ------------------------- //


	nextStepAction.on("click", function() {
		$('.multi-step__item').removeClass('multi-step__item--is-active');
		$(this).closest(stepWrapper).next().addClass('multi-step__item--is-active');
	});

	prevStepAction.on("click", function() {
		$('.multi-step__item').removeClass('multi-step__item--is-active');
		$(this).closest(stepWrapper).prev().addClass('multi-step__item--is-active');
	});

});