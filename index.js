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
           <p class='bible-repo repo'></p>
           <div class='appPic pic'>
           </div>
           <p class="techUsed"></p>
            
            </div>
            <div class ='proj'>
           <p class="prayerTitle"></p>
           <p class='prayer-repo repo'></p>

           <div class='prayerPic pic'>
           </div>
           <p class="prayerTech"></p>
            
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
  const profileBio = `I live in the Austin area, but grew up in West Texas with dirt fields and mesquite trees. 
  Now when I go outside I see rolling hills and streams nearby, it makes it easy to allow your mind to wander 
  and be creative! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was 
  time for a change. With coding, the answer is always yes, if you have the imagination and determination then you can do it!
  This really excites me, the possibilities are endless, and if you run into a hurdle you that just means you're about to learn something new. 
  Even from a young age I knew you could achieve more if you work together and that's why I'm excited to join a team and create some awesome code.
  In my spare time ...well, I don’t have any! Instead, I am happily married with three kids!
  We drive a mini-van, go hiking, and love Jesus!`;

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
  $('.profile-hero, .Profile').on('click focus', function () {
    activeClass($(this).attr('name'));
    const profileBio = `I live in the Austin area, but grew up in West Texas with dirt fields and mesquite trees. 
    Now when I go outside I see rolling hills and streams nearby, it makes it easy to allow your mind to wander 
    and be creative! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was 
    time for a change. With coding, the answer is always yes, if you have the imagination and determination then you can do it!
    This really excites me, the possibilities are endless, and if you run into a hurdle you that just means you're about to learn something new. 
    Even from a young age I knew you could achieve more if you work together and that's why I'm excited to join a team and create some awesome code.
    In my spare time ...well, I don’t have any! Instead, I am happily married with three kids!
    We drive a mini-van, go hiking, and love Jesus!`;

    $('.profile-text').html(profileBio);

    $('.contact-text').html('');
    $('.contact-links').html('');
    $('.appTitle').html('');
    $('.appPic').html('');
    $('.techUsed').html('');
    $('.prayerTitle').html('');
    $('.prayerPic').html('');
    $('.prayerTech').html('');
    $('.prayer-repo').html('');
    $('.bible-repo').html('');
  });
}
function handleContactClick() {
  $('.contact-hero, .Contact').on('click focus', function () {
    activeClass($(this).attr('name'));
    const contactInfo =
      "<p>To contact me follow one of the links below and let's get started!</p>";
    const contactLinks = `<a href="https://www.linkedin.com/in/jt-liner-916a2a53/" aria-label="LinkedIn" tabindex='7'class="fa fa-linkedin" target="_blank"></a>
        <a href="https://github.com/JTLiner925/" aria-label="GitHub"class="fa fa-github" target="_blank"tabindex='8'></a>
        <a
            href="mailto:jtliner925@gmail.com"
            aria-labelledby="email-link-label"
            target="_blank"
            class="fa fa-envelope"
          ></a
       `;

    $('.contact-text').html(contactInfo);
    $('.contact-links').html(contactLinks);
    $('.profile-text').html('');
    $('.appTitle').html('');
    $('.appPic').html('');
    $('.techUsed').html('');
    $('.prayerTitle').html('');
    $('.prayerPic').html('');
    $('.prayerTech').html('');
    $('.prayer-repo').html('');
    $('.bible-repo').html('');
  });
}
function handleProjectClick() {
  $('.projects-hero, .Projects').on('click focus', function () {
    activeClass($(this).attr('name'));
    const tech =
      "<p class='bible-description'>Create a church small group, add events, read the bible together, go over questions, and sign up to bring food items to group all in one location.<br><br>HTML/CSS<br>React.js/Node.js<br>PostgreSQL</p>";
    const bibleRepo =
      '<a href="https://github.com/JTLiner925/oneanother" target="_blank"tabindex=\'4\'>GitHub Repo</a>';
    const prayerThumb =
      '<a href="https://prayer-circles.vercel.app/"target="_blank"tabindex=\'5\'><img src="./icons8-church-100.png" alt=\'prayer circles\'/></a><br>';

    const appThumb =
      '<a href="https://oneanother.now.sh/"target="_blank"tabindex=\'3\'><img src="./icons8-holy-bible-100.ico" alt=\'one Another\'/></a><br>';
    const prayerTech =
      "<p class='bible-description'>Stay connected with your group even while you're away. Create groups, events, prayer requests, and even chat with each other!<br><br>HTML/CSS<br>React/Node<br>PostgreSQL<br></p>";
    const prayerRepo =
      '<a href="https://github.com/JTLiner925/prayer-circles" target="_blank"tabindex=\'6\'>GitHub Repo</a>';

    $('.appTitle').html('oneAnother');
    $('.appPic').html(appThumb);
    $('.techUsed').html(tech);
    $('.bible-repo').html(bibleRepo);
    $('.prayerTitle').html('Prayer Circles');
    $('.prayerPic').html(prayerThumb);
    $('.prayerTech').html(prayerTech);
    $('.prayer-repo').html(prayerRepo);
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
