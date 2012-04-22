$(function() {
	
	$(".diceroller").on("keyup", function(e) {
		var $this = $(this);
		if(e.which == 13) {
			try{
				var results = d20.dice_engine.process($this.find("input").val());
				$this.find(".results").html($("#tmpl_chatmessage_rollresult").jqote(results.origformula + "|" + results.formula + "|" + results.total));
			}
			catch (e) {
				$(this).find(".results").html("<div class='alert alert-danger'>Invalid roll! Check your formula and try again.</div>");
			}
			
		}
	});

	$(".diceroller").each(function() {
		var oldval = $(this).text();
		$(this).html("<div class='results'></div><input type='text' /><small>Click in the box and press enter to roll the dice! You can also change the formula.</small>");
		$(this).find("input").val(oldval);
	});

});

var d20 = {};