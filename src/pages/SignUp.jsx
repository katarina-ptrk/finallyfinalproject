import React from 'react'

function SignUp() {
  return (
    <div className='signuppage'>
    <a href="/"><h1 className='eventlogo'>Events</h1></a>
    <div className='inputs2'>
      <h2 className='logintoevents bottomLess'>Sign up <p>to Events</p></h2>
      <form>
        {/*  ШО ТУТ РОБИТИ????? */}
        <input className='signInput email2' type="email" name="email" id="" placeholder='email' />
        <input className='signInput password2' type="password" name="password" id="" placeholder='create password' />
        <input className='signInput password3' type="password" name="password" id="" placeholder='repeat password' />
        <br />
        <button className='submit btn-hover color-2' type="submit">sign up</button>
      </form>
      <a className='sent' href="/login">You already have an account?</a>
    </div>
    
    <footer>
    <p>Copyright © 2023 - All right reserved
    <div className='right'>
    <a className='logoSocial' href="https://www.instagram.com/whoisrinochka/"><ion-icon name="logo-instagram"></ion-icon></a>
    <a className='logoSocial' href="https://www.facebook.com/campaign/landing.php?campaign_id=1655873755&extra_1=s%7Cc%7C354212833677%7Ce%7Cfacebook%20%27%7C&placement=&creative=354212833677&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D1655873755%26adgroupid%3D63461192557%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-360705453827%26loc_physical_ms%3D9042432%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwv8qkBhAnEiwAkY-ahnSQooYUDKwDioYQvB9P4Q4M7rs2JXQN9jSIyFYvB3BAD9w2XraRqhoCCp8QAvD_BwE"><ion-icon name="logo-facebook"></ion-icon></a>
    <a className='logoSocial' href="https://twitter.com/"><ion-icon name="logo-twitter"></ion-icon></a>
    </div></p>
    
</footer>
</div>
  )
}

export default SignUp