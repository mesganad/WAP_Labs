
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Quiz</title>
  </head>
  <body>
  <h1>The Number Quiz</h1>
  <p>Your currrent score: ${quiz.score}</p>
  <p>Guess the next number in the sequence.</p>
  <p>${quiz.nextQuestion}</p>
  <form action="quiz" method="post">
    Your answer is:
    <input type="number" name="answer"/>
    <input type="submit" value="Submit"/>
  </form>


  </body>
</html>
