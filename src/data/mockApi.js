/**
 * Mock API Interceptor for Training Mania Demo
 * This script intercepts all window.fetch calls starting with /api/
 * and returns dummy data to make the project fully frontend-only.
 * Hardcoded for "Hardcore" demo mode.
 */

const dummyTrainings = [
    {
        id: 1,
        trainingId: 1,
        title: "Corporate Ethics & Conduct",
        training: "Corporate Ethics & Conduct",
        unique_code: "ETH-2024",
        pdf_file: "ethics_v1.pdf",
        pdfFile: "ethics_v1.pdf",
        thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c29535a7?auto=format&fit=crop&w=800&q=80",
        duration: "45 mins",
        enrollment_count: 125,
        status: "Enrolled",
        date: "2024-03-01",
        attemptsTaken: 0,
        attemptsAllowed: 3,
        videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        videoType: "youtube",
        test_configuration: {
            duration_minutes: 20,
            total_questions: 5,
            passing_marks: 40,
            total_marks: 100,
            is_negative_marking: false,
            no_copy_paste: true,
            no_tab_switch: true,
            no_screenshot: true,
            attempts_allowed: 3
        }
    },
    {
        id: 2,
        trainingId: 2,
        title: "Cybersecurity Fundamentals",
        training: "Cybersecurity Fundamentals",
        unique_code: "CYB-SEC",
        pdf_file: "cyber_guide.pdf",
        pdfFile: "cyber_guide.pdf",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        duration: "60 mins",
        enrollment_count: 89,
        status: "Completed",
        date: "2024-02-15",
        attemptsTaken: 1,
        attemptsAllowed: 3,
        videoUrl: "https://www.youtube.com/watch?v=7pySndG4ZpA",
        videoType: "youtube",
        score: 85,
        lastAttemptDate: "2024-02-16",
        userAnswers: { 0: "To steal sensitive information", 1: "Secure", 2: "Tr@iningM@ni&2024!" },
        test_configuration: {
            duration_minutes: 30,
            total_questions: 3,
            passing_marks: 40,
            total_marks: 100
        }
    },
    {
        id: 3,
        trainingId: 3,
        title: "Agile Project Management",
        training: "Agile Project Management",
        unique_code: "AGL-PM",
        pdf_file: "agile_handbook.pdf",
        pdfFile: "agile_handbook.pdf",
        thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
        duration: "120 mins",
        enrollment_count: 42,
        status: "Failed",
        date: "2024-03-01",
        attemptsTaken: 1,
        attemptsAllowed: 2,
        videoUrl: "https://www.youtube.com/watch?v=502mYV6A39Y",
        videoType: "youtube",
        score: 35,
        lastAttemptDate: "2024-03-05",
        userAnswers: { 0: "Virtual Private Network", 1: "Wrong Answer" },
        test_configuration: {
            duration_minutes: 15,
            total_questions: 2,
            passing_marks: 40,
            total_marks: 100
        }
    }
];

const dummyReports = [
    { id: 1, candidate: "Alice Johnson", training: "Corporate Ethics & Conduct", score: 95, totalMarks: 100, correct: 19, wrong: 1, skipped: 0, status: "Passed", date: "2024-03-07", dateTime: "2024-03-07T14:20:00Z" },
    { id: 2, candidate: "Bob Smith", training: "Cybersecurity Fundamentals", score: 85, totalMarks: 100, correct: 17, wrong: 3, skipped: 0, status: "Passed", date: "2024-03-07", dateTime: "2024-03-07T15:10:00Z" },
    { id: 3, candidate: "Charlie Brown", training: "Agile Project Management", score: 35, totalMarks: 100, correct: 7, wrong: 12, skipped: 1, status: "Failed", date: "2024-03-06", dateTime: "2024-03-06T11:45:00Z" },
    { id: 4, candidate: "Diana Prince", training: "Corporate Ethics & Conduct", score: 100, totalMarks: 100, correct: 20, wrong: 0, skipped: 0, status: "Passed", date: "2024-03-06", dateTime: "2024-03-06T09:30:00Z" },
    { id: 5, candidate: "Edward Norton", training: "DevOps Best Practices", score: 70, totalMarks: 100, correct: 14, wrong: 6, skipped: 0, status: "Passed", date: "2024-03-05", dateTime: "2024-03-05T16:55:00Z" }
];

const dummyQuestions = [
    {
        id: 101,
        text: "What is the primary goal of phishing?",
        question: "What is the primary goal of phishing?",
        question_type: 'mcq',
        type: 'mcq',
        options: ["To steal sensitive information", "To speed up your internet", "To update your software", "To clear your cookies"],
        choices: [
            { text: "To steal sensitive information", is_correct: true },
            { text: "To speed up your internet", is_correct: false },
            { text: "To update your software", is_correct: false },
            { text: "To clear your cookies", is_correct: false }
        ],
        correctAnswer: "To steal sensitive information",
        generated_by: "TM-AI-v4-Core",
        confidence_score: 0.98
    },
    {
        id: 102,
        text: "The 'S' in HTTPS stands for ________.",
        question: "The 'S' in HTTPS stands for ________.",
        question_type: 'fib',
        type: 'fib',
        answer: "Secure",
        choices: [{ text: "Secure", is_correct: true }],
        correctAnswer: "Secure",
        generated_by: "TM-AI-v4-NLP",
        confidence_score: 0.95
    },
    {
        id: 103,
        text: "Which of these is considered a strong password policy?",
        question: "Which of these is considered a strong password policy?",
        question_type: 'mcq',
        type: 'mcq',
        options: ["Minimum 8 characters with mix of case, numbers and symbols", "Using your birthdate", "Setting password to 'admin'", "Changing password once every 10 years"],
        choices: [
            { text: "Minimum 8 characters with mix of case, numbers and symbols", is_correct: true },
            { text: "Using your birthdate", is_correct: false },
            { text: "Setting password to 'admin'", is_correct: false },
            { text: "Changing password once every 10 years", is_correct: false }
        ],
        correctAnswer: "Minimum 8 characters with mix of case, numbers and symbols",
        generated_by: "TM-AI-v4-Core",
        confidence_score: 0.99
    },
    {
        id: 104,
        text: "What does MFA stand for in security context?",
        question: "What does MFA stand for in security context?",
        question_type: 'mcq',
        type: 'mcq',
        options: ["Multi-Factor Authentication", "Mobile Fast Access", "Major File Archive", "Modern Firewall Area"],
        choices: [
            { text: "Multi-Factor Authentication", is_correct: true },
            { text: "Mobile Fast Access", is_correct: false },
            { text: "Major File Archive", is_correct: false },
            { text: "Modern Firewall Area", is_correct: false }
        ],
        correctAnswer: "Multi-Factor Authentication",
        generated_by: "TM-AI-v4-Core",
        confidence_score: 0.97
    },
    {
        id: 105,
        text: "Briefly explain why sharing passwords with colleagues is a security risk.",
        question: "Briefly explain why sharing passwords with colleagues is a security risk.",
        question_type: 'short_answer',
        type: 'short_answer',
        choices: [{ text: "Accountability is lost and it increases the attack surface.", is_correct: true }],
        correctAnswer: "Accountability is lost and it increases the attack surface.",
        generated_by: "TM-AI-v4-NLP",
        confidence_score: 0.92
    },
    {
        id: 106,
        text: "In AWS, VPC stands for Virtual Private ________.",
        question: "In AWS, VPC stands for Virtual Private ________.",
        question_type: 'fib',
        type: 'fib',
        answer: "Cloud",
        choices: [{ text: "Cloud", is_correct: true }],
        correctAnswer: "Cloud",
        generated_by: "TM-AI-v4-NLP",
        confidence_score: 0.96
    }
];

const botResponses = [
    "That's a great question! Based on the training content, this concept is crucial for maintaining security integrity.",
    "I understand your doubt. This specifically refers to the protocols mentioned in section 2 of your manual.",
    "Exactly! This helps in preventing unauthorized access as discussed in the video.",
    "Wait, let's look at it this way: the primary objective is to ensure data confidentiality at all times.",
    "I'm here to help! Could you please elaborate which part of the video you're referring to?",
    "That's correct! You're picking up the concepts very well. Keep watching!",
    "Security best practices suggest that you should always verify the source before clicking any links.",
    "According to the guidelines, the 'S' indeed stands for Secure, meaning the data is encrypted."
];

const originalFetch = window.fetch;

window.fetch = async (...args) => {
    const [url, options] = args;

    if (typeof url === 'string' && (url.startsWith('/api/') || url.includes('techmiresolutions.com'))) {
        console.log(`%c[MOCK API] %c${url}`, "color: #4f46e5; font-weight: bold", "color: #334155");

        // Realistic delay
        await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500));

        let responseData = {};
        let status = 200;

        // --- ADMIN ROUTES ---
        if (url.includes('/api/admin/trainings/')) {
            responseData = dummyTrainings;
        } else if (url.includes('/api/admin/reports/')) {
            responseData = dummyReports;
        } else if (url.includes('/api/admin/notifications/')) {
            responseData = [
                { id: 1, type: 'enrollment', text: '5 new candidates enrolled today', time: '10 mins ago' },
                { id: 2, type: 'system', text: 'System update completed', time: '1 hour ago' }
            ];
        } else if (url.includes('/api/generate-questions/')) {
            responseData = { questions: dummyQuestions };
        } else if (url.includes('/api/training/create/')) {
            responseData = { message: "Success", id: 99 };
        }

        // --- CANDIDATE ROUTES ---
        else if (url.match(/\/api\/candidate\/\d+\/dashboard\//)) {
            responseData = dummyTrainings;
        } else if (url.match(/\/api\/training\/\d+\//)) {
            const id = parseInt(url.split('/').filter(Boolean).pop());
            responseData = dummyTrainings.find(t => t.id === id) || dummyTrainings[0];
            responseData.questions = dummyQuestions; // Inject questions for any training
        }

        // --- CHATBOT ROUTES ---
        else if (url.includes('/api/chat/')) {
            if (options && options.method === 'POST') {
                const body = JSON.parse(options.body);
                const randomRes = botResponses[Math.floor(Math.random() * botResponses.length)];
                responseData = { response: randomRes };
            } else {
                // GET Chat History
                responseData = [
                    { role: 'assistant', text: 'Hello! I am your AI learning assistant. Ready to help you with this module.' },
                    { role: 'user', text: 'How do I pass the test?' },
                    { role: 'assistant', text: 'Just focus on the core security principles mentioned in the video!' }
                ];
            }
        }

        // --- AUTH ROUTES ---
        else if (url.includes('/api/admin/login/') || url.includes('/api/auth/login/') || url.includes('/api/superadmin/login/')) {
            responseData = {
                admin: { id: 1, full_name: "Demo Admin", email: "admin@trainingmania.com", is_superadmin: true },
                candidate: { id: 1, full_name: "Demo Candidate", email: "candidate@demo.com" },
                step: "DASHBOARD"
            };
        } else if (url.includes('/api/test/submit/')) {
            responseData = { message: "Submission successful!" };
        } else if (url.includes('/api/auth/set-password/')) {
            responseData = { success: true, candidate: { id: 1, full_name: "Demo Candidate" } };
        }

        // Fallback
        else {
            responseData = { status: "success", mode: "hardcore_demo" };
        }

        return new Response(JSON.stringify(responseData), {
            status: status,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    // Assets / External
    try {
        return await originalFetch(...args);
    } catch (e) {
        return new Response(JSON.stringify({}), { status: 200 });
    }
};

console.log("%c HARDCORE DEMO MODE ACTIVATED ", "background: #ef4444; color: white; font-weight: bold; padding: 4px; border-radius: 4px;");
console.log("Chatbot, MCQs, and all dynamic features are now fully hardcoded.");
