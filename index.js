const STORE = {

}


let currentPage = 'startPage';
function startPage(){
   console.log('`startPage function` is working');
   return `<section class ="top-background">
   </section>
<div class="button-toggle">
   <nav role="navigation">
       <ul class="toggle-section">
           <li class="profile">Profile</li>
           <li class="projects">Projects</li>
           <li class="contact">Contact Me</li>
       </ul>
   </nav>
   <div class="large-hero">
       <section class="profile-hero hero">
           <h2 class="profile">Profile</h2>
           <p class="profile-text"></p>
       </section>
       <section class="projects-hero hero">
           <h2>Projects</h2>
            <p class="projects-text"></p>       
        </section>
       <section class="contact-hero hero">
           <h2>Contact Me</h2>
           <p class="contact-text"></p>
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
function render(){
    console.log('handleStart ran');
    const mainPortfolio = startPage();
    $('main').html(mainPortfolio);
}
function profileSection(){

}
function handleProfileClick(){
  $('.profile').on('click', function(){
      const profileBio = `<p>I live in the Austin area but grew up in West Texas with dirt fields and mesquite trees. With all the rolling hills and streams nearby it makes it easy to allow your mind to wander! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was time for a change. 
      I love thinking outside the box and being creative. To be able to help others create content that is important to them is exciting for me and the reason why I got into being a developer.
      In my spare time ...well, I don’t have any! Instead, I am happily married with three kids! We drive a min-van, go hiking, and love Jesus. Below I have some examples of my art, stay tuned for more!
      </p>`;
      const bioGone = ' ';
      $('.profile-text').html(profileBio);
      
  } );
  $('.profile-hero').on('.click', function(){
    const profileBio = `<p>I live in the Austin area but grew up in West Texas with dirt fields and mesquite trees. With all the rolling hills and streams nearby it makes it easy to allow your mind to wander! Most recently, I was working as a Bakery Manager at a grocery store when I decided it was time for a change. 
    I love thinking outside the box and being creative. To be able to help others create content that is important to them is exciting for me and the reason why I got into being a developer.
    In my spare time ...well, I don’t have any! Instead, I am happily married with three kids! We drive a min-van, go hiking, and love Jesus. Below I have some examples of my art, stay tuned for more!
    </p>`;
      $('.profile-text').html(profileBio);
  });
}
function handlePortfolio(){
    render();
    handleProfileClick();
}

$(handlePortfolio);