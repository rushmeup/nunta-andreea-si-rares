<template>
  <!-- <header  :class="{ 'sticky': scroll }">
    Header 1
  </header> -->
  <header class="main-header header-style-one" :class="{ 'moblie-search-active': isSearch }">
    
    <!-- <div class="auto-container">
      Meniu pentru chestii complexe
      Main box
      <div class="main-box">
        <div class="logo"><NuxtLink to="/"><img src="/images/logo.png" alt="" title="Wendola"></NuxtLink></div>
        //Nav Box
        <div class="nav-outer">
          <nav class="nav main-menu">
            <LayoutMenu/>
          </nav>
          //Main Menu End
          //Main Menu End
          <div class="outer-box">
            <ul class="social-icon-one">
              <li><NuxtLink to="https://www.instagram.com/dr.rusuandreea"><i class="icon fab fa-instagram"></i></NuxtLink></li>
              <li><NuxtLink to="https://www.facebook.com/rares.s.rusu"><i class="icon fab fa-facebook"></i></NuxtLink></li>
            </ul>     
            //Hidden Bar Opener
            //I will add this as a easter egg for something
            //maybe a mood board that served us as inspiration
            <button class="ui-btn ui-btn toggle-hidden-bar" @click="handleHidden">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </button>
            //Mobile Nav toggler
            <div class="mobile-nav-toggler" @click="handleToggled"><span class="icon lnr-icon-bars"></span></div>
          </div>
        </div>
      </div>
    </div> -->
    
    <!-- Mobile Menu  -->
    <!-- <div class="mobile-menu">
      <div class="menu-backdrop" @click="handleToggled"></div>
       -->
      <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
      <!-- <nav class="menu-box">
        <div class="upper-box">
          <div class="nav-logo">
            <NuxtLink to="/"><img src="/images/logo.png" alt="" title=""></NuxtLink>
          </div>
          <div class="close-btn" @click="handleToggled"><i class="icon fa fa-times"></i></div>
        </div>
        <LayoutMobileMenu />
        <ul class="contact-list-one">
          <li>
            //Contact Info Box
            <div class="contact-info-box">
              <i class="icon lnr-icon-phone-handset"></i>
              <span class="title">Call Now</span>
              <NuxtLink to="/tel:+92880098670">+92 (8800) - 98670</NuxtLink>
            </div>
          </li>
          <li>
            //Contact Info Box
            <div class="contact-info-box">
              <span class="icon lnr-icon-envelope1"></span>
              <span class="title">Send Email</span>
              <NuxtLink to="mailto:help@company.com">help@company.com</NuxtLink>
            </div>
          </li>
          <li>
            //Contact Info Box
            <div class="contact-info-box">
              <span class="icon lnr-icon-clock"></span>
              <span class="title">Send Email</span>
              Mon - Sat 8:00 - 6:30, Sunday - CLOSED
            </div>
          </li>
        </ul>
        <ul class="social-links">
          <li><NuxtLink to="#"><i class="fab fa-twitter"></i></NuxtLink></li>
          <li><NuxtLink to="#"><i class="fab fa-facebook-f"></i></NuxtLink></li>
          <li><NuxtLink to="#"><i class="fab fa-pinterest"></i></NuxtLink></li>
          <li><NuxtLink to="#"><i class="fab fa-instagram"></i></NuxtLink></li>
        </ul>
      </nav> -->
    
    <!-- </div> -->
    <!-- End Mobile Menu -->
    
    <!-- Header Search -->
    <!-- <div class="search-popup">
      <span class="search-back-drop" @click="handleSearch"></span>
      <button class="close-search" @click="handleSearch"><span class="fa fa-times"></span></button>
      
      <div class="search-inner">
        <form method="post" action="">
          <div class="form-group">
            <input type="search" name="search-field" value="" placeholder="Search..." required="">
            <button type="submit"><i class="fa fa-search"></i></button>
          </div>
        </form>
      </div>
    </div> -->
    <!-- End Header Search -->
    
    <!-- Sticky Header  -->
    <!-- <div class="sticky-header" :class="{ 'fixed-header animated slideInDown': scroll }">
      <div class="auto-container">
        <div class="inner-container">
          //Logo
          <div class="logo">
            <NuxtLink to="/" title=""><img src="/images/logo_lung_negru.png" alt="" title=""></NuxtLink>
          </div>
          
          Right Col
          <div class="nav-outer">
            //Main Menu
            <nav class="main-menu">
              <div class="navbar-collapse show collapse clearfix">
                <LayoutMenu />     
              </div>
            </nav>
            //Main Menu End 
            //Mobile N/avigation Toggler
            <div class="mobile-nav-toggler" @click="handleToggled"><span class="icon lnr-icon-bars"></span></div>
          </div>
        </div>
      </div>
    </div>
    //End Sticky Menu -->
  </header>
  <!-- Hidden Bar -->
  <!-- <section class="hidden-bar">
    <div class="inner-box">
      <div class="upper-box">
        <div class="nav-logo"><NuxtLink to="/index.html"><img src="/images/logo-4.png" alt="" title=""></NuxtLink></div>
        <div class="close-btn" @click="handleHidden"><i class="icon fa fa-times"></i></div>
      </div>
      
      <div class="text-box">
        <h4 class="title">Transforming your ideas into digital reality</h4>
        <div class="text">Sed ut perspiciatis unde omnis natus error voluptatem santium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab nllo inventore veritatis quasi architecto beatae vitae</div>
      </div>
      
      <ul class="contact-list-one">
        <li>
          <i class="icon lnr-icon-phone-handset"></i>
          <span class="title">Call Now</span>
          <div class="text"><NuxtLink to="/tel:+92880098670">+92 (8800) - 98670</NuxtLink></div>
        </li>
        <li>
          <i class="icon lnr-icon-envelope1"></i>
          <span class="title">Send Email</span>
          <div class="text"><NuxtLink to="/mailto:help@company.com">help@company.com</NuxtLink></div>
        </li>
        <li>
          <i class="icon lnr-icon-map-marker"></i>
          <span class="title">Address</span>
          <div class="text">66 Broklyant, New York India 3269</div>
        </li>
      </ul>
      
      <ul class="social-links">
        <li><NuxtLink to="/#"><i class="fab fa-twitter"></i></NuxtLink></li>
        <li><NuxtLink to="/#"><i class="fab fa-facebook-f"></i></NuxtLink></li>
        <li><NuxtLink to="/#"><i class="fab fa-pinterest"></i></NuxtLink></li>
        <li><NuxtLink to="/#"><i class="fab fa-instagram"></i></NuxtLink></li>
      </ul>
    </div>
  </section> -->
  <!--End Hidden Bar -->
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
const scroll = ref(false)
const handleScroll = () => {
  const scrollCheck = window.scrollY > 100
  if (scrollCheck !== scroll.value) {
    scroll.value = scrollCheck
  }
}

onMounted(() => {
  document.addEventListener("scroll", handleScroll)
})
onUnmounted(() => {
  document.removeEventListener("scroll", handleScroll)
})

const isToggled = ref(false)
const handleToggled = () => {
  isToggled.value = !isToggled.value
  document.body.classList.toggle("mobile-menu-visible", isToggled.value)
}
const isSearch = ref(false)
const handleSearch = () => {
  isSearch.value = !isSearch.value
}

const isHidden = ref(false)
const handleHidden = () => {
  isHidden.value = !isHidden.value
  document.body.classList.toggle("active-hidden-bar", isHidden.value)
}
</script>