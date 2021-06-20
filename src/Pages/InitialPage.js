import React from 'react'
import{Link,Route} from 'react-router-dom'; 
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const New = () => {
    return (
        <div className="wrapper">
          <div >
          <nav className='navbars'>
        <Link to='/navbar/home' className='navbar-links'>
          BUILD OUT
          <i class='fab fa-firstdraft' />
        </Link>
        <div class="topbar-items">
          <ul className="navbar-menu">
            <li className="navbar-item">
            <Link to='/login' className='navbar-links'>
                    Login
                </Link>
            </li>
            <li className="navbar-item">
            <Link to='/contactus' className='navbar-links'>
                    Contact Us
                </Link>
            </li>
          </ul>
        </div>
        </nav>
            <div class="app-container">
            <div className="admin-cards">
                  <span></span>
                  <div className="card-body">
              <Carousel>
                
                  
  <Carousel.Item>
    <a href="#react"><img
      className="d-block w-100"
      src="https://effectussoftware.com/blog/wp-content/uploads/2020/02/What-is-React-JS.jpg"
      alt="First slide"
    /></a>
  </Carousel.Item>
  <Carousel.Item>
    <a href="#java"><img
      className="d-block w-100"
      src="https://www.softzone.es/app/uploads-softzone.es/2020/09/Programar-Java.jpg"
      alt="Second slide"
    /></a>

    
  </Carousel.Item>
  <Carousel.Item>
    <a href="#nodejs"><img
      className="d-block w-100"
      src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/03/nodejs-reference-architecture_2x.png?itok=foFxRy8O"
      alt="Third slide"
    /></a>

    
  </Carousel.Item>
  <Carousel.Item>
    <a href="#python"><img
      className="d-block w-100"
      src="https://content.techgig.com/thumb/msid-79386213,width-860,resizemode-4/5-Myths-around-Python-programming-language-that-every-programmer-must-know.jpg?88712"
      alt="Fourth slide"
    /></a>

    
  </Carousel.Item>
  <Carousel.Item>
    <a href="#angular"><img
      className="d-block w-100"
      src="https://www.amarinfotech.com/wp-content/uploads/2020/01/Why-Angularjs-is-the-best-front-end-framework.jpg"
      alt="Fifth slide"
    /></a>

    
  </Carousel.Item>
</Carousel>
</div>
</div>
<div class="c-con">
            <div class="c-card" id="react">
              <div class="c-card-img">
                <img className="d-block" src="https://effectussoftware.com/blog/wp-content/uploads/2020/02/What-is-React-JS.jpg" alt="React"></img>
              </div>
              <div class="c-card-con">
                <p>React (also known as React.js or ReactJS) is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.</p>
                <a href="https://reactjs.org/">React Tutorial</a>
                <a href="https://reactjs.org/docs/getting-started.html">View Documentation</a>
              </div>
            </div>
            <div class="c-card" id="java">
              <div class="c-card-img">
                <img className="d-block" src="https://www.softzone.es/app/uploads-softzone.es/2020/09/Programar-Java.jpg" alt="Java"></img>
              </div>
              <div class="c-card-con">
                <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them.</p>
                <a href="https://www.oracle.com/java/technologies/">Java Tutorial</a>
                <a href="https://www.oracle.com/java/technologies/">View Documentation</a>
              </div>
            </div>
            <div class="c-card" id="nodejs">
              <div class="c-card-img">
                <img className="d-block" src="https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2021/03/nodejs-reference-architecture_2x.png?itok=foFxRy8O" alt="Nodejs"></img>
              </div>
              <div class="c-card-con">
                <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>
                <a href="https://nodejs.org/en/">NodeJs Tutorial</a>
                <a href="https://nodejs.org/en/docs/">View Documentation</a>
              </div>
            </div>
            <div class="c-card" id="python">
              <div class="c-card-img">
                <img className="d-block" src="https://content.techgig.com/thumb/msid-79386213,width-860,resizemode-4/5-Myths-around-Python-programming-language-that-every-programmer-must-know.jpg?88712"
      alt="Python"></img>
                </div>
              <div class="c-card-con">
                <p>Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.</p>
                <a href="https://www.python.org/">Python Tutorial</a>
                <a href="https://www.python.org/">View Documentation</a>
              </div>
            </div>
            <div class="c-card" id="angular">
              <div class="c-card-img">
              <img
      className="d-block"
      src="https://www.amarinfotech.com/wp-content/uploads/2020/01/Why-Angularjs-is-the-best-front-end-framework.jpg"
      alt="Angular"
    />
                </div>
              <div class="c-card-con">
                <p>AngularJS is used as the frontend of the MEAN stack, consisting of MongoDB database, Express.js web application server framework, AngularJS itself (or Angular), and Node.js server runtime environment.</p>
                <a href="https://angularjs.org/">Angular Tutorial</a>
                <a href="https://angularjs.org/">View Documentation</a>
              </div>
            </div>
            </div>        
              
            </div>
            
          </div>
          <footer class="c-footer">
            <div class="c-inner">
              Copyright BuildOut. All rights reserved. For internal use only.
            </div>
          </footer>
            
        </div>
    )
}

export default New