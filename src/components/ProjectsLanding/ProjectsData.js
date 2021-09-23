import React from 'react'
import groupUp from './images/group-up.PNG'
import trivia from './images/fantasci-trivia.PNG'
import tgoose from './images/twitch-goose.PNG'
import km from './images/kennel_manager.PNG'
import { logDOM } from '@testing-library/react'

export const ProjectsData = [
    {
        title: 'Group Up',
        description: 'Group Up is a web application designed to make finding a group of friends to play the video game Overwatch easier when you are not online. Users can sign up, add friends, create a new lfg post, respond to lfg posts, and delete their own posts/comments.',
        url: 'https://ow-group-up.herokuapp.com/',
        code: '',
        image: groupUp,
        icons: [
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>, 
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M5.304 16.563c0-0.095-0.050-0.183-0.132-0.23l-2.192-1.261c-0.037-0.022-0.079-0.033-0.121-0.035-0.004 0-0.020 0-0.023 0-0.042 0.002-0.083 0.013-0.121 0.035l-2.191 1.261c-0.082 0.047-0.133 0.135-0.133 0.23l0.005 3.396c0 0.047 0.025 0.091 0.066 0.114 0.041 0.024 0.091 0.024 0.132 0l1.302-0.746c0.082-0.049 0.132-0.135 0.132-0.23v-1.587c0-0.094 0.050-0.182 0.132-0.229l0.555-0.319c0.041-0.024 0.086-0.035 0.133-0.035 0.045 0 0.091 0.012 0.132 0.035l0.554 0.319c0.082 0.047 0.132 0.135 0.132 0.229v1.587c0 0.095 0.051 0.181 0.133 0.23l1.302 0.746c0.041 0.024 0.092 0.024 0.132 0 0.040-0.023 0.066-0.067 0.066-0.114l0.004-3.396zM17.006 11.894c-0.041-0.023-0.091-0.022-0.131 0.002s-0.065 0.067-0.065 0.114v3.363c0 0.033-0.018 0.064-0.046 0.080s-0.064 0.017-0.093 0l-0.549-0.316c-0.082-0.047-0.183-0.047-0.265 0l-2.192 1.265c-0.082 0.047-0.133 0.135-0.133 0.229v2.531c0 0.095 0.050 0.182 0.132 0.229l2.192 1.266c0.082 0.047 0.183 0.047 0.265 0l2.193-1.266c0.082-0.048 0.132-0.135 0.132-0.229v-6.309c0-0.096-0.052-0.184-0.136-0.231l-1.305-0.728zM16.803 18.331c0 0.024-0.012 0.046-0.033 0.057l-0.753 0.434c-0.020 0.012-0.046 0.012-0.066 0l-0.753-0.434c-0.021-0.012-0.033-0.034-0.033-0.057v-0.869c0-0.024 0.013-0.046 0.033-0.057l0.753-0.435c0.020-0.012 0.046-0.012 0.066 0l0.753 0.435c0.020 0.012 0.033 0.034 0.033 0.057v0.869zM24.85 17.439c0.081-0.047 0.132-0.134 0.132-0.229v-0.613c0-0.095-0.050-0.181-0.132-0.229l-2.178-1.265c-0.082-0.048-0.183-0.048-0.265-0l-2.192 1.265c-0.082 0.047-0.132 0.135-0.132 0.229v2.53c0 0.095 0.051 0.183 0.134 0.23l2.178 1.241c0.080 0.046 0.179 0.046 0.26 0.001l1.317-0.732c0.041-0.023 0.067-0.067 0.068-0.115s-0.025-0.092-0.066-0.116l-2.206-1.266c-0.041-0.023-0.066-0.067-0.066-0.115v-0.793c0-0.047 0.025-0.091 0.066-0.115l0.687-0.395c0.041-0.023 0.091-0.023 0.132 0l0.687 0.395c0.041 0.024 0.066 0.067 0.066 0.115v0.624c0 0.047 0.025 0.091 0.066 0.115s0.092 0.023 0.133-0l1.312-0.763zM9.291 15.090c0.082-0.047 0.183-0.047 0.265 0l2.192 1.265c0.082 0.047 0.132 0.134 0.132 0.229v2.532c0 0.095-0.051 0.182-0.132 0.229l-2.192 1.266c-0.082 0.047-0.183 0.047-0.265 0l-2.192-1.266c-0.082-0.047-0.132-0.135-0.132-0.229v-2.532c0-0.095 0.050-0.182 0.132-0.229l2.192-1.265zM29.106 20.647c-0.075 0-0.151-0.020-0.217-0.058l-0.69-0.408c-0.103-0.058-0.052-0.078-0.019-0.090 0.137-0.048 0.165-0.059 0.312-0.142 0.015-0.009 0.036-0.005 0.052 0.004l0.53 0.315c0.019 0.011 0.046 0.011 0.064 0l2.067-1.193c0.019-0.011 0.031-0.033 0.031-0.056v-2.386c0-0.023-0.012-0.045-0.032-0.057l-2.066-1.192c-0.019-0.011-0.045-0.011-0.064 0l-2.066 1.192c-0.020 0.011-0.033 0.034-0.033 0.057v2.386c0 0.023 0.013 0.044 0.032 0.055l0.566 0.327c0.307 0.154 0.495-0.027 0.495-0.209v-2.355c0-0.033 0.027-0.059 0.060-0.059h0.262c0.033 0 0.060 0.026 0.060 0.059v2.355c0 0.41-0.223 0.645-0.612 0.645-0.119 0-0.214 0-0.476-0.129l-0.542-0.312c-0.134-0.077-0.217-0.222-0.217-0.377v-2.386c0-0.155 0.083-0.3 0.217-0.377l2.067-1.194c0.131-0.074 0.305-0.074 0.434 0l2.067 1.194c0.134 0.077 0.217 0.222 0.217 0.377v2.386c0 0.155-0.083 0.299-0.217 0.377l-2.067 1.193c-0.066 0.038-0.141 0.058-0.218 0.058zM29.745 19.004c-0.905 0-1.094-0.415-1.094-0.764 0-0.033 0.026-0.059 0.060-0.059h0.267c0.030 0 0.055 0.022 0.059 0.051 0.040 0.272 0.16 0.41 0.708 0.41 0.435 0 0.621-0.099 0.621-0.329 0-0.133-0.052-0.232-0.729-0.298-0.565-0.056-0.915-0.181-0.915-0.633 0-0.417 0.352-0.666 0.941-0.666 0.662 0 0.99 0.23 1.031 0.723 0.002 0.017-0.004 0.033-0.016 0.046s-0.027 0.019-0.044 0.019h-0.268c-0.028 0-0.052-0.020-0.058-0.047-0.064-0.286-0.221-0.378-0.645-0.378-0.475 0-0.531 0.166-0.531 0.29 0 0.151 0.065 0.194 0.707 0.279 0.635 0.084 0.937 0.203 0.937 0.649 0 0.45-0.375 0.708-1.030 0.708zM22.506 17.321c0.016-0.009 0.035-0.009 0.051 0l0.421 0.243c0.016 0.009 0.026 0.026 0.026 0.044v0.486c0 0.018-0.010 0.035-0.026 0.044l-0.421 0.243c-0.016 0.009-0.035 0.009-0.051 0l-0.42-0.243c-0.016-0.009-0.025-0.026-0.025-0.044v-0.486c0-0.018 0.010-0.035 0.025-0.044l0.42-0.243z"></path></svg>, 
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"></path></svg>, 
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path></svg>,
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"></path></svg>
    ],
        cName: 'proj-card',
        issues: "Finding a way to display stat info pulled from 3rd party API",
        solutions: "Utilized CSS Grid to create a new full page table layout for data display",
        l_learned:"API Integration, Routing, CSS Grid",
    },
    {
        title: 'Twitch_Goose',
        description: 'Twitch Goose was a group project completed in one week utilizing React, Nodejs, Javascript, and Material UI. The motivation for the project was to create a review based social media platform for users to come and rate their favorite Twitch Streamers.',
        url: 'https://twitch-goose.herokuapp.com/',
        code:'https://github.com/jessq1/twitch-goose',
        image: tgoose,
        icons: [
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 34 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path><path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2zm595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v.3h-1.2l-.3.1v-.1h-.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h.4l102-27.6 11.4-118.6H510.9v-.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>
        ],
        cName: 'proj-card',
        issues: "Communication issues with team members caused a stall in the production time line.",
        solutions: "Conducted a group meeting to squash any issues we had and go over problems we ran into on our sections together.",
        l_learned:"Team cooperation, React, Material UI, GitHub Workflow.",
    },
    {
        title: 'FantaSci Trivia',
        description: 'A Trivia game that tests your knowledge and expertise in 4 different movie sagas. Each quiz contains 10 questions and you will only have 60 seconds to complete as many correct answers as you can.',
        image: trivia,
        url: 'https://fantasci-trivia.surge.sh/',
        github:'https://github.com/n001ce/Unit-1-Project-Trivia-Game',
        icons: [
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path></svg>,

        ],
        cName: 'proj-card',
        issues: "Finding a way to create different quizes with the same object",
        solutions: "Utilized OOP to create a quiz object that contains questions and answers that can be utilized by multiple objects.",
        l_learned:"DOM Manipulation",
    },
    {
        title: 'Kennel_Master',
        description: 'https://github.com/n001ce/kennelmaster',
        url: 'https://kennelmanager.herokuapp.com/',

        image:km,
        icons: [
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M13.275 15.88h5.417c1.508 0 2.712-1.241 2.712-2.756v-5.164c0-1.47-1.24-2.574-2.712-2.819-0.932-0.155-1.898-0.226-2.825-0.221s-1.813 0.083-2.592 0.221c-2.295 0.405-2.712 1.254-2.712 2.819v2.067h5.423v0.689h-7.459c-1.576 0-2.956 0.947-3.388 2.75-0.498 2.066-0.52 3.355 0 5.512 0.385 1.606 1.306 2.75 2.882 2.75h1.865v-2.478c0-1.79 1.549-3.369 3.388-3.369zM12.933 8.649c-0.562 0-1.018-0.461-1.018-1.030 0-0.572 0.455-1.037 1.018-1.037 0.56 0 1.018 0.465 1.018 1.037 0 0.57-0.457 1.030-1.018 1.030zM26.826 13.465c-0.389-1.569-1.133-2.75-2.712-2.75h-2.035v2.408c0 1.867-1.583 3.439-3.388 3.439h-5.417c-1.484 0-2.712 1.27-2.712 2.756v5.164c0 1.47 1.278 2.334 2.712 2.756 1.717 0.505 3.363 0.596 5.417 0 1.365-0.395 2.712-1.191 2.712-2.756v-2.067h-5.417v-0.689h8.129c1.576 0 2.163-1.099 2.712-2.75 0.566-1.699 0.542-3.332 0-5.512zM19.033 23.794c0.562 0 1.018 0.461 1.018 1.030 0 0.572-0.456 1.037-1.018 1.037-0.56 0-1.018-0.465-1.018-1.037 0-0.57 0.457-1.030 1.018-1.030z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M26.741 18.661c-0.24-0.278-0.65-0.202-0.967-0.139-0.762 0.136-1.591 0.294-2.329-0.023 1.318-2.080 2.355-4.351 2.935-6.748 0.211-0.911 0.374-1.843 0.343-2.781-0.023-0.525-0.096-1.084-0.417-1.519-0.794-1.047-1.945-1.81-3.214-2.151-1.585-0.43-3.285-0.302-4.844 0.18-0.129 0.026-0.256-0.032-0.382-0.048-1.415-0.287-2.975-0.174-4.202 0.645-1.473-0.53-3.056-0.85-4.624-0.686-1.166 0.121-2.337 0.663-3.006 1.656-0.846 1.239-0.961 2.821-0.826 4.273 0.272 1.928 0.742 3.826 1.34 5.677 0.394 1.154 0.828 2.317 1.529 3.325 0.356 0.495 0.829 0.994 1.466 1.072 0.566 0.069 1.078-0.282 1.425-0.698 0.6-0.718 1.217-1.423 1.857-2.105 0.418 0.205 0.872 0.323 1.336 0.358-0.251 0.298-0.458 0.687-0.858 0.804-0.539 0.208-1.17 0.18-1.645 0.539-0.274 0.196-0.287 0.623-0.041 0.848 0.445 0.432 1.101 0.525 1.693 0.575 0.839 0.064 1.687-0.218 2.324-0.768-0.004 1.334 0.002 2.672 0.152 3.999 0.075 0.777 0.41 1.551 1.001 2.074 0.557 0.486 1.351 0.587 2.058 0.464 0.694-0.132 1.407-0.34 1.949-0.814 0.576-0.508 0.822-1.275 0.936-2.011 0.207-1.319 0.364-2.644 0.514-3.969 1.483 0.25 3.161-0.034 4.269-1.117 0.237-0.223 0.462-0.609 0.228-0.912zM23.45 6.117c0.89 0.338 1.681 0.925 2.275 1.668 0.283 0.355 0.319 0.832 0.337 1.268 0.013 1.040-0.197 2.067-0.464 3.067-0.511 1.851-1.287 3.625-2.262 5.277-0.096 0.163-0.201 0.32-0.317 0.469-0.009-0.045-0.027-0.137-0.036-0.183 0.121-0.318 0.298-0.618 0.367-0.956 0.244-0.953 0.038-1.934-0.050-2.893-0.092-0.905 0.217-1.786 0.209-2.689 0.035-0.442-0.14-0.86-0.31-1.257-0.615-1.375-1.593-2.598-2.848-3.438-0.306-0.21-0.648-0.357-0.953-0.568 1.334-0.286 2.765-0.25 4.051 0.234zM22.637 13.836c0.078 1.071 0.389 2.221-0.116 3.237-0.677-1.347-1.552-2.633-1.857-4.133-0.086-0.477-0.108-1.081 0.316-1.413 0.538-0.382 1.241-0.296 1.863-0.258-0.027 0.859-0.291 1.702-0.205 2.567zM10.534 20.181c-0.243 0.286-0.571 0.627-0.985 0.542-0.484-0.14-0.792-0.582-1.062-0.979-0.729-1.166-1.168-2.483-1.571-3.79-0.451-1.547-0.831-3.119-1.050-4.717-0.109-1.216-0.041-2.52 0.581-3.603 0.466-0.82 1.335-1.343 2.248-1.514 1.462-0.281 2.961 0.017 4.364 0.445-0.619 0.68-1.101 1.481-1.382 2.358-0.383 1.171-0.558 2.417-0.466 3.648 0.053 0.867 0.030 1.738-0.091 2.598-0.152 1.123 0.299 2.278 1.133 3.036-0.568 0.664-1.17 1.297-1.72 1.977zM11.814 16.158c-0.143-0.636 0.044-1.276 0.065-1.913 0.049-0.721-0.002-1.443-0.016-2.164 0.674-0.436 1.462-0.777 2.279-0.73 0.423 0.018 0.813 0.317 0.915 0.734 0.371 1.477 0.486 3.121-0.225 4.52-0.248 0.54-0.449 1.099-0.622 1.666-1.182 0.012-2.187-0.987-2.396-2.112zM15.492 20.112c-0.742 1.005-2.227 1.197-3.3 0.65 0.529-0.245 1.148-0.226 1.659-0.528 0.494-0.266 0.69-0.851 1.152-1.152 0.503-0.071 0.87 0.676 0.49 1.029zM21.856 18.938c-0.282 0.454-0.183 1.008-0.252 1.512-0.162 1.413-0.321 2.828-0.551 4.232-0.109 0.673-0.395 1.388-1.030 1.723-0.651 0.331-1.407 0.539-2.139 0.426-0.695-0.122-1.133-0.77-1.33-1.401-0.144-0.529-0.159-1.082-0.2-1.627-0.070-1.315-0.071-2.633-0.037-3.949 0.029-0.514-0.235-1.049-0.694-1.299-0.222-0.125-0.482-0.142-0.73-0.162 0.195-0.967 0.784-1.802 0.986-2.768 0.262-1.195 0.117-2.439-0.151-3.619-0.131-0.589-0.579-1.11-1.175-1.253-0.918-0.231-1.844 0.128-2.665 0.512 0.104-1.334 0.461-2.7 1.278-3.783 0.601-0.806 1.533-1.344 2.528-1.473 1.642-0.209 3.366 0.243 4.671 1.27 1.078 0.852 1.93 2.006 2.389 3.304-0.763-0.027-1.628-0.058-2.245 0.472-0.56 0.472-0.632 1.277-0.506 1.953 0.292 1.608 1.241 2.975 1.941 4.421 0.186 0.339 0.436 0.635 0.674 0.939-0.283 0.143-0.599 0.28-0.76 0.571zM23.82 20.075c-0.504 0.060-1.028 0.078-1.514-0.089 0.002-0.275-0.013-0.601 0.208-0.806 0.175-0.129 0.424-0.248 0.626-0.107 0.86 0.453 1.86 0.232 2.775 0.121-0.559 0.544-1.333 0.798-2.095 0.881zM21.178 11.728c-0.179 0.147 0.014 0.367 0.168 0.436 0.373 0.219 0.884-0.087 0.896-0.513-0.337-0.157-0.76-0.141-1.065 0.077zM14.576 12.408c0.159-0.090 0.327-0.337 0.143-0.486-0.262-0.213-0.643-0.254-0.962-0.168-0.103 0.036-0.211 0.106-0.19 0.232 0.074 0.428 0.647 0.688 1.008 0.422z"></path></svg>,
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 32 32" height="5em" width="5em" xmlns="http://www.w3.org/2000/svg"><path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path></svg>,

        ],
        cName: 'proj-card',
        issues: "Finding a way to create different user roles for signed up users.",
        solutions: "Utilized custom user models to create different roles",
        l_learned:"PostgresSQL Integration, ERD Design, Custom User Models",
    },
    
    
    
]