// 'use strict';

let currentPage = 'startPage';
function startPage() {
  return `</section>
<div class="button-toggle">
   <nav role="navigation">
       <ul class="toggle-section">
           <li name="Profile" class="Profile" tabindex='1'>Profile</li>
           <li name="Projects" class="Projects"tabindex='2'>Projects</li>
           <li name="Contact" class="Contact"tabindex='3'>Contact Me</li>
       </ul>
   </nav>
   <div class="large-hero">
       <section name="Profile" class="profile-hero hero" id="active" tabindex='1' >
       <figure>
            <img src='./self-port.JPG' class='img' alt='Picture of JT and Christy Liner'/>
            <figcaption>
           <h2 class="Profile">Profile</h2>
           <p id="profile-text"></p>
           </figcaption>
           </figure>
       </section>
       <section name="Projects" class="projects-hero hero" tabindex='2'>
       <figure>
       <img src='./work-station.jpg' class='img' alt='workstation with multiple computers' id="bible-app"/>
       <figcaption class='project-div'>
           <h2 >Projects</h2>
           <section class='projects'>
           <div class ='proj'>

            <div class='left-section'>
              <h3 class="dbgTitle"></h3>
              <p class='dbg-repo repo'></p>          
              <div class='dbgPic pic'></div>
            </div>

            <div class='right-section'>
              <p class='dbgDesc'></p>
              <p class="dbgTech"></p>

            </div>

           </div>
           <div class ='proj'>

            <div class='left-section'>
              <h3 class="appTitle"></h3>
              <p class='bible-repo repo'></p>          
              <div class='appPic pic'></div>
            </div>

            <div class='right-section'>
              <p class='bibleDesc'></p>
              <p class="techUsed"></p>

            </div>

           </div>

            <div class ='proj'>

              <div class='left-section'>
                <h3 class="prayerTitle"></h3>
                <p class='prayer-repo repo'></p>
                <div class='prayerPic pic'></div>
              </div>
            
              <div class='right-section'>
                <p class='prayerDesc'></p>
                <p class="prayerTech"></p>
              </div>

            </div>
              
            </section>
            </figcaption>
            </figure> 

        </section>
       <section name="Contact" class="contact-hero hero" tabindex='6'>
       <figure>
       <img src='./phone.jpg' class='img' alt='retro telephone'/> 
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
  Now when I go outside I see rolling hills and streams nearby. It makes it easy to allow your mind to wander 
  and be creative! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was 
  time for a change. With coding, the answer is always yes, if you have the imagination and determination then you can do it!
  The endless possibilities are really exciting, and if you run into a hurdle that just means you're about to learn something new. 
  Even from a young age I knew you could achieve more if you work together and that's why I'm excited to join a team and create some awesome code.
  In my spare time ...well, I don’t have any! Instead, I am happily married with three kids!
  We drive a mini-van, go hiking, and love Jesus!`;

  $('#profile-text').text(profileBio);
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
    Now when I go outside I see rolling hills and streams nearby. It makes it easy to allow your mind to wander 
    and be creative! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was 
    time for a change. With coding, the answer is always yes, if you have the imagination and determination then you can do it!
    The endless possibilities are really exciting, and if you run into a hurdle that just means you're about to learn something new. 
    Even from a young age I knew you could achieve more if you work together and that's why I'm excited to join a team and create some awesome code.
    In my spare time ...well, I don’t have any! Instead, I am happily married with three kids!
    We drive a mini-van, go hiking, and love Jesus!`;

    $('#profile-text').html(profileBio);

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
      '<p>To contact me follow one of the links below and let\'s get started!</p>';
    const contactLinks = `<a href="https://www.linkedin.com/in/jtliner/" aria-label="LinkedIn" tabindex='7'class="fa fa-linkedin" target="_blank"></a>
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
    $('#profile-text').html('');
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
    const bibleDesc =
      '<p class=\'bible-description\'>Create a church small group, add events, read the bible together, go over questions, and sign up to bring food items to group all in one location.</p>';
    const dbgDesc =
      '<p class=\'bible-description\'>This is a pre-set bible study with a basic framework that anybody can lead other through.</p>';
    const tech =
      '<p class=\'bible-tech\'>HTML/CSS<br>React.js/Node.js<br>PostgreSQL</p>';
    const bibleRepo =
      '<a href="https://github.com/JTLiner925/oneanother" target="_blank"tabindex=\'4\'>GitHub Repo</a>';
    const dbgRepo =
      '<a href="https://github.com/JTLiner925/DiscoveryBibleGroup" target="_blank"tabindex=\'4\'>GitHub Repo</a>';
    const prayerThumb =
      '<a href="https://prayer-circles.vercel.app/"target="_blank"tabindex=\'5\'><img src="./prayer-circles-1.png" alt=\'prayer circles\'/></a>';
    const prayerDesc =
      '<p class=\'prayer-description\'>Stay connected with your group even while you\'re away. Create groups, events, prayer requests, and even chat with each other!</p>';
    const appThumb =
      '<a href="https://oneanother.now.sh/"target="_blank"tabindex=\'3\'><img src="./one-another-2.png" alt=\'one Another\'/></a>';
    const dbgThumb =
      '<a href="https://jtliner925.github.io/DiscoveryBibleGroup/"target="_blank"tabindex=\'3\'><img src="./dbg.png" alt=\'Discovery Bible Group\'/></a>';
    const prayerTech =
      '<p class=\'prayer-tech\'>HTML/CSS<br>React/Node<br>PostgreSQL<br></p>';
    const dbgTech = '<p class=\'prayer-tech\'>HTML/CSS<br>jQuery<br></p>';
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
    $('.bibleDesc').html(bibleDesc);
    $('.prayerDesc').html(prayerDesc);
    $('.contact-text').html('');
    $('.contact-links').html('');
    $('#profile-text').html('');
    $('.dbgTitle').html('Discovery Group');
    $('.dbg-repo').html(dbgRepo);
    $('.dbgPic').html(dbgThumb);
    $('.dbgTech').html(dbgTech);
    $('.dbgDesc').html(dbgDesc);
  });
}
function handlePortfolio() {
  render();
  handleProfileClick();
  handleContactClick();
  handleProjectClick();
}

$(handlePortfolio);
