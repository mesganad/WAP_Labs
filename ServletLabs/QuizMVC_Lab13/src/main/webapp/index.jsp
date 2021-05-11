<%--
  Created by IntelliJ IDEA.
  User: misga
  Date: 5/9/2021
  Time: 12:21 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h3>Number Quiz</h3>
<hr/>
<p>Gues Next Question: </p>
<p>${quiz.nextQuestion}</p>
<form action="quiz" method="post">
    <input type="text" name="answer"><br/><br/>
    <input type="submit" name="submit">
</form>

</body>
</html>
