let available_keywords=[
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web design tutorials',
    'Javascript',
    'Where to learn coding online',
    'Where to create a website',
    'Why should i create a website',
    'How much do developers earn for building a  website',
    'What is the use of a website',
    'How much time does it take to build a website from scratch',
    'How many developers are in the world',
    'What is the yearly salary of full stack developers',
]
 
const inputBox=document.getElementById('inputbox');
const resultbox=document.querySelector('.result-box');

inputBox.addEventListener("keyup",()=>{
        let result=[];
        let input=inputBox.value;
    
        if(input.length){
            result=available_keywords.filter((keyword)=>{
              return  keyword.toLowerCase().includes(input.toLowerCase())
            });
    
            console.log(result);
            
        }
        display(result);
    
        if(!result.length){
            resultbox.innerHTML=" ";
        }
    })

function display(result){
    const content=result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    })

    resultbox.innerHTML="<ul>" + content.join("") + "</ul>"
}
function selectInput(list){
    inputBox.value=list.innerHTML;
    resultbox.innerHTML=" ";

}