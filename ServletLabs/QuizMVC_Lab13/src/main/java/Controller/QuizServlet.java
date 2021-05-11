package Controller;

import Model.Quiz;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "QuizServlet", value = "/quiz")
public class QuizServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.doPost(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session =request.getSession();
        Quiz quiz;
        if(session.getAttribute("quiz")==null){
            quiz=new Quiz();
            session.setAttribute("quiz",quiz);
        }
        else{
             quiz=(Quiz) session.getAttribute("quiz");
             String ans=request.getParameter("answer");
             quiz.checkAnswer(ans);
        }

       /* response.setContentType("text/html");
        PrintWriter out=response.getWriter();*/

        String question=quiz.nextQuestion();
        if(question==null){
            request.getRequestDispatcher("resul.jsp").forward(request,response);
        }
        else
            request.getRequestDispatcher("index.jsp").forward(request,response);
    }
}
