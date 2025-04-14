let devQuotes = [
    { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "– Harold Abelson", emoji: "💻" },
    { quote: "First, solve the problem. Then, write the code.", author: "– John Johnson", emoji: "🔧" },
    { quote: "Code is like humor. When you have to explain it, it’s bad.", author: "– Cory House", emoji: "😂" },
    { quote: "Fix the cause, not the symptom.", author: "– Steve Maguire", emoji: "⚙️" },
    { quote: "Experience is the name everyone gives to their mistakes.", author: "– Oscar Wilde", emoji: "💡" },
    { quote: "Talk is cheap. Show me the code.", author: "– Linus Torvalds", emoji: "👨‍💻" },
    { quote: "Programming isn't about what you know; it's about what you can figure out.", author: "– Chris Pine", emoji: "🧠" },
    { quote: "Simplicity is the soul of efficiency.", author: "– Austin Freeman", emoji: "🧘‍♂️" },
    { quote: "A user interface is like a joke. If you have to explain it, it’s not that good.", author: "– Unknown", emoji: "😂" },
    { quote: "Before software can be reusable it first has to be usable.", author: "– Ralph Johnson", emoji: "🔄" },
    { quote: "One man’s crappy software is another man’s full-time job.", author: "– Jessica Gaston", emoji: "💼" },
    { quote: "In order to be irreplaceable, one must always be different.", author: "– Coco Chanel", emoji: "🌟" },
    { quote: "You can’t have great software without a great team.", author: "– Joel Spolsky", emoji: "🤝" },
    { quote: "Good code is its own best documentation.", author: "– Steve McConnell", emoji: "📖" },
    { quote: "The best error message is the one that never shows up.", author: "– Thomas Fuchs", emoji: "❌" },
    { quote: "The most disastrous thing you can ever learn is your first programming language.", author: "– Alan Kay", emoji: "🔥" },
    { quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "– Edsger W. Dijkstra", emoji: "🐞" },
    { quote: "It works on my machine.", author: "– Every developer, ever", emoji: "🖥️" },
    { quote: "Computers are fast; developers keep them slow.", author: "– Unknown", emoji: "🐢" },
    { quote: "There are only two kinds of programming languages: the ones people complain about and the ones nobody uses.", author: "– Bjarne Stroustrup", emoji: "💬" }
  ];
  
  let quoteEl = document.getElementById("quote");
  let clickMeButton = document.getElementById("clickMeButton");
  let clickMeSound = document.getElementById("clickMeSound"); // fixed lowercase "c"
  
  clickMeButton.addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * devQuotes.length);
    let quoteObj = devQuotes[randomIndex];
  
    quoteEl.innerHTML = `${quoteObj.emoji}<br><span class="the-quote">"${quoteObj.quote}"</span><br><span class="the-author">${quoteObj.author}</span>`;
  
    clickMeSound.currentTime = 0;
    clickMeSound.play();
  
    quoteEl.classList.add("animate");
    setTimeout(() => quoteEl.classList.remove("animate"), 300);
  });