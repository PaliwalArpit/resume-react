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
import JMterLogo from "./images/jmeter.svg";
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
        name: "My SQL",
        proficiency: 0.7,
        logo: SQLLogo,
      },
      {
        name: "Postman",
        proficiency: 0.8,
        logo: PostmanLogo,
      },
      {
        name: "Rest assured",
        proficiency: 0.5,
        logo: APItestingLogo,
      }
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
        range: "March 2018 - Present",
        projects: [
          {
            name: "UI Automation",
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
                Working as a <b>QA lead</b> in the Agile project, leading Scrums, Spring Planning and Retrospectives.
              </span>,
              <span>
                Worked as a <b>Software Development Engineer in Test (SDET)</b>, I involved in implementing the framework, developing automation scripts for the new User stories and maintain and run the Regression Scripts.
              </span>,
              <span>Worked on <b>WebdriverIO</b> (nodeJS framework) using <b>ES6.</b></span>,
              <span>Worked with <b>Selenium Grid</b> for running multiple tests across different browsers, operating systems, and
              machines in parallel.</span>,
              <span>
                Involved in debugging issues customer is facing by going through
                various systems like <b>Splunk,Pendo,Sentry logs</b>.
              </span>,
              <span>
               Worked on <b>Git</b> for version control, <b>Jenkins</b> for Continuous Integration and <b>Jira</b> for
                project management and defect-tracking.
              </span>,
              <span>
              Actively involved in making key decisions with stakeholders and
              developers for the application.
            </span>,
            <span><b>Scrum master</b> for daily updates.</span>,
            ],
          },
          {
            name: "API Automation",
            tools: ["JMeter", "Postman", "MySQL", "Pytest request"],
            achievements: [
              <span>Created and maintained test automation for Rest APIs using <b>Jmeter</b></span>,
              <span>
                Created <b>CI/CD pipelines</b> which helps in running test over <b>Jenkins</b>
                and send daily reports with concerned teams
              </span>,
              <span><b>Performace</b> and Load testing using <b>Jmeter.</b></span>,
              <span>
                Experienced with <b>MySQL</b> for testing data flow from application.
              </span>,
              <span>Debugged application issues occurs using <b>Splunk.</b></span>,
              <span>
                Involved in requirement gathering from frontend team Developers
                and Stakeholders.
              </span>,
            ],
          },
          {
            name: "CLI - Pytest automation",
            tools: ["Python", "Basic shell scripting"],
            achievements: [
              <span>
                Worked on <b>Pytest</b> which Python based testing library.
              </span>,
              <span>Experienced in <b>Linux and Shell scripting</b> to automate CLI based tools.</span>,
              <span>
                Created <b>CI/CD</b> pipeline which helps in running test over every
                code push on <b>Gitlab.</b>
              </span>,
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
            name: "UI Automation - ServiceNow",
            tools: ["Selenium", "Java", "Maven", "TestNg", "Cucumber"],
            achievements: [
              <span>Worked on the test automation of <b>ServiceNow.</b></span>,
              <span>Developed TEST Frameworks using <b>TestNG/ Junit, ANT/MAVEN</b> build tools.</span>,
              <span>Created Automation Test scripts using <b>Cucumber</b> frame work with selenium-Webdriver and Page objects.
              </span>,
              <span>Experience in implementing the <b>Page Object Model (POM)</b> by creating element for each page object and reused
              all the objects in various scripts.</span>,
              <span>Experience in writing good quality object-oriented code for testing purposes by following industry standard java
              coding standards.</span>
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
            tools: ["Devops tools","Javascript", "ReactJS", "React native"],
            achievements: [
              <span>
                Proven skills in Devops tools like <b>Kubernetes, AWS, Openshift, Docker and Jenkins.</b>
                </span>,
             <span>
              <a href="https://react-hotel-reservation-app.herokuapp.com/">Hotel reservation app</a> : Created Hotel reservation capstone project using React and React
              context api.
            </span>,
            <span>
               <a href="https://react-hotel-reservation-app.herokuapp.com/">Github job search app</a> : 
              Created React application for git hub jobs project
            </span>,
            <span>
               <a href="https://pixaby-image-search-react.herokuapp.com/">Image search app</a> : 
              Created React application for searching images using pixaby api.
            </span>,
             <span>
             <a href="https://react-expense-tracker-demo.herokuapp.com/">Expense tracker app</a> : 
            Expense tracker using React and React context api
          </span>,
            ],
          },
        ],
      },
    ],
    projects: [
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
