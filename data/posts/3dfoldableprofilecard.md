---
title: "3D-Foldable Profile Card Using Html5 & CSS3"
date: "27 Apr, 2022"
excerpt: "This is an 3D Profile Card which is Foldable on Hover"
cover_image: "/images/posts/profilecard.gif"
category: ["Html", "CSS"]
---

Today, I'm going to build the Profile Card With 3D Foldable Hover Effect.

![profile card](/images/posts/profiflecardwithfoldablehovereffect.gif)

1.  create project structure.

    ```
    profilecard
    |_index.html
    |_style.css
    |_profile.jpg
    |_profile1.jpg
    ```

    - Before running the code download and save the image inside folder with same name as profile.jpg and profile1.jpg.

2.  Copy and paste the below code to index.html file inside body section.

    ```html
    <div class="container flex">
      <!-- title section -->
      <div class="title">
        Profile Card <br />
        Foldable Hover Effect
      </div>
      <!-- profile card section -->
      <div class="profile">
        <div class="wrapper">
          <!-- profile image  -->
          <div class="image">
            <img src="./profile.jpg" alt="profile" />
            <img src="./profile1.jpg" alt="profile1" />
          </div>
          <!-- profile content -->
          <div class="content flex">
            <div class="details flex">
              <!-- profile details like name, job role, email, 
                description -->
              <h1 class="name">Shrestha Pradhuman</h1>
              <span class="role">Magento Web Developer</span>
              <span class="email">shresthapradhuman2018@gmail.com</span>
              <p class="desc">
                I am a self-taught programmer. I am an enthusiastic and
                passionate programmer who loves to challenge and solve problems
                and work on new ideas.
              </p>
              <!-- profile card button section -->
              <div class="buttons">
                <button class="contact">Contact Me</button>
                <button class="me">Know Me</button>
              </div>
              <!-- profile card social link section -->
              <div class="socials">
                <a href="#" aria-label="facebook">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="instagram">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#" aria-label="youtube">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="#" aria-label="github">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    ```

3.  Again we will copy and paste the below style code in style.css file.

    ```CSS
    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    height: 100vh;
    background-image: linear-gradient(
        90deg,
        #ff9a8b 0%,
        #ff6a8b 55%,
        #1f99ac 100%
    );
    }

    .flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .container {
    flex-direction: column;
    margin-top: 40px;
    }

    .title {
    font-size: 2rem;
    text-transform: uppercase;
    margin: 30px 0;
    font-weight: 600;
    color: #031926;
    text-align: center;
    }

    .profile .wrapper {
    position: relative;
    width: 350px;
    height: 450px;
    background-color: white;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.37);
    transition: 1s;
    }

    .profile .wrapper .image {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform-origin: left;
    transform-style: preserve-3d;
    background-color: black;
    transition: 1s;
    box-shadow: 18px 18px 20px rgba(0, 0, 0, 0.37);
    }

    .profile .wrapper .image img {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    }

    .profile .wrapper .image img:nth-child(2) {
    transform: rotateY(180deg);
    }

    .profile .wrapper .content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    }

    .profile .wrapper .content .details {
    flex-direction: column;
    padding: 10px;
    }

    .profile .wrapper .content .details .name {
    line-height: 1.5em;
    font-weight: 800;
    text-align: center;
    font-size: 2em;
    }

    .profile .wrapper .content .details .role,
    .profile .wrapper .content .details .email {
    font-size: 1em;
    }

    .profile .wrapper .content .details .email {
    margin: 5px;
    }

    .profile .wrapper .content .details .desc {
    text-align: center;
    font-size: 15px;
    padding: 10px 20px;
    }

    .profile .wrapper .content .details .buttons button {
    outline: none;
    border: 1px solid #031926;
    border-radius: 3px;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    padding: 10px 20px;
    font-size: 17px;
    cursor: pointer;
    background-color: #031926;
    color: white;
    margin: 5px;
    transition: 0.3s;
    }

    .profile .wrapper .content .details .buttons button:nth-child(2) {
    background-color: transparent;
    color: black;
    }

    .profile .wrapper .content .details .buttons button:nth-child(2):hover {
    background-color: #031926;
    color: white;
    }

    .profile .wrapper .content .details .socials {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 22px;
    }

    .profile .wrapper .content .details .socials a,
    .profile .wrapper .content .details .socials i {
    width: 35px;
    height: 35px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .profile .wrapper .content .details .socials a {
    border-radius: 50%;
    background-color: #000000;
    color: white;
    margin: 5px;
    text-decoration: none;
    }

    .profile .wrapper .content .details .socials a:hover {
    transform: translateY(-17%);
    transition: 0.3s;
    }

    .profile .wrapper:hover {
    transform: translateX(50%);
    }

    .profile .wrapper:hover .image {
    transform: rotateY(-180deg);
    }
    ```

4.  After copy and pasting, open the index file in the browser to check whether code is working or not.

I hope this code will help you to build you one for yourself. [Github code here.](https://github.com/shresthapradhuman/ProfileCardWithFoldableHoverEffect)
