var experiences = [
  {
    title: "Head of Product Engineering",
    company: "NodeFlair",
    date: "Singapore • Dec 2019 - Current",
    summary: "Leading a cross-functional team of software engineers to build features for a 3 sided digital platform for the tech recruitment market. 70% of time spent on designing and writing code, 30% on system architecture planning, code reviews and retrospectives.",
    subsections: [
      { 
        heading: "Hands-on software engineering",
        items: [
          "Shipped 90% of features within schedule",
          "Raised test coverage from 0% to 60% by writing hundreds of tests",
          "Refactored major parts of state management using finite state machines",
          "Cut query response times by 2x by rewriting SQL statements and optimising ORM models",
          "Cut AWS server costs by 60% through capacity analysis and planning",
          "Introduced functional programming methodologies to greatly simplify complex business logic"
        ]
      },
      {
        heading: "Raised productivity and morale of engineering team",
        items: [
          "Cut frontend built times by 20x by reconfiguring webpack in our development workflow",
          "Improved deployment confidence by setting up continuous integration and automated testing tool chain",
          "Increased release cadence by 3x by implementing trunk based developement",
          "Eliminated 10% of dead code through code analysis",
          "Increased deployment frequency from weekly to daily by implementing blue-green deployments",
          "Increased developer competence by conducting monthly tech retrospectives",
        ]
      },
      { 
        heading: "Conceptualised and built internal tools",
        items: [
          "Improved overall effectiveness of talent sourcing team by 3x",
          "Increased utilisation of internal search tools by 5x by collaborating with talents team to revamp search heuristics",
          "Single-handedly deployed ElasticSearch full-text search for our database of 25,000",
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
        "Achieved 90% of release schedule by managing and prioritising build with engineers",
        "Cut technical audit time by 50x by rewriting bash shell scripts",
        "Cut time taken to discover production error by 2 days by writing scripts to predict behavior",
        "Executed a technical proof-of-concept for a multi-tenancy web hosting system",
        "Recovered 20% of project budget by reallocating engineers to suitable projects",
        "Held financial responsibility for project margins, budgeting, human resource planning and R&D budgets",
      ]
    },
    {
      heading: "Technical Advisory and Foresight",
      items: [
        "Served as chief technical advisor for the entire business group in matters of software engineering",
        "Mediated technical meetings relating to the Open Electricity Market",
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
    summary: "Led a cross-functional team comprising of designers and engineers to grow the AfterYou Home Services platform from 0 to 16,000 users. 50% of time spent on product management, 50% on writing code",
    subsections: [{
      heading: "Hands-on software engineering",
      items: [
        "Single-handedly built the entire web application in 2 months to serve initial 2000 users",
        "Provided technical experitise to conceptualise 'Grab for Home Services' platform in Singapore and raised $600,000 in funding",
        "Decreased server maintenance time to practically zero by moving to serverless platform",
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
        "Kept abadoned feature to less than 5% by implementing user research and usability testing",
        "Outperformed paid ads by 30% margin by carefully optimising paid advertisement platforms",
      ]
    }
    ]
  }
]

var technologies = [
  {
    heading: "Programming",
    list: ["Ruby", "Python", "Elixir", "Javascript"].join(", ")
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
    list: ["MacOS", "Linux", "AWS", "Vultr"].join(", ")
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
    title: "CaptureBin.dev",
    date: "Sep 2019 • https://capturebin.dev",
    list: [
      "Built a developer tool that helps users capture and inspect HTTP requests in real time. Built with the Phoenix/Elixir stack."
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
    title: "National University of Singapore, B.Eng, Engineering Science",
    date: "Singapore • 2009 - 2014",
    subtext: "Major in Computational Engineering Sciences"
  },
  {
    title: "KTH Royal Institute of Technology",
    date: "Stockholm, Sweden • 2011 - 2012",
    subtext: "NUS Overseas Collages programme • Minor in Technopreneurship"
  }
]

var skills = [
  {
    title: "Product-centric Software Development",
    summary: "Hands-on software engineer with a track record of designing, implementing and launching applications with the user in mind. Able to appreciate user and business concerns, and prioritise for minimum time to market.",
  },
  {
    title: "People management",
    summary: "Experience in managing both up and down. Able to influence and manage executive stakeholders by and expressing technology in business context. Able to communicate, direct and manage teams for effective work output.",
  },
  {
    title: "Mentoring",
    summary: "Mentored more than 10+ individuals on personal and technical growth. Advised more than 20+ teams on matters of team effectiveness, leadership and decision making.",
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