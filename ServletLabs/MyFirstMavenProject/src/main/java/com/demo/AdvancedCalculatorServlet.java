package com.demo;


import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name="AdvancedCalculatorServlet",urlPatterns = {"/calculator2"})
public class AdvancedCalculatorServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        doPost(request, response);
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

            response.setContentType("text/html");
            PrintWriter out = null;
            String a = "", b = "", c = "", d = "";

            try {
                out = response.getWriter();
                out.println("<center>");


                a = request.getParameter("a1");
                b = request.getParameter("a2");
                c = request.getParameter("m1");
                d = request.getParameter("m2");
                int result1 = 0;
                int result2 = 1;
                out.println("<center>");
                out.println("<form action='calculator2'>");
                if (!(request.getParameter("a1").equals("") && (request.getParameter("a2").equals("")))) {
                    result1=Integer.valueOf(a)+Integer.valueOf(b);
                    out.println("<input name=\"a1\" value="+a+">+<input name=\"a2\" value="+b+">=<input name=\"sum1\" value="+result1+" readonly>");
                }
                /*else {
                    out.println("<input name=\"a1\"> + <input name=\"a2\"> = <input name=\"sum1\" readonly>");
                    out.println();
                }*/
                out.println("<p></p>");
                if (!(request.getParameter("m1").equals("") && (request.getParameter("m2").equals("")))) {
                    result2=Integer.valueOf(c)*Integer.valueOf(d);
                    out.println("<input name=\"m1\" value="+c+">*<input name=\"m2\" value="+d+">=<input name=\"prod1\" value="+result2+" readonly>");
                }
                /*else {
                    out.println("<input name=\"b1\"> + <input name=\"b2\"> = <input name=\"prod1\" readonly>");
                    out.println();
                }*/
                out.print("<br/>");
                out.print(" <input type=\"submit\" value=\"Submit\" >");
                out.print("</form>");
                out.println("<center/>");


            } catch (Exception e) {
                out.println("Error: " + e.getMessage());
            } finally {
                out.println("<br/>");
                out.println("To go to main page <a href=index.html>Click here</a>");
                out.println("</center>");
            }

        }
    }




