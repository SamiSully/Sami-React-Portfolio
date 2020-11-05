import React from 'react';
import Card from "../Card/Card";
import LinkCards from "../LinkCards/LinkCards";
import RubbishRumble from "../../assets/Preview4.png";
import CityZen from "../../assets/CityZenDemo.png";
import Planner from "../../assets/DailyPlannerDemo.png";
import Tracker from "../../assets/employeeTrackerDemo.png";

function Portfolio() {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                  <LinkCards linkTitle="Resume" linkthis="https://drive.google.com/file/d/1OGk8i693iF25Xjkkt_k6_YJMKpiU8Eg5/view?usp=sharing"/>
                  <LinkCards linkTitle="LinkedIn" linkthis=""/>
                  <LinkCards linkTitle="Github" linkthis="https://github.com/SamiSully"/>
                </div>
            </div>

        <div className="row">
            <Card title="Rubbish Rumble" 
            image={RubbishRumble}  
            content= "A single player battle RPG where you create your own list of
                characters to them battle an enemy fighter. Allows individual
                users to create characters attached to their name that level up
                and increate their stats as they win fights.
                I built this application from scratch with 3 of my classmates!
                This application used mySQL, Sequalize, Node.js, Jquery,
                Handlebars, JavaScript, Materialize, and Animate.CSS." 
                github="https://github.com/SamiSully/Rubbish-Rumble" 
                demo="http://rubbishrumble.herokuapp.com/" />
            <Card title="CityZen" 
            image={CityZen}
            content= "An application using two APIs, Realtor and Adzuna, for the user
                to search for a new job and housing at the same time. It is
                built so the user can search where they would like to live, and
                what job they want to work, and will populate with jobs, and
                rental properties in the area that they could ptentially afford
                with that jobs salary." 
                github="https://github.com/rajdeep24/CityZen" 
                demo="https://rajdeep24.github.io/CityZen/"/>
            <Card title="Day Planner" 
            image={Planner} 
            content= "A single page javascript and jquery page that allows you to
                record tasks based on each hour. It generates the timeblocks
                dynamically and updates based on the hour in order to mark past
                events in one color, highlight the current hour, and have the
                future events in another color for easier readability." 
                github="https://github.com/SamiSully/Daily-Task-Planner" 
                demo="https://samisully.github.io/Daily-Task-Planner/"/>
            <Card title="Employee Manager" 
            image={Tracker} 
            content= "A command line application that lets you add employees, roles,
            and departments, while also updating their information or
            deleting them from the system, using Node.js, MySql, and
            Inquirer.
            There is no live demo since it is a command line application,
            but you can download it from github and use it on your own
            machine!" 
            github="https://github.com/SamiSully/Full-Employee-Tracker" />
        </div>
        </div>
    );
}

export default Portfolio;