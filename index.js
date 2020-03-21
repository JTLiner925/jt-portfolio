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
            <p class="dbgTitle"></p>
           <div class='dbgPic pic'>
           </div>
           
           <p class="dbgTech"></p>
           <p class='dbg-repo repo'></p>
            
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
$(window).on('load', () => {
  const profileBio = `I live in the Austin area, but grew up in West Texas with dirt fields and mesquite trees. Now when I go outside I see rolling hills and streams nearby, it makes it easy to allow your mind to wander and be creative! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was time for a change. 
      I love thinking outside the box and working with a team to create content that is important to the client. This is a ton of fun, and it's why I got into being a developer.
      In my spare time ...well, I don’t have any! Instead, I am happily married with three kids! We drive a mini-van, go hiking, and love Jesus!`;

  $('.profile-text').text(profileBio);
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
  $('.profile-hero, .Profile').on('click focus', function() {
    activeClass($(this).attr('name'));
    const profileBio = `<p>I live in the Austin area, but grew up in West Texas with dirt fields and mesquite trees. Now when I go outside I see rolling hills and streams nearby, it makes it easy to allow your mind to wander and be creative! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was time for a change. 
    I love thinking outside the box and working with a team to create content that is important to the client. This is a ton of fun, and it's why I got into being a developer.
    In my spare time ...well, I don’t have any! Instead, I am happily married with three kids! We drive a mini-van, go hiking, and love Jesus!</p>`;

    $('.profile-text').html(profileBio);

    $('.contact-text').html('');
    $('.contact-links').html('');
    $('.appTitle').html('');
    $('.appPic').html('');
    $('.techUsed').html('');
    $('.dbgTitle').html('');
    $('.dbgPic').html('');
    $('.dbgTech').html('');
    $('.dbg-repo').html('');
    $('.bible-repo').html('');
  });
}
function handleContactClick() {
  $('.contact-hero, .Contact').on('click focus', function() {
    activeClass($(this).attr('name'));
    const contactInfo = '<p>To contact me follow one of the links below and let\'s get started!</p>';
    const contactLinks = `<a href="https://www.linkedin.com/in/jt-liner-916a2a53/" aria-label="LinkedIn" tabindex='7'class="fa fa-linkedin" target="_blank"></a>
        <a href="https://github.com/JTLiner925/" aria-label="GitHub"class="fa fa-github" target="_blank"tabindex='8'></a>
       `;

    $('.contact-text').html(contactInfo);
    $('.contact-links').html(contactLinks);
    $('.profile-text').html('');
    $('.appTitle').html('');
    $('.appPic').html('');
    $('.techUsed').html('');
    $('.dbgTitle').html('');
    $('.dbgPic').html('');
    $('.dbgTech').html('');
    $('.dbg-repo').html('');
    $('.bible-repo').html('');
  });
}
function handleProjectClick() {
  $('.projects-hero, .Projects').on('click focus', function() {
    activeClass($(this).attr('name'));
    const tech = '<p class=\'bible-description\'>Did Jesus really say that?<br>HTML/CSS<br>JS/jQuery<br></p>';
    const bibleRepo = '<a href="https://github.com/JTLiner925/quiz-app-jt" target="_blank"tabindex=\'4\'>GitHub Repo</a>';
    const dbgThumb = '<a href="https://jtliner925.github.io/DiscoveryBibleGroup/"target="_blank"tabindex=\'5\'><img src="./dbg.png" alt=\'Discovery Bible Group\'/></a><br>';

    const appThumb = '<a href="https://jtliner925.github.io/quiz-app-jt/"target="_blank"tabindex=\'3\'><img src="./bible-image.jpg" alt=\'bible open with glasses\'/></a><br>';
    const dbgTech = '<p class=\'bible-description\'>Discover the bible<br>with others!<br>HTML/CSS<br>JS/jQuery<br></p>';
    const dbgRepo = '<a href="https://github.com/JTLiner925/DiscoveryBibleGroup" target="_blank"tabindex=\'6\'>GitHub Repo</a>';

    $('.appTitle').html('Bible Quiz');
    $('.appPic').html(appThumb);
    $('.techUsed').html(tech);
    $('.bible-repo').html(bibleRepo);
    $('.dbgTitle').html('Discovery Bible Group');
    $('.dbgPic').html(dbgThumb);
    $('.dbgTech').html(dbgTech);
    $('.dbg-repo').html(dbgRepo);
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
