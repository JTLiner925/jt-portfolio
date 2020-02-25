// 'use strict';
const STORE = {

}


let currentPage = 'startPage';
function startPage() {
  console.log('`startPage function` is working');
  return `<section class ="top-background">
   </section>
<div class="button-toggle">
   <nav role="navigation">
       <ul class="toggle-section">
           <li name="Profile"class="Profile">Profile</li>
           <li name="Projects"class="Projects">Projects</li>
           <li name="Contact"class="Contact">Contact Me</li>
       </ul>
   </nav>
   <div class="large-hero">
       <section name="Profile" class="profile-hero hero" >
       <figure>
            <img src='./self-port.JPG' alt='Picture of JT and Christy Liner'/>
            <figcaption>
           <h2 class="profile">Profile</h2>
           <p class="profile-text"></p>
           </figcation>
           </figure>
       </section>
       <section name="Projects"class="projects-hero hero ">
       <figure>
       <img src='./bible-image.jpg' alt='bible with glasses on top'/>
       <figcaption>
           <h2>Projects</h2>
            <p class="projects-text"></p>   
            </figcaption>
            </figure>    
        </section>
       <section name="Contact"class="contact-hero hero"id="active">
       <figure>
       <img src='./phone.jpg' alt='retro telephone'/> 
       <figcaption>   
        <h2 class="contact">Contact Me</h2>
           <p class="contact-text"></p>
           <div class="contact-links"></div>
           </figcaption>
           </figure>
       </section>
   </div>
</div>
<div class='expanded'>
   <section class="profile expand">this is the about me section</section>
   <section class="projects expand">a list of my projects will go here</section>
   <section class="contact expand">my contact info</section>
</div>
<section class = "bottom-background">
   
</section>
   `;
}
function render() {
  console.log('handleStart ran');
  const mainPortfolio = startPage();
  $('main').html(mainPortfolio);
}
function activeClass(name){
  $('.hero').removeAttr("id");
  $(`section[name=${name}]`).attr('id','active');
}
function handleProfileClick() {
  $('.profile-hero, .Profile').on('click', function () {
    console.log(this);
    activeClass($(this).attr('name'));
    const profileBio = `<p>I live in the Austin area but grew up in West Texas with dirt fields and mesquite trees. With all the rolling hills and streams nearby it makes it easy to allow your mind to wander! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was time for a change. 
      I love thinking outside the box and being creative. To be able to help others create content that is important to them is exciting for me and the reason why I got into being a developer.
      In my spare time ...well, I don’t have any! Instead, I am happily married with three kids! We drive a min-van, go hiking, and love Jesus. Below I have some examples of my art, stay tuned for more!
      </p>`;
    //   $('.profile-text').html(profileBio);
    $('.profile-text').fadeIn('slow');
    $('.profile-text').html(profileBio);
    
    $('.contact-text').html('');
    $('.contact-links').html('');
  });
}
function handleContactClick() {
  $('.contact-hero, .Contact').on('click', function () {
    activeClass($(this).attr('name'));
    const contactInfo = `<p>To contact me follow one of the links below and let's get started!</p>`;
    const contactLinks = `<a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
        <a href="#" class="fa fa-github"></a>
       `;

    $('.contact-text').html(contactInfo);
    $('.contact-links').html(contactLinks);
    $('.profile-text').html('');
  });
}
function handlePortfolio() {
  render();
  handleProfileClick();
  handleContactClick();
}

$(handlePortfolio);