<%@ page pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
	<base href="${pageContext.request.contextPath}/">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Hello Websocket</title>
</head>
<body>
	<form>
		<input type="submit" value="Room 1" formaction="${pageContext.request.contextPath}/home1">
		<input type="submit" value="Room 2" formaction="${pageContext.request.contextPath}/home2">
		<input type="submit" value="Room 3" formaction="${pageContext.request.contextPath}/home3">
	</form>
</body>
</html>