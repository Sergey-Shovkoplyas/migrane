(jQuery)(function($){	
    $(document).ready(function () {	
	
		
		$('.gender div').on('click', function(event){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		});
		$('a.start_test').on('click', function(event){
			$(this).parents('.content').hide();
			$('.test_step[data-step="1"]').show();											
			event.preventDefault();			
		});
		$('a.next_test').on('click', function(event){
			var step = parseInt($(this).parents('.test_step').attr('data-step'));
			$(this).parents('.test_step').hide();
			$('.test_step[data-step="'+(step+1)+'"]').show();		
			if (step == 3){
				if ($('.pos_cond_mig').length ==3)
					$('.mig_res').addClass('pos');
				else
					$('.mig_res').addClass('neg');
					
			}
			event.preventDefault();			
		});
	
		$('.bar_slider div').on('mouseup', function(event){
			var len = $(this).prevAll().length;
			$(this).parent().width(30+len*87);
			if (len==5)
				$(this).parent().width(6*87);
				
			if (len>=4)
				$(this).parents('.test_step').eq(0).addClass('pos_cond_mig');
			else
				$(this).parents('.test_step').eq(0).removeClass('pos_cond_mig');
		});
	
		$('.head_pain div').on('click', function(event){
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			if ($(this).is('.trig'))
				$(this).parents('.test_step').eq(0).addClass('pos_cond_mig');
			else
				$(this).parents('.test_step').eq(0).removeClass('pos_cond_mig');
				
		});
		$('.check .check_box').on('click', function(event){
			$(this).toggleClass('active');
			//alert($('.check .check_box.cb_group1.active').length);
			if ($('.check .check_box.cb_group1.active').length >=2 || $('.check .check_box.cb_group2.active').length >=1)
				$(this).parents('.test_step').eq(0).addClass('pos_cond_mig');
			else
				$(this).parents('.test_step').eq(0).removeClass('pos_cond_mig');
				
		});
		if($().placeholder)
			$('input[placeholder], textarea[placeholder]').placeholder();
        
        function oldPlaceholder(){
			$('input,textarea').each(function(index, element) {
				if ($(element).val() == '')
					$(element).val($(element).attr('title'));
				$(element).blur(function(e) {
					var title = $(this).attr('title');
					if ($(this).val() == '')
						$(this).val(title);
				});
				$(element).focus(function(e) {
					var title = $(this).attr('title');					
					if ($(this).val() == title)
						$(this).val('');
				});
			});
		}oldPlaceholder(); 
		    
		function popup(){
			var fade = $('body > .fade');
			fade.hide();
			$('.popup').hide();
			
			$('.to-popup').click(function(e) {
                var id = $(this).attr('href');
				if (typeof id == "undefined")
					id = $(this).attr('data-href');
				fade.toggle();
				$(id).toggle();
				$(id).toggleClass('active');													
				e.preventDefault();
            });
			$('body > .fade').click(function(e) {				
				$('.popup').hide();
				$('.popup').removeClass('active');
				fade.hide();             
            });
			$('.popup .close').click(function(e) {				
				$(this).parents('.popup').hide().removeClass('active');
				fade.hide();             
            });
		}popup();
		
		
		if ($().validate){
			$('form').each(function(index, element) {
                            
				$(element).validate({
					debug: true,
					highlight: function( element, errorClass, validClass ) {
						$(element).addClass('error');
					},
					unhighlight: function( element, errorClass, validClass ) {
						$(element).removeClass('error');
					},
					rules: {
						email: {
							required: true,
							email:true
						}
					},
					submitHandler: function(){
						var msg   = $(element).serialize();
							 $.ajax({
					          type: 'POST',
					          url: 'post.php',
					          data: msg,
					          success: function(data) {
								  //alert('Сообщение отправлено!');
								  var fade = $('body > .fade');
									fade.hide();									
									fade.toggle();
									$('.popup').toggle();
					          },
					          error:  function(xhr, str){
					                //alert('Возникла ошибка: ' + xhr.responseCode);
								  var fade = $('body > .fade');
									fade.hide();									
									fade.toggle();
									$('.popup').toggle();
					            }
					        });
						},
					success: function(label) {										
					}
				});
			});
		}
		
		});
		

})
