package Model;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Quiz {

    private List<Question> questionList;
    private int currQuestion;
    private int score;

    public Quiz(){
        this.questionList = Arrays.asList(
                new Question("3, 1, 4, 1, 5", "9"),
                new Question("1, 1, 2, 3, 5", "8"),
                new Question("1, 4, 9, 16, 25", "36"),
                new Question("2, 3, 5, 7, 11", "13"),
                new Question("1, 2, 4, 8, 16", "32")
        );
        Collections.shuffle(this.questionList);
    }

    public String getNextQuestion(){
        if(currQuestion >= questionList.size()){
            return null;
        }else{
            return this.questionList.get(currQuestion++).getQues();
        }
    }
    public void checkAnswer(String answer){
        int temp = currQuestion - 1;
        boolean result = this.questionList.get(temp).checkAnswer(answer);
        if(result) this.score++;
    }

    public int getScore(){
        return score;
    }

    public boolean endOfQuestion(){
        return this.currQuestion == questionList.size();
    }

    public int getTotalScore(){
        return this.questionList.size();
    }

}
