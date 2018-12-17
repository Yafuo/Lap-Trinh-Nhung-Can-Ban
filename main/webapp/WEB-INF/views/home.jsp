<%@ page pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<base href="${pageContext.request.contextPath}/">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Hello Websocket</title>
	<link href="css/style.css" rel="stylesheet">
	<script src="js/jquery-3.3.1.min.js"></script>
	<script src="js/sockjs-0.3.1.min.js"></script>
	<script src="js/stomp.min.js"></script>
	<script src="js/app.js"></script>
	<script src="js/handler-game.js"></script>
</head>
<body>
	<form class="form-inline">
      <div class="form-group">
          <label for="connect">WebSocket connection:</label>
          <button id="connect" class="btn btn-default" type="submit">Connect</button>
          <button id="disconnect" class="btn btn-default" type="submit" disabled="disabled">Disconnect
          </button>
      </div>
    </form>
    <p id="whichroom">${room}</p>
	<label>Id: </label>${id}&nbsp;
	<label>Username: </label>${username}
	<form>
		<input type="button" onclick="location.href='/logout'" value="Log out">
	</form>
	<h2>Congratulation, you have logged in !</h2>
	<h4 id="turn">
		
	</h4>
	<h2 id="winner">The winner is: ....</h2>
	<div class="fire">
		<h3>
			This is <b id="red">FIRE</b> clan map. Be careful to the enemy !
		</h3>
		<div class="content">
			<c:forEach var="i" begin="1" end="25">
				<div id="${i}"></div>
			</c:forEach>
		</div>
		<button onclick="show(1)">Show FIRE's map</button>
		<div class="detail-fire">
			<c:forEach var="i" begin="1" end="10">
				<p></p>
			</c:forEach>
		</div>
	</div>
	<div class="ice">
		<h3>
			This is <b id="blue">ICE</b> clan map. Be careful to the enemy !
		</h3>
		<div class="content">
			<c:forEach var="i" begin="26" end="50">
				<div id="${i}"></div>
			</c:forEach>
		</div>
		<button onclick="show(2)">Show ICE's map</button>
		<div class="detail-ice">
			<c:forEach var="i" begin="1" end="10">
				<p></p>
			</c:forEach>
		</div>
	</div>
</body>
</html>