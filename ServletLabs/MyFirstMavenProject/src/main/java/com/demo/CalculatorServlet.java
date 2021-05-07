package com.demo;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name="CalculatorServlet",urlPatterns = "/calculator")
public class CalculatorServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = null;
        int a = 0, b = 0, c = 0, d = 0;

            try {
                out = response.getWriter();
                out.println("<center>");
                if (!request.getParameter("add1").equals("")) {
                    a = Integer.parseInt(request.getParameter("add1"));
                }
                if (!request.getParameter("add2").equals("")) {
                    b = Integer.parseInt(request.getParameter("add2"));
                }
                if (!request.getParameter("mul1").equals("")) {
                    c = Integer.parseInt(request.getParameter("mul1"));
                }
                if (!request.getParameter("mul2").equals("")) {
                    d = Integer.parseInt(request.getParameter("mul2"));
                }
                if (request.getParameter("mul1").equals("")) {
                    c = 1;
                }
                if (request.getParameter("mul2").equals("")) {
                    d = 1;
                }

                int result1 = 0;
                int result2 = 1;
                result1 = a + b;
                result2 = c * d;

                String plus = "+";
                String multiply = "*";
                if (!(request.getParameter("add1").equals("") && (request.getParameter("add2").equals("")))) {
                    out.println("<h3>" + a + plus + b + "=" + result1 + "</h3>");
                }
                if (!(request.getParameter("mul1").equals("") && (request.getParameter("mul2").equals("")))) {
                    out.println("<h3>" + c + multiply + d + "=" + result2 + "</h3>");
                }


            } catch (Exception e) {
                out.println("Error: " + e.getMessage());
            } finally {
                out.println("<br/>");
                out.println("To go to main page <a href=index.html>Click here</a>");
                out.println("</center>");
        }


        }


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}
