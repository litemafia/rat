if (my_clan != 6626){
	$('.bookmarks').append('<li onclick="' + "$('#deb_tab').removeClass('new-message');_CHT_action('', \'tab\', \'deb\');" + '"' + "class='bookmark' id='deb_tab'>Чат нытиков <img src='/img/_.png'></li>");
	$('#chatContainer').append('<div id="deb_log" class="chat off"></div>');
	RPX_listen("def", r_pxx + "MAF_CLN_" + sopclan, 1); 
	RPX["def"].execute();
	function _CHT_append(t, s){
		if (t == 'ccl'){
			$.post(window.location.pathname + "DO/" + Math.random(), { method: "uol_find", val: $(s).find('.nick-from').text() }, function(data) {
				try {
					$.post(window.location.pathname + "DO/" + Math.random(),{method: 'scrl_req', 'ids[]': 'uol_' + data.ids[0]}, function(pro){
						try {
							if (parseInt(pro.arr['uol_'+data.ids[0]][3][1]) == sopclan){
								if (!$("#deb_tab").hasClass("new-message") && _CHT_c_tab != "deb"){
									$("#deb_tab").addClass("new-message");
								}
								$("#deb_log").append(s).divAutoScroll("update");
								$("#ccl_tab").removeClass("new-message");
							} else $("#" + t + "_log").append(s).divAutoScroll("update");
						} catch (e){}
					}, "json");
				} catch (e){ $("#" + t + "_log").append(s).divAutoScroll("update"); }
			}, "json");
		} else $("#" + t + "_log").append(s).divAutoScroll("update");
	}
}