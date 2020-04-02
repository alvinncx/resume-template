var experiences = [
  {
    title: "Head of Product Engineering",
    company: "NodeFlair",
    date: "Singapore • Dec 2019 - Current",
    summary: "Leading a cross-functional team of software engineers and product managers to build features a 3 sided digital platform for the tech recruitment market.",
    list: [
      "70% of time spent on designing and writing code, 30% on planning, code reviews and retrospectives",
      "Wrote 150+ feature and unit tests for a legacy code base that started with none",
      "Implemented ElasticSearch and full-text search indexing strategies for our talents database of 25,000",
      "Cut server costs by 80% through capacity planning",
      "Set up continuous integration, automated testing and load balancing architectures for production deployments",
      "Cut time-to-market by 5x through strategic software feature planning",
      "Introduced functional programming methodologies to greatly simplify complex business logic",
      "Technologies used: Ruby/Ruby on Rails, Javascript/React.js, CSS, PostgreSQL, Webpack, AWS, ElasticSearch, CircleCI, Github, JIRA"
    ]
  },
  {
    title: "Business Unit Manager",
    company: "Prime Technologies",
    date: "Singapore • Jun 2018 - Nov 2019",
    summary: "Led a software engineering business unit comprising 7 engineers to build customised enterprise resource planning systems for the business group.",
    list: [
      "50% of time spent on managing software projects, 30% on business planning, and 20% on technical advisory",
      "Served as chief technical advisor for the entire business group in matters of software engineering and technology.",
      "Managed 3 software projects with agile methodology",
      "Managed, planned and projected project workloads and corresponding human resources",
      "Structured and recovered project costs amounting to about $500,000",
      "Held financial responsibility for business margins, project budgeting, human resource planning and R&D budgets",
    ]
  },
  {
    title: "Product Manager / Full-Stack Engineer",
    company: "AfterYou",
    date: "Singapore • Nov 2014 - Jun 2018",
    summary: "Led a cross-functional team comprising of designers and engineers to grow the AfterYou Home Services platform from 0 to 16,000 users.",
    list: [
      "50% of time spent on product management, 50% on writing code",
      "Collaborated with multiple stakeholders to conceptualise 'Grab for Home Services' platform in Singapore, raising $600,000 in funding",
      "Developed product roadmap, metrics and release calendar",
      "Designed and engineered early systems to support a 3 sided platform that facilitates matchmaking and electronic payments.",
      "Implemented user research and usability testing workflows to guide our frontend UI designs",
      "Strategised and launched and digital marketing campaigns, beating market CPC average by 20% margin.",
      "Developed and refined customer service engagement rules",
      "Supported CTO in all frontend development duties.",
      "Technologies used: Javascript/Angular.js, Python/Django, CSS, Node.js, Stripe, Grunt.js, Intercom, Google Analytics",
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
    list: ["PostgresSQL", "ElasticSearch"].join(", ")
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
    date: "Sep 2019",
    list: [
      "Built a developer tool that helps users capture and inspect HTTP requests in real time. Built with the Phoenix/Elixir stack.",
      "https://capturebin.dev",
    ]
  },
  {
    title: "Expressor",
    date: "Aug 2018",
    list: [
      "Built a web-based, interactive calculator that evaluates expressions, variables & conditions. Built with ReactJS and Redux.",
      "https://github.com/alvinncx/expressor",
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
    subtext: "Minor in Technopreneurship"
  }
]

var skills = [
  {
    title: "Web Application Development",
    summary: "Hands-on software engineer with a track record of designing, implementing and launching applications. Able to use a wide repetiore of web related technologies to address problems.",
  },
  {
    title: "Cross domain knowledge synthesis",
    summary: "Possess experiences and knowledge to make sense of information over technical, business and user domains. Able to guide and maintain balance in decision making affecting multiple domains.",
  },
  {
    title: "People management",
    summary: "Experience in managing both up and down. Able to comminicate and express in both business and technical context for managing expectation between stakeholders.",
  },
  {
    title: "Mentoring",
    summary: "Mentored more than 20+ individuals thoughout business and technical domains to work on personal and business growth.",
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