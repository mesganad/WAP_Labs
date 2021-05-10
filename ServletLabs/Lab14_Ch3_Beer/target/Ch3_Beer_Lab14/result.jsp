<%@ page import="java.util.*" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored="false" %>
<html>
<body>
<h1 align="center">Beer Recommendations JSP</h1>
<p>
<c:forEach items="${styles}" var="style">
    Try: ${style} <br/>
    </c:forEach>
    <%--
<%
List styles = (List)request.getAttribute("styles");
Iterator it = styles.iterator();
while(it.hasNext()) {
out.print("<br>try: " + it.next());
}
%>--%>
</body>
</html>