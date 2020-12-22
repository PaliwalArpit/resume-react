import React, { Component } from "react";
import Container from "../ui/Container";
import Sidebar from "./Sidebar";
import Main from "./Main";
import JSLogo from "./images/js.svg";
import JavaLogo from "./images/java.svg";
import SQLLogo from "./images/sql.svg";
import SeleniumLogo from "./images/selenium.svg";
import Link from "../ui/Link";
import PythonLogo from "./images/python.svg";
import JenkinsLogo from "./images/jenkins.svg";
import DockerLogo from "./images/docker.svg";
import APItestingLogo from "./images/api.svg";
import PostmanLogo from "./images/postman.svg";
import ReactLogo from "./images/react.svg";
import JMterLogo from "./images/jmeter.svg";
import ReactNativeLogo from "./images/react.svg";
import htmlLogo from "./images/html.svg";
import GitLogo from './images/git.svg'
class Resume extends Component {
  render() {
    return (
      <Container>
        <Sidebar data={DATA.sidebar} />
        <Main {...DATA.main} />
      </Container>
    );
  }
}

const DATA = {
  sidebar: {
    education: {
      university: "Pune University",
      degree: "Bachelor of Information Technology",
      duration: "July 2010 - July 2014",
    },
    languages: [
      {
        name: "Selenium",
        proficiency: 0.7,
        logo: SeleniumLogo,
      },
      {
        name: "Jmeter",
        proficiency: 0.8,
        logo: JMterLogo,
      },
      {
        name: "JavaScript",
        proficiency: 0.5,
        logo: JSLogo,
      },
      {
        name: "Java",
        proficiency: 0.7,
        logo: JavaLogo,
      },
      {
        name:"GIT",
        proficiency: 0.7,
        logo: GitLogo
      },
      {
        name: "Python",
        proficiency: 0.5,
        logo: PythonLogo,
      },
      {
        name: "Jenkins",
        proficiency: 0.7,
        logo: JenkinsLogo,
      },
      {
        name: "Docker",
        proficiency: 0.7,
        logo: DockerLogo,
      },
      {
        name: "SQL",
        proficiency: 0.7,
        logo: SQLLogo,
      },
      {
        name: "Postman",
        proficiency: 0.8,
        logo: PostmanLogo,
      },
      {
        name: "Html & CSS",
        proficiency: 0.4,
        logo: htmlLogo,
      },
    ],
    frameworks: [
      "Selenium-Java",
      "WebdriverIO",
      "testNg",
      "Pytest",
      "Cypress",
      "Nightwatch",
      "Jasmine",
      "Pytest-request",
      "Mocha",
      "Protractor",
      "BDD"
    ],
    tools: [
      "JMeter",
      "GIT",
      "Browserstack",
      "Splunk",
      "Sentry",
      "My SQL workbench",
      "Jenkins",
      "Docker",
      "Percy",
      "ServiceNow",
      "Selenoid",
      "Kubernetes",
      "Openshift"
    ],
    links: [
      {
        name: "Phone",
        display: "+91 9890764723",
        icon: "phone",
      },
      {
        name: "Email",
        display: "arpitpaliwal14@gmail.com",
        link: "mailto:arpitpaliwal14@gmail.com",
        icon: "envelope",
      },
      {
        name: "GitHub",
        display: "github.com/PaliwalArpit",
        link: "https://github.com/PaliwalArpit",
        icon: "github",
      },
      {
        name: "LinkedIn",
        display: "arpitpaliwal",
        link: "https://www.linkedin.com/in/arpit-paliwal-02841aa6/",
        icon: "linkedin",
      },
    ],
    hobby: {
      hobby: "Hiking, Cycling, Reading, PS",
    },
  },
  main: {
    name: "Arpit Paliwal",
    program: {
      term: "",
      nickname: "",
      name: "Software Engineering",
    },
    companies: [
      {
        name: "Redhat",
        title: "Senior SDET",
        range: "March 2018, November 2020",
        projects: [
          {
            name: "Front end Web automation",
            tools: [
              "WebdriverIO",
              "Javascript",
              "Jenkins",
              "Docker",
              "Selenium Grid",
              "GIT"
            ],
            achievements: [
              <span>
                Designed complete test architecture of customer facing
                application in terms of UI and Backend from scratch.
              </span>,
              <span>
                Actively involved in making key decisions with stakeholders and
                developers for the application
              </span>,
              <span>Scrum master for daily updates.</span>,
              <span>
                Involved in debugging issues customer is facing by going through
                various systems like Splunk , Database, Sentry logs etc.
              </span>,
              <span>
                Leading all technical efforts in automation and QE space inside
                project.
              </span>,
              <span>
                Created end to end test pipeline using selenium grid and docker
                which runs daily test excecution over Jenkins.
              </span>,

              <span>
                Wrote test case parameters, including test scripts and
                automation guidelines.
              </span>,
              <span>
                Integrated collected data into business process enhancements to
                address ongoing business goals.
              </span>,
              <span>
                Defined and tracked quality assurance metrics, including test
                results, defect counts and performance discrepancies.
              </span>,
            ],
          },
          {
            name: "CLI application testing using Pytest",
            tools: ["Python", "Basic shell scripting"],
            achievements: [
              <span>
                Created python based test framework for running commands
              </span>,
              <span>Used python subprocess library to do automation</span>,
              <span>Wrote basic shell script to excecute tests</span>,
              <span>
                Created CI/CD pipeline which helps in running test over every
                code push
              </span>,
            ],
          },
          {
            name: "Backend API Testing",
            tools: ["JMeter", "Postman", "MySQL", "Pytest request"],
            achievements: [
              <span>Created and maintained tests for api functionalties</span>,
              <span>Used JMeter for API automation</span>,
              <span>
                Involved in requirement gathering from frontend team Developers
                and Stakeholders
              </span>,
              <span>
                Created CI/CD pipeline which helps in running test over Jenkins
                and send daily reports with concerned teams
              </span>,
              <span>
                Database testing to check proper data is getting saved in DB
              </span>,
              <span>Debugged if any issue occurs using MySQL and Splunk</span>,
            ],
          },
        ],
      },
      {
        name: "Congizant",
        title: "Technical Lead",
        range: "Jan 2015, March 2018",
        projects: [
          {
            name: "ServiceNow",
            tools: ["Selenium", "Java", "Maven", "testNg", "Cucumber"],
            achievements: [
              <span>Worked on the test automation of ServiceNow.</span>,
              <span>
                Wrote test case parameters, including test scripts and
                automation guidelines.
              </span>,
              <span>
                Operated under Agile and Scrum frameworks to complete releases
                every 3 weeks and well-organized sprints.
              </span>,
              <span>
                Reduced overall testing hours 90% by writing and optimizing
                automation test scripts in Selenium.
              </span>,
            ],
          },
        ],
      },
      {
        name: "Extra activities",
        title: "",
        range: "",

        projects: [
          {
            name: "",
            tools: ["Javascript", "ReactJS", "React native"],
            achievements: [
              <span>
                I have been working various personal projects and done React
                boot camp to gain good level of understanding in web
                development. My previous experience as front and back end
                testing have given me advantage.
              </span>,
              <span>
                Designed web application in React to check various test metrices
                using various public APIs like Git, Jenkins, Browserstack, etc.
              </span>,
              <span>
                Created Hotel reservation capstone project using React and React
                context api.
              </span>,
              <span>
                Created mobile application using React native for tracking
                weather forecast using public weather forecast apis.
              </span>,
              <span>
                Created React application for git hub jobs as capstone project
              </span>,
              <span>
                Created React application for searching images using pixaby api.
              </span>,
                <span>
                Scrimba certification for ReactJS bootcamp
              </span>,
            ],
          },
        ],
      },
    ],
    projects: [
      // {
      //   name: "Created web applications",
      //   tools: ["ReactJS", "React-Native", "Html", "CSS"],
      //   github: "https://github.com/PaliwalArpit?tab=repositories",
      //   achievements: [
      //     <span>
      //       Created dashboard which shows stakeholders status and health of
      //       application by consuming different rest API from Jenkins, GIT,
      //       Browserstack, internal APIs
      //     </span>,
      //     <span>Resume is created using ReactJS</span>,
      //     <span>
      //       Simple web applications : 1] Hotel reservation application, 2]
      //       Weather forecast mobile app 3]Expense tracker
      //     </span>,
      //     <span>Scrimba Certification in ReactJS</span>,
      //   ],
      // },
      {
        name: "Speaker at QEcampX",
        tools: ["Selenium", "Chromedevtools"],
        github: "https://github.com/PaliwalArpit/selenium-chormedevtools-demo",
        achievements: [
          "Spoke about various features of Selenium 4 and chrome dev tools integration which going to be release in 2020 .QE camp is Redhat internal conference giving opportunities to QEs to share ideas and technology in QE world",
        ],
      },
      {
        name: "Speaker at Test trove",
        tools: ["Selenoid", "Docker", "Selenium grid"],
        github: "https://github.com/PaliwalArpit/wdio-selenoid-boilerplate",
        achievements: [
          "Selenoid is selenium hub golang implementation to run browsers in docker conatiners",
          "Presented boilerplate code with audience shared what are the usage and features provided by Selenoid",
        ],
      },
    ],
  },
};

export default Resume;
