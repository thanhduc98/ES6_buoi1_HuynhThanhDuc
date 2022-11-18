let hoverText = () => {
    let content = '';
    let h2 = document.querySelector(".heading").innerHTML;
 
    const HEADING = [...h2];
 
    HEADING.forEach((text) => {
       content += `<span>${text}</span>`;
    })
    document.querySelector(".heading").innerHTML = content;
 }
 
 hoverText();