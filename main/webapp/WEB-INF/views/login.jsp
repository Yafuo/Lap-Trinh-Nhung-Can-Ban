<%@ page pageEncoding="utf-8" %>
<!DOCTYPE html>
<html>
<head>
	<jsp:include page="head.jsp"/>
</head>
<body>
	<h1>This is a Batteground</h1>
	<h2>Login your account to fight</h2>
	<div class="header">
		<form action="check-account" method="post">
			<div class="field">
				<label>Id</label> 
				<input type="text" name="id">
			</div>
			<div class="field">
				<label>Password</label>
				<input type="password" name="pwd">
			</div>
			<button>Log in</button>
		</form>
	</div>
	<form action="sign-up" method="post">
		<h1>Free Sign Up</h1>
		<div>
			<input type="text" placeholder="id" name="id">
		</div>
		<div>
			<input type="text" placeholder="user name" name="username">
		</div>
		<div>
			<input type="password" placeholder="password" name="pwd">
		</div>
		<button>Sign up</button>
	</form>
</body>
</html>