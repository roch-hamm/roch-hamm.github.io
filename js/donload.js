<div id="preloader_malc">

	<div>

		Подождите, идет загрузка сайта ...

	</div>

</div>

<style type="text/css">
	#preloader_malc {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .6);
		z-index: 99
	}

	#preloader_malc div {
		background: #fff;
		width: 260px;
		height: 40px;
		line-height: 40px;
		border-radius: 8px;
		font-family: arial;
		font-size: 15px;
		color: #111;
		text-align: center;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto
	}
</style>

<script type="text/javascript">

	window.onload = function() {

		setTimeout(function() {

			document.getElementById("preloader_malc").style.display = "none";

		}, 400);

	};

</script>