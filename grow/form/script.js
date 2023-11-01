document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generate");
    const keywordInput = document.getElementById("keyword");
    const titlesList = document.getElementById("titles");

    generateButton.addEventListener("click", function() {
        const keyword = keywordInput.value;
        titlesList.innerHTML = "";

        if (keyword.trim() !== "") {
            generateTitles(keyword);
        } else {
            titlesList.innerHTML = "<li>Please enter a keyword.</li>";
        }
    });

    function generateTitles(keyword) {
        const phrases = ["Top 10", "Ultimate Guide to", "Exploring", "Mastering", "Best Practices for","The Science Behind","Interview with ", "The Ultimate Guide to ", "A Day in the Life of ","The Truth About"];
        const adjectives = ["Amazing", "Incredible", "Awesome", "Essential", "Revolutionary"];

        for (let i = 0; i < 5; i++) { // Generate 5 titles
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
            const title = `${randomPhrase} ${randomAdjective}  ${keyword}`;
            const listItem = document.createElement("li");
            listItem.textContent = title;
            titlesList.appendChild(listItem);
        }
    }
   
});