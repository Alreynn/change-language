function changeLangEN() {
    const headings = document.querySelectorAll("h1");
    const paragraph = document.querySelectorAll("p");
        headings[0].innerHTML = "Relative Lang"
        headings[1].innerHTML = "Welcome to Relative Lang Website";
        paragraph[0].innerHTML = "Here I will show you a technique that will change the language to Bahasa using JavaScript."
        headings[2].innerHTML = 'You can click the button "Bahasa" in the header';
        paragraph[1].innerHTML = "This will change the language to Bahasa. Try it!"
        
        headings[3].innerHTML = "A reminder!";
        paragraph[2].innerHTML = "This is only an experiment to learn JavaScript simply to manipulate texts inside a HTML file. To learn more about changing languages properly and correctly in web programming, you can search the tutorials on YouTube."
}

console.log("changeLangEN is running...");