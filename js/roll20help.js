$(function() {
	
	var engine = d20.dice_engine();
	var rollre = /\/((roll)|(r)|(gmroll)|(gr))[ ]+/i;
	$(".diceroller").on("keyup", function(e) {
		var $this = $(this);
		var origroll = $this.find("input").val().replace(rollre, "");
		if(e.which == 13) {
			try{
				engine.process(origroll, function(results) {
					if(results.error) {
						$(this).find(".results").html("<div class='alert alert-danger'>"+results.error+"</div>");
						return;
					}
					var htmlcontent = d20.dice_formatter.getHtmlForResult(results);
					var attrs = {
						htmlcontent: htmlcontent,
						origRoll: origroll
					};
					console.log(attrs);
					$this.find(".results").html($("#tmpl_chatmessage_newroll").jqote(attrs));
				});
			}
			catch (e) {
				console.log(e);
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