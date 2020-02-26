// 'use strict';



let currentPage = 'startPage';
function startPage() {
  return `</section>
<div class="button-toggle">
   <nav role="navigation">
       <ul class="toggle-section">
           <li name="Profile"class="Profile" tabindex='1'>Profile</li>
           <li name="Projects"class="Projects"tabindex='2'>Projects</li>
           <li name="Contact"class="Contact"tabindex='3'>Contact Me</li>
       </ul>
   </nav>
   <div class="large-hero">
       <section name="Profile" class="profile-hero hero"id="active"tabindex='1' >
       <figure>
            <img src='./self-port.JPG'class='img' alt='Picture of JT and Christy Liner'/>
            <figcaption>
           <h2 class="Profile">Profile</h2>
           <p class="profile-text"></p>
           </figcation>
           </figure>
       </section>
       <section name="Projects"class="projects-hero hero "tabindex='2'>
       <figure>
       <img src='./work-station.jpg' class='img'alt='workstation with multiple computers' class="bible-app"/>
       <figcaption>
           <h2 >Projects</h2>
           <section class='projects'>
           <div class ='proj'>
           <p class="appTitle"></p>
           <div class='appPic pic'>
           </div>
           <p class="techUsed"></p>
           <p class='bible-repo repo'></p>
            
            </div>
            <div class = 'proj'>
            <p class="jagTitle"></p>
           <div class='jagPic pic'>
           </div>
           
           <p class="jagTech"></p>
           <p class='jag-repo repo'></p>
            
            </div>  
            </section>
            </figcaption>
            </figure> 

        </section>
       <section name="Contact"class="contact-hero hero"tabindex='6'>
       <figure>
       <img src='./phone.jpg' class='img'alt='retro telephone'/> 
       <figcaption>   
        <h2 class="contact">Contact Me</h2>
           <p class="contact-text"></p>
           <div class="contact-links"></div>
           </figcaption>
           </figure>
       </section>
   </div>
</div>
   `;
}
$(window).on("load", () => {
    const profileBio = `I live in the Austin area, but grew up in West Texas with dirt fields and mesquite trees. Now when I go outside I see rolling hills and streams nearby, it makes it easy to allow your mind to wander and be creative! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was time for a change. 
      I love thinking outside the box and working with a team to create content that is important to the client. This is a ton of fun, and it's why I got into being a developer.
      In my spare time ...well, I don’t have any! Instead, I am happily married with three kids! We drive a min-van, go hiking, and love Jesus!`;
  
    $(".profile-text").text(profileBio);
  });
function render() {
  const mainPortfolio = startPage();
  $('main').html(mainPortfolio);
}
function activeClass(name) {
  $('.hero').removeAttr('id');
  $(`section[name=${name}]`).attr('id', 'active');
}
function handleProfileClick() {
  $('.profile-hero, .Profile').on('click', function () {
    activeClass($(this).attr('name'));
    const profileBio = `<p>I live in the Austin area, but grew up in West Texas with dirt fields and mesquite trees. Now when I go outside I see rolling hills and streams nearby, it makes it easy to allow your mind to wander and be creative! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was time for a change. 
    I love thinking outside the box and working with a team to create content that is important to the client. This is a ton of fun, and it's why I got into being a developer.
    In my spare time ...well, I don’t have any! Instead, I am happily married with three kids! We drive a min-van, go hiking, and love Jesus!</p>`;

    $('.profile-text').html(profileBio);

    $('.contact-text').html('');
    $('.contact-links').html('');
    $('.appTitle').html('');
    $('.appPic').html('');
    $('.techUsed').html('');
    $('.jagTitle').html('');
    $('.jagPic').html('');
    $('.jagTech').html('');
    $('.jag-repo').html('');
    $('.bible-repo').html('');
  });
}
function handleContactClick() {
  $('.contact-hero, .Contact').on('click', function () {
    activeClass($(this).attr('name'));
    const contactInfo = `<p>To contact me follow one of the links below and let\'s get started!</p>`;
    const contactLinks = `<a href="https://www.linkedin.com/in/jt-liner-916a2a53/" aria-label="LinkedIn" class="fa fa-linkedin" target="_blank"></a>
        <a href="https://github.com/JTLiner925/" aria-label="GitHub"class="fa fa-github" target="_blank"></a>
       `;

    $('.contact-text').html(contactInfo);
    $('.contact-links').html(contactLinks);
    $('.profile-text').html('');
    $('.appTitle').html('');
    $('.appPic').html('');
    $('.techUsed').html('');
    $('.jagTitle').html('');
    $('.jagPic').html('');
    $('.jagTech').html('');
    $('.jag-repo').html('');
    $('.bible-repo').html('');
  });
}
function handleProjectClick() {
  $('.projects-hero, .Projects').on('click', function () {
    activeClass($(this).attr('name'));
    const tech = `<p class='bible-description'>Did Jesus really say that?<br>HTML/CSS<br>JavaScript/jQuery<br></p>`;
    const bibleRepo = `<a href="https://github.com/JTLiner925/quiz-app-jt" target="_blank"tabindex='4'>GitHub Repo</a>`;
    const jagThumb = `<a href="https://thinkful-ei-jaguar.github.io/quiz-app-project-BladeJT/"target="_blank"tabindex='5'><img src="./jaguar.jpg" alt=\'Mean Jaguar looking at you\'/></a><br>`;

    const appThumb = `<a href="https://jtliner925.github.io/quiz-app-jt/"target="_blank"tabindex='3'><img src="./bible-image.jpg" alt=\'bible open with glasses\'/></a><br>`;
    const jagTech = `<p class='bible-description'>How much do you know<br> about Jaguars?<br>HTML/CSS<br>JavaScript/jQuery<br></p>`;
    const jagRepo = `<a href="https://github.com/thinkful-ei-jaguar/quiz-app-project-BladeJT" target="_blank"tabindex='6'>GitHub Repo</a>`;
        
    $('.appTitle').html('Bible Quiz');
    $('.appPic').html(appThumb);
    $('.techUsed').html(tech);
    $('.bible-repo').html(bibleRepo);
    $('.jagTitle').html('Jaguar Quiz');
    $('.jagPic').html(jagThumb);
    $('.jagTech').html(jagTech);
    $('.jag-repo').html(jagRepo);
    $('.contact-text').html('');
    $('.contact-links').html('');
    $('.profile-text').html('');
  });

}
function handlePortfolio() {
  render();
  handleProfileClick();
  handleContactClick();
  handleProjectClick();
}

$(handlePortfolio);