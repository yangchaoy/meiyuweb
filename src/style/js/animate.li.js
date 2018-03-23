/*
 * 导入对象初始化即可
 * animate.init();
 * 
 * 提供支持的层叠样式及插件
 * animate.css 提供动画库
 * jquery.fullpage.js 提供全屏翻页插件
 */
var animate = {
	init: function(){
		var _self = this;
		
		if($('#fullpage').length){
			// 全屏翻页
			_self.fullpage();
		}else{
			// 普通流文档
			_self.flowpage();
		}
	},
	fullpage: function(){
		var _self = this;
		
		var $pageId = $('#fullpage'),
			_animate = 'animated',
			_once = true;
			
		// easing
		var $easing = {
			'ease-in-back': 'cubic-bezier(.6,-.28,.735,.045)',
			'ease-out-back': 'cubic-bezier(.175,.885,.32,1.275)',
			'ease-in-out-back': 'cubic-bezier(.68,-.55,.265,1.55)',
			'ease-in-sine': 'cubic-bezier(.47,0,.745,.715)',
			'ease-out-sine': 'cubic-bezier(.39,.575,.565,1)',
			'ease-in-out-sine': 'cubic-bezier(.445,.05,.55,.95)',
			'ease-in-quad': 'cubic-bezier(.55,.085,.68,.53)',
			'ease-out-quad': 'cubic-bezier(.25,.46,.45,.94)',
			'ease-in-out-quad': 'cubic-bezier(.455,.03,.515,.955)'
		}
		
		// 微动画
		function _animation(index){
			$pageId.children('*').eq(index-1).find('['+ _animate +']').each(function(index, element){
				var _name = $(this).attr(_animate),
					_duration = $(this).attr(_animate +'-duration') ? $(this).attr(_animate +'-duration') + 's' : '1s',
					_easing = $(this).attr(_animate +'-easing') ? $(this).attr(_animate +'-easing') : 'ease',
					_delay = $(this).attr(_animate +'-delay') ? $(this).attr(_animate +'-delay') + 's' : '0s',
					_anchor = $(this).attr(_animate +'-anchor') ? $(this).attr(_animate +'-anchor') : 'null';
				
				if($easing[_easing]){
					_easing = $easing[_easing];
				}
				
				$(this).css({'visibility': 'visible', 'animation': ''+ _name +' ' + _duration + ' ' + _easing + ' ' + _delay + ' both'});
            });
		}
		
		// 插件功能配置
		$pageId.fullpage({
			anchors: ['p1', 'p2', 'p3', 'p4'],
			navigation: true,
			navigationPosition: 'right',
			navigationTooltips: ['第一页', '第二页', '第三页', '第四页'],
			afterRender: function(){
				// 解决载入时UI错乱的问题
				$('#fullpage').css({'visibility': 'visible'});
				
				// 添加额外结构
				$('#fp-nav').append('<div class="mouse"><span></span></div>');
				
				// 添加动画
				setTimeout(function(){
					_animation(1);
				}, 800);
			},
			onLeave: function(index, nextIndex, direction){
				// 翻页导航反色
				if(nextIndex == 2 || nextIndex == 3){
					$('#fp-nav').addClass('change');
				}else{
					$('#fp-nav').removeClass('change');
				}
				
				// 清除上一页动画
				$('#fullpage > *').eq(nextIndex-1).find('[animated]').removeAttr('style');
			},
			afterLoad: function(anchorLink, index){
				_animation(index);
			}
		});
	},
	flowpage: function(){
		var _self = this;
		
		var _height = $(window).height(),
			_coordinates = [],
			_offset = -100,
			
			_animate = 'animated',
			_once = true;
			
		// easing
		var $easing = {
			'ease-in-back': 'cubic-bezier(.6,-.28,.735,.045)',
			'ease-out-back': 'cubic-bezier(.175,.885,.32,1.275)',
			'ease-in-out-back': 'cubic-bezier(.68,-.55,.265,1.55)',
			'ease-in-sine': 'cubic-bezier(.47,0,.745,.715)',
			'ease-out-sine': 'cubic-bezier(.39,.575,.565,1)',
			'ease-in-out-sine': 'cubic-bezier(.445,.05,.55,.95)',
			'ease-in-quad': 'cubic-bezier(.55,.085,.68,.53)',
			'ease-out-quad': 'cubic-bezier(.25,.46,.45,.94)',
			'ease-in-out-quad': 'cubic-bezier(.455,.03,.515,.955)'
		}
		
		// 初始化坐标
		$('['+ _animate +']').each(function(index, element){
			if($(this).attr(_animate +'-anchor')){
				_coordinates.push($('#' + $(this).attr(_animate +'-anchor')).offset().top);
			}else{
				_coordinates.push($(this).offset().top);
			}
        });
		
		// 微动画
		function _animation(y){
			$('['+ _animate +']').each(function(index, element){
				var _name = $(this).attr(_animate),
					_duration = $(this).attr(_animate +'-duration') ? $(this).attr(_animate +'-duration') + 's' : '1s',
					_easing = $(this).attr(_animate +'-easing') ? $(this).attr(_animate +'-easing') : 'ease',
					_delay = $(this).attr(_animate +'-delay') ? $(this).attr(_animate +'-delay') + 's' : '0s',
					_anchor = $(this).attr(_animate +'-anchor') ? $(this).attr(_animate +'-anchor') : 'null';
					_count = $(this).attr(_animate +'-count') ? $(this).attr(_animate +'-count') : '1';
				
				if($easing[_easing]){
					_easing = $easing[_easing];
				}
				
				if($(this).is(':visible') && (y + _height > _coordinates[index] - _offset)){
					$(this).css({'visibility': 'visible', 'animation': ''+ _name +' ' + _duration + ' ' + _count + ' ' + _easing + ' ' + _delay + ' both'});
				}
				if(_once){
					if(!($(this).is(':visible') && (y + _height > _coordinates[index]))){
						$(this).css({'visibility': '', 'animation': 'none'});
					}
				}
            });
		}
		
		// 触发
		$(window).bind({
			'load': function(){
				var _sp = $(document).scrollTop();
				_animation(_sp);
			},
			'scroll': function(){
				var _sp = $(document).scrollTop();
				_animation(_sp);
			},
			'resize': function(){
				
			}
		})
		
		_animation(0);
	}
}