import React, { Component } from 'react'
import '../css/landing-body.css';
import Background from './Background';
import Footer from './Footer';
import {Helmet} from 'react-helmet';

class LandingBody extends Component {
   render() {
      return (
         <div class="parent-element">
             {/* <!-- Dynamic Title --> */}
             <Helmet>
                <title>Geeksforgeeks | KIIT - Home</title>
            </Helmet>
             <Background clipType="clipping-landing" overlayColor="bgcolor-landing"></Background>
             <div id="landing_title"> 
                <lable id="landing_title_right1">GeeksforGeeks</lable> <br/>
                <lable id="landing_title_right2">KIIT Chapter</lable> 
            </div>
            <div className="landing_intro">
                <h1 id="landing_intro_title">One for All, All for One</h1>
                <div id="landing_intro_line"></div>
                <div className="LI_content">
                    <div className="LI_image"></div>
                    <div className="LI_context">
                    We are a group of enthusiasts trying to spread the idea of One for All and All for One.
                    We inspire students to practice coding, get 
                    acquainted with algorithms and enjoy the concepts in a full fledged way.
                    We are putting immense efforts in increasing the standards of our society by proposing new ideas for the benefit of our fellow mates and for our growth as well.
                    </div>
                </div>
            </div>
          <h1 id="upcomingEvent">Upcoming Event</h1>
          <div id="landing_line_Event"></div>
          <div id="event">
            <div id="event_img">
                <div id="event_img_display"></div>
            </div>
              <div id="event_context">
                  <div id="event_content">
                      {/* <div id="event_title">Dev<lable className="cast_green">Cast</lable> E03</div> */}
                      <div id="event_title">Google Hashcode 2021</div>
                      <div id="event_desc">
                          <p>Hey Geeks, <br></br>It's almost time to wind up the registration process of HASHCODE 2021 and we don't want any of you to let this opportunity go in vain.
                            So if you are yet to get yourself enrolled. This year we are enlightened to be the organizers of the Google Hashcode 2021.
                            <br></br>Make sure you register under the "KIIT-GFG Hub".</p>
                          <p class="event_space"><b class="event_bold">TIME :</b> 11:00 PM - 3:00 AM </p>
                          <p class="event_space"><b class="event_bold">DATE :</b> 25-02-2021 </p>
                      </div>
                  </div>
                  <a href="https://discord.gg/rJmtsvTH8F" id="register_button" target="_blank" rel="noopener noreferrer">Join Discord</a>
                  {/* <a href="/RegistrationForm" id="watch_now_button">Watch Now</a> */}
              </div>
          </div>
          <h1 id="landingProjectsDisplay">Projects</h1>
          <div id="landing_line_Project"></div>
          <div id="projects">
              <a href="/Projects" class="project_card">
                  <div class="project_img">
                      <div id="project_img_display1"></div>
                  </div>
                  <div class="project_title">The Geek Bot</div>
                  <div class="project_desc">
                    Our App-Dev Team started working on their 1st project, the Geek Bot. 
                    It possesses a programmer’s search feature that enables the users to search various programming concepts. 
                    Besides, it even returns the list of all ongoing coding events all around the world. 
                  </div>
              </a>
              <a href="/projects" class="project_card">
                  <div class="project_img">
                    <div id="project_img_display2"></div>
                  </div>
                  <div class="project_title">GFG KIIT Website</div>
                  <div class="project_desc">
                  Our Web-Dev Team started working on their 1st project, Geeksforgeeks KIIT Student Club Website. 
                  It possesses a programmer’s search feature that enables the users to search various programming concepts. 
                  </div>
              </a>
              <a href="/projects" class="project_card">
                  <div class="project_img">
                    <div id="project_img_display3"></div>
                  </div>
                  <div class="project_title">Hear ME</div>
                  <div class="project_desc">
                  Our CP Team started working on their 1st project, Hear Me. 
                  It possesses a programmer’s search feature that enables the users to search various programming concepts. 
                  </div>
              </a>
          </div>
          <section class="landing-scroll-branding">
            <div class="scroll designers org">
                <div>
                <span class="filled">Designers</span> <span>Developers</span>
                <span>Programmers</span> <span>Creators</span>
                <span>Enthusiasts</span> <span class="filled">Designers</span>
                <span>Developers</span> <span>Programmers</span>
                <span>Creators</span> <span>Enthusiasts</span>
                </div>
                <div>
                <span class="filled">Designers</span> <span>Developers</span>
                <span>Programmers</span> <span>Creators</span>
                <span>Enthusiasts</span> <span class="filled">Designers</span>
                <span>Developers</span> <span>Programmers</span>
                <span>Creators</span> <span>Enthusiasts</span>
                </div>
            </div>
            <div class="scroll developers alt">
                <div>
                <span>Designers</span> <span class="filled">Developers</span>
                <span>Programmers</span> <span>Creators</span>
                <span>Enthusiasts</span> <span>Designers</span>
                <span class="filled">Developers</span> <span>Programmers</span>
                <span>Creators</span> <span>Enthusiasts</span>
                </div>
                <div>
                <span>Designers</span> <span class="filled">Developers</span>
                <span>Programmers</span> <span>Creators</span>
                <span>Enthusiasts</span> <span>Designers</span>
                <span class="filled">Developers</span> <span>Programmers</span>
                <span>Creators</span> <span>Enthusiasts</span>
                </div>
            </div>
            <div class="scroll programmers org">
                <div>
                <span>Designers</span> <span>Developers</span>
                <span class="filled">Programmers</span> <span>Creators</span>
                <span>Enthusiasts</span> <span>Designers</span>
                <span>Developers</span> <span class="filled">Programmers</span>
                <span>Creators</span> <span>Enthusiasts</span>
                </div>
                <div>
                <span>Designers</span> <span>Developers</span>
                <span class="filled">Programmers</span> <span>Creators</span>
                <span>Enthusiasts</span> <span>Designers</span>
                <span>Developers</span> <span class="filled">Programmers</span>
                <span>Creators</span> <span>Enthusiasts</span>
                </div>
            </div>
            <div class="scroll creators alt">
                <div>
                <span>Designers</span> <span>Developers</span>
                <span>Programmers</span> <span class="filled">Creators</span>
                <span>Enthusiasts</span> <span>Designers</span>
                <span>Developers</span> <span>Programmers</span>
                <span class="filled">Creators</span> <span>Enthusiasts</span>
                </div>
                <div>
                <span>Designers</span> <span>Developers</span>
                <span>Programmers</span> <span class="filled">Creators</span>
                <span>Enthusiasts</span> <span>Designers</span>
                <span>Developers</span> <span>Programmers</span>
                <span class="filled">Creators</span> <span>Enthusiasts</span>
                </div>
            </div>
            <div class="scroll enthusiasts org">
                <div>
                <span>Designers</span> <span>Developers</span>
                <span>Programmers</span> <span>Creators</span>
                <span class="filled">Enthusiasts</span> <span>Designers</span>
                <span>Developers</span> <span>Programmers</span>
                <span>Creators</span> <span class="filled">Enthusiasts</span>
                </div>
                <div>
                <span>Designers</span> <span>Developers</span>
                <span>Programmers</span> <span>Creators</span>
                <span class="filled">Enthusiasts</span> <span>Designers</span>
                <span>Developers</span> <span>Programmers</span>
                <span>Creators</span> <span class="filled">Enthusiasts</span>
                </div>
            </div>
        </section>
          <Footer bgColor="footer-landing"></Footer>
      </div>
      )
   }
}
export default LandingBody;