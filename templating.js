var experiences = [
  {
    title: "Software Engineer",
    company: "Government Technology Agency",
    date: "Singapore • Jul 2020 - Current",
    summary: "Developing and maintaining software features for a citizen-facing portal. 80% of time spent on designing and writing code, 20% on improving observability and code reviews.",
    subsections: [
      { 
        heading: "Hands-on software engineering",
        items: [
          "Shipped 90% of features within schedule",
          "Advocated and restructured codebase to utilise Ruby on Rails conventions",
          "Resolved 2000+ failing tests related to Ruby on Rails major version upgrade",
        ]
      },
      {
        heading: "Raised productivity and effectiveness of team",
        items: [
          "Initiated Ping-Pong Programming at every opportunity to reduce code waste and improve code testability",
          "Advocated the use of Rubocop code linting tool to improve code consistency within the team",
          "Led discussion on code conventions within the team",
          "Wrote custom Rubocop linting rules by utilising Ruby AST",
        ]
      },
      { 
        heading: "Improved error observability for legacy system",
        items: [
          "Led discussions around error handling with the team",
          "Prepared Splunk queries and reports to find unhandled exceptions among a sea of logs",
          "Uncovered 50+ new daily errors hidden in the system",
          "Worked with Product Owner to prioritise and resolve errors"
        ]
      },
    ]
  },
  {
    title: "Head of Product Engineering",
    company: "NodeFlair",
    date: "Singapore • Dec 2019 - Jun 2020",
    summary: "Leading a cross-functional team of software engineers to build features for a 3 sided digital platform for the tech recruitment market. 70% of time spent on designing and writing code, 30% on system architecture planning, code reviews and retrospectives.",
    subsections: [
      { 
        heading: "Hands-on software engineering",
        items: [
          "Shipped 90% of features within schedule",
          "Raised test coverage from 0% to 60% by writing hundreds of tests",
          "Refactored major parts of state management using finite state machines",
          "Cut query response times by 2x by rewriting SQL statements and optimising ORM models",
          "Cut AWS server costs by 60% through capacity analysis and planning"
        ]
      },
      {
        heading: "Raised productivity and morale of engineering team",
        items: [
          "Cut frontend built times by 20x by reconfiguring Webpack in our development workflow",
          "Improved deployment confidence by setting up continuous integration and automated testing tool chain",
          "Increased release cadence by 3x by introducing trunk based developement",
          "Increased deployment frequency from weekly to daily by implementing blue-green deployments",
          "Increased developer competence by conducting monthly tech retrospectives",
        ]
      },
      { 
        heading: "Conceptualised and built internal tools",
        items: [
          "Improved overall effectiveness of talent sourcing team by 3x",
          "Increased utilisation of search tools by 5x by collaborating with talents team to revamp search heuristics",
          "Reduced mishunting rates by 90% by creating a Google Chrome Extension for detecting existing users within LinkedIn pages"
        ]
      },
    ]
  },
  {
    title: "Technical Projects Manager",
    company: "Prime Technologies",
    date: "Singapore • Jun 2018 - Nov 2019",
    summary: "Led a software engineering business unit comprising 5 engineers to build customised enterprise resource planning systems for the business group. 70% of time spent on managing software projects, 30% on technical advisory",
    subsections: [{
      heading: "Technical Project Management",
      items: [
        "Managed 4 software projects with agile methodology",
        "Achieved 90% of release schedule by managing and prioritising features with engineers",
        "Cut technical audit time by 50x by rewriting bash shell scripts",
        "Recovered 20% of project budget by reallocating engineers to suitable projects",
        "Held financial responsibility for project margins, budgeting, human resource planning and R&D budgets",
      ]
    },
    {
      heading: "Technical Consulation and Strategy",
      items: [
        "Served as chief technical advisor for the entire business group in matters of software engineering",
        "Saved $50,000 in costs by conducting technical and security audits in-house",
        "Wrote standard operating procedures for software engineering processes and error handling processes",
        "Spearheaded a new data protection and security initiative to protect the business group against data breaches",
      ]
    }]
  },
  {
    title: "Product Manager / Full-Stack Engineer",
    company: "AfterYou",
    date: "Singapore • Nov 2014 - May 2018",
    summary: "Led a cross-functional team of designers and engineers to grow the AfterYou Home Services from 0 to 16,000 users. 50% of time spent on product management, 50% on writing code",
    subsections: [{
      heading: "Hands-on software engineering",
      items: [
        "Built the entire web application in 2 months to serve initial 2000 users",
        "Conceptualised 'Grab for Home Services' platform in Singapore and raised $600,000 in funding",
        "Formulated and built a ranking algorithm using geo-coordinates and behaviorial patterns",
        "Increased platform retention rate by implementing e-payment systems and in-app chat",
        "Supported new CTO in all frontend and backend development duties"
      ]
    },
    {
      heading: "Product Management",
      items: [
        "Developed product roadmap, metrics and release calendar",
        "Achieved 13% month-on-month growth through careful product marketing and engineering",
        "Kept abandoned feature to less than 5% by implementing user research and usability testing",
        "Outperformed market performance of paid ads by 30% margin",
      ]
    }
    ]
  }
]

var technologies = [
  {
    heading: "Programming",
    list: ["Ruby", "Python", "Elixir", "Typescript", "Javascript"].join(", ")
  },
  {
    heading: "Web",
    list: ["React.js", "Angular.js", "CSS", "Webpack", "Ruby on Rails", "Django", "Phoenix", "Node.js"].join(", ")
  },
  {
    heading: "Databases",
    list: ["PostgreSQL", "ElasticSearch"].join(", ")
  },
  {
    heading: "Server / Cloud",
    list: ["MacOS", "Linux", "AWS"].join(", ")
  }
]

var personals = [
  {
    title: "Startup Coach - UNFRAMED ",
    date: "Aug 2015 - Dec 2018",
    list: [
      "Coached 20+ teams across 3 social enterprise programmes to build sustainable startups.",
      "Co-developed and conducted product development workshops. ",
    ]
  },
  {
    title: "On Track Finance",
    date: "Feb 2020 • https://ontrack.finance",
    list: [
      "Built a personal finance tool to forecast financial health. Built with React."
    ]
  },
  {
    title: "Expressor",
    date: "Aug 2018 • https://github.com/alvinncx/expressor",
    list: [
      "Built a web-based, interactive calculator that evaluates expressions, variables & conditions. Built with ReactJS and Redux."
    ]
  }
]

var educations = [
  {
    title: "Certified Scrum master",
    date: "Singapore • Nov 2020"
  },
  {
    title: "National University of Singapore, B.Eng, Engineering Science",
    date: "Singapore • 2009 - 2014",
    subtext: "Major in Computational Engineering Sciences"
  },
  {
    title: "KTH Royal Institute of Technology",
    date: "Stockholm, Sweden • 2011 - 2012",
    subtext: "NUS Overseas Collages programme, Minor in Technopreneurship"
  }
]

var skills = [
  {
    title: "Product-centric Software Engineering",
    summary: "Hands-on software engineer with a track record of designing, implementing and launching applications with the user in mind. Able to appreciate user and business concerns, and prioritise for market impact.",
  },
  {
    title: "People management",
    summary: "Experience in managing both up and down. Able to influence and manage executive stakeholders by expressing technological concerns in the context of business. Able to communicate, direct and manage teams for effective work output.",
  },
  {
    title: "Mentoring",
    summary: "Mentored 10+ individuals on personal and technical growth. Advised 20+ teams on matters of team effectiveness, leadership and decision making.",
  }
]


var source = document.getElementById("experience-template").innerHTML;
var template = Handlebars.compile(source);

var html = template(experiences);
$("#experiences").append(html);

var source = document.getElementById("personal-template").innerHTML;
var template = Handlebars.compile(source);

var html = template(personals);
$("#personal").append(html);

var source = document.getElementById("technology-template").innerHTML;
var template = Handlebars.compile(source);

var html = template(technologies);
$("#technologies").append(html);

var source = document.getElementById("education-template").innerHTML;
var template = Handlebars.compile(source);

var html = template(educations);
$("#educations").append(html);

var source = document.getElementById("skill-template").innerHTML;
var template = Handlebars.compile(source);

var html = template(skills);
$("#skills").append(html);