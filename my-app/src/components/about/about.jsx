import "./about.scss"

function About() {
    return (
        <div className="about-container">
            <div className="rowA ">
                <div className="col-top">
                    <h2>About</h2>
                </div>
                <br />

            </div>
            <div class="imageContainer">
                <div class="topleft">
                    Simon
                    <br />
                    <a href="https://www.instagram.com/ned_sim0n/">
                        <img src="../media\images/instagram.png" alt="insta" />
                    </a>
                    <a href="https://github.com/slaxeea">
                        <img src="../media\images/github.png" alt="github" />
                    </a>
                </div>
                <div class="midleft">
                    Florian
                    <br />
                    <a href="https://www.instagram.com/flo_mit_h_official/">
                        <img src="../media\images/instagram.png" alt="insta" />
                    </a>
                    
                    <a href="https://github.com/Flopi04LP">
                        <img src="../media\images/github.png" alt="github" />
                    </a>
                </div>
                <div class="midright">
                    Gergö
                    <br />
                <a href="https://www.instagram.com/d9geri/">
                        <img src="../media\images/instagram.png" alt="insta" />
                    </a>
                    
                    <a href="https://github.com/geri666">
                        <img src="../media\images/github.png" alt="github" />
                    </a>
                </div>
                <div class="topright">
                    Alessandro
                    <br />
                    <a href="https://www.instagram.com/FlyLikeAle/">
                        <img src="../media\images/instagram.png" alt="insta" />
                    </a>
                    <a href="https://github.com/FlyLikeAle">
                        <img src="../media\images/github.png" alt="github" />
                    </a>
                    
                </div>
            </div>
        </div>
    );
}
export default About;

