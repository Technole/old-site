##
# Main page setup
##


# Header fade
refreshHeader = ()->
	if $(window).scrollTop() >= 50
		$('.navbar-default').addClass 'navbar-shrink'
	else
		$('.navbar-default').removeClass 'navbar-shrink'
refreshHeader()

headerListener = null
$(window).on 'scroll', (ev)->
	if headerListener?
		clearTimeout headerListener
		
	headerListener = setTimeout ()->
		refreshHeader()	
	, 75

