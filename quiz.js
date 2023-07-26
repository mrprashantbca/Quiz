const correctAnswers=["C","D","C","C","A"];
const form=document.querySelector(".quiz-form");
const question=document.querySelectorAll(".question");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        var userAnswers=[form.q1.value,
                         form.q2.value,
                         form.q3.value,
                         form.q4.value,
                         form.q5.value];
        console.log(userAnswers);
        let score=0;
        userAnswers.forEach((element,index) => {
            if(element==correctAnswers[index]){
                score++;
                question[index].classList.add("correct");
            }
            else{
                question[index].classList.add("wrong");
            }
        });
        console.log("your score is ",score);
        var p=document.querySelector(".result p");
        p.textContent=`you have got ${score}/5`;
        var result=document.querySelector(".result");
        result.classList.remove("hide");
        scrollTo(0,0);
    });