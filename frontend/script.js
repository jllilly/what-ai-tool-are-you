const questions = [
    {
        title: "Q1 - The Friday JD Drop",
        question: "A hiring manager Slacks you a 3-page job description at 4:58pm on a Friday. You...",
        answers: [
            { text: "Read every word twice, flag three contradictions, and send a thoughtful response with a caveat", tool: "Claude" },
            { text: "Are already out the door. Your automation will parse it, categorize it, and add it to your pipeline while you go out", tool: "n8n" },
            { text: "Reformat the entire JD into a stunning candidate-facing post with vibes and a brand voice that slaps", tool: "Lovable" },
            { text: "Log it in the ATS with structured intake notes, tag the hiring manager, and create a scorecard before you close your laptop", tool: "Metaview" },
            { text: "Your AI has already scheduled 8 screening calls for Monday morning. You find out Sunday night.", tool: "AlexAI" },
            { text: "Screenshot it, text it to yourself, open four tabs, make a snack, and completely forget about it until Monday", tool: "Fireflies" }
        ]
    },
    {
        title: "Q2 - The Candidate Ghost",
        question: "A finalist candidate ghosts you the day of their offer call. You...",
        answers: [
            { text: "Write a warm, non-pushy three paragraph message that somehow makes THEM feel bad for ghosting YOU", tool: "Claude" },
            { text: "Don't stress. A re-engagement sequence of 5 touchpoints across email, text, and LinkedIn fires automatically should do it.", tool: "n8n" },
            { text: "Send the most gorgeous checking in message they've ever received. They'll never respond but it looks cute.", tool: "Lovable" },
            { text: "Pull up the interview scorecard, cross reference every red flag you documented, and present a full post-mortem", tool: "Metaview" },
            { text: "Check your AI that has already re-screened 3 backup candidates without telling you", tool: "AlexAI" },
            { text: "Spend 45 minutes searching every app you own for their contact info before finding it in a voicemail from 3 weeks ago", tool: "Fireflies" }
        ]
    },
    {
        title: "Q3 - The Intake Meeting",
        question: "You sit down with a hiring manager for an intake meeting. You...",
        answers: [
            { text: "Ask three questions so insightful that the hiring manager completely rethinks the role on the spot", tool: "Claude" },
            { text: "Sent a pre-meeting form 48 hours ago that auto-populated a structured intake doc, a sourcing brief, and a draft job post", tool: "n8n" },
            { text: "Arrive five minutes late, charm the entire room in 30 seconds, and leave with everyone's buy-in and a vision board.", tool: "Lovable" },
            { text: "Open a pre-built structured scorecard, live-score the role requirements in real time, and send a summary before they get back to their desk", tool: "Metaview" },
            { text: "Realize mid-meeting that your AI screener has already interviewed four candidates. Heck yes.", tool: "AlexAI" },
            { text: "Bring a notebook, write two words and wish you had taken better notes", tool: "Fireflies" }
        ]
    },
    {
        title: "Q4 - The Networking Event",
        question: "You're at a recruiting industry mixer. You...",
        answers: [
            { text: "Have one deep conversation with a stranger that turns into a 45 minute philosophy discussion about the future of hiring", tool: "Claude" },
            { text: "Spend the whole night showing people your automation dashboard on your phone. Three people ask for your Notion template.", tool: "n8n" },
            { text: "Walk in and immediately become the most magnetic person in the room. No one knows how. Even you don't know how.", tool: "Lovable" },
            { text: "Collect every business card, scan every LinkedIn QR code, and have fully documented contact notes in your CRM before the Uber home", tool: "Metaview" },
            { text: "Leave early because your AI pinged you. You have a dozen calls to review and need to send the top 3 candidates to your manager", tool: "AlexAI" },
            { text: "Have the most electric conversations of the night and wake up the next morning remembering exactly one person's first name", tool: "Fireflies" }
        ]
    },
    {
        title: "Q5 - The Difficult Hiring Manager",
        question: "Your hiring manager keeps rejecting great candidates with zero feedback. You...",
        answers: [
            { text: "Write a beautifully diplomatic message that somehow makes them feel heard and subtly calls out the pattern without them realizing it", tool: "Claude" },
            { text: "Build an automated feedback form with mandatory fields that triggers after every rejection. They cannot submit without a reason.", tool: "n8n" },
            { text: "Schedule a casual coffee vibe-check, show up with your best energy, and charm the entire problem out of existence", tool: "Lovable" },
            { text: "Pull a rejection analytics report, highlight the pattern in three bullet points, and walk into their office with receipts", tool: "Metaview" },
            { text: "Have your AI run a calibration interview with the hiring manager themselves to reset expectations. Let's see how this plays out", tool: "AlexAI" },
            { text: "Vent about it on a call, forget to follow up, remember at 11pm, send a Slack, and somehow it works out", tool: "Fireflies" }
        ]
    }
];

const results = {
    Claude: {
        title: "Claude - The Thoughtful Advisor",
        description: "You don't move fast - you move right. You're the recruiter who actually reads the job description, asks the question nobody else thought to ask, and sends a follow-up so well-written it belongs in a museum. You care deeply about doing things the right way, even when nobody's watching. Claude is Anthropic's AI assistant, known for being careful, nuanced, and genuinely thoughtful. It won't just tell you what you want to hear. Kind of like you."
    },
    n8n: {
        title: "n8n - The Automation Overlord",
        description: "While everyone else is doing the work, you built an orchestration that does it for you. You have a workflow for your workflows. Your automations have automations. You haven't manually sent a follow-up email since 2023 and you're not about to start now. n8n is an open-source workflow automation tool that connects your apps and runs multi-step pipelines while you sleep. Basically a superpower for recruiters who think in systems."
    },
    Lovable: {
        title: "Lovable - The Vibe Recruiter",
        description: "You don't know how you do it. Neither does anyone else. But it apparently works. Your emails are stunning. Your candidate experience is immaculate. You run purely on instinct, aesthetic, and energy - and somehow that's enough to close your req load. Lovable is a vibe coding tool - you describe what you want and AI builds it. It's all about the vibes, the feel, the look. Less about the logic. Sound familiar?"
    },
    Metaview: {
        title: "Metaview - The Full-Cycle Operator",
        description: "You don't just recruit - you run a system. You're thinking about sourcing and interviews and scorecards and job posts all at the same time. You have receipts on everything, your ATS is spotless, and you genuinely believe that a great process produces great hires every time. Metaview is an AI recruiting platform that covers the entire hiring lifecycle - from sourcing candidates to interview notes, scorecards, job posts, and pipeline reports."
    },
    AlexAI: {
        title: "Alex AI - The Volume Machine",
        description: "You are everywhere, all the time, talking to everyone. Your pipeline is never empty because you never stop. While other recruiters sleep, your operation keeps running. You don't miss candidates - you just deploy more capacity. Alex AI is an autonomous AI interviewer that conducts real screening calls 24/7 without a human in the loop. It literally never sleeps. Just like your recruiting strategy."
    },
    Fireflies: {
        title: "Fireflies - The Scatterbrained Genius",
        description: "You are absolutely chaotic and somehow one of the best recruiters in the room. Your desk is a disaster. Your tabs are out of control. You once lost a candidate's resume in your own email. But your instincts are elite and your relationships are real - you just need a robot to remember everything for you. Fireflies is an AI notetaker that records, transcribes, and summarizes every meeting automatically. Because clearly you need it. We say that with love."
    }
};

let currentQuestion = 0;
let scores = {};

function startQuiz() {
    document.getElementById('intro').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    document.getElementById('question-text').textContent = q.question;

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.classList.add('answer-btn');
        btn.innerHTML = `<span class="letter-label">${letters[index]}</span>${answer.text}`;
        btn.onclick = () => selectAnswer(answer.tool);
        answersDiv.appendChild(btn);
    });
}

function selectAnswer(tool) {
    scores[tool] = (scores[tool] || 0) + 1;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');

    const topTool = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const result = results[topTool];

    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;
}

function restartQuiz() {
    currentQuestion = 0;
    scores = {};
    document.getElementById('result').classList.add('hidden');
    document.getElementById('intro').classList.remove('hidden');
}
