<template>
    <!-- Team Section -->
    <section class="team-section-two pt-0">
        <div class="icon-flowers-7 bounce-y"></div>
        <div class="auto-container">
            <div class="sec-title text-center style-two">
                <span class="sub-title">Oaspetii de onoare</span>
                <h2>Pe cine veti vedea</h2>
            </div>
            <div class="row">
                <swiper :slides-per-view="4" :space-between="40" :loop="true" :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true,
                }" :breakpoints="{
    320: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    575: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
    767: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    991: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1199: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    1350: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    }" :pagination="{
    el: '.swiper-pagination',
    clickable: true,
    }" :navigation="{
    nextEl: '.h1n',
    prevEl: '.h1p',
    }" :modules="modules" class="four-items-carousel">
                    <swiper-slide class="slide-item">
                        <!-- Team block -->
                        <div class="team-block-two">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="/images/resource/nasa.jpeg" alt=""></figure>
                                    <div class="icon-flower-10"></div>
                                    <div class="icon-flower-11"></div>
                                </div>
                                <div class="content-box">
                                    <h6 class="name">Cătălina Elena Ispas (Răpi)</h6>
                                    <span class="designation">Nașa</span>
                                    <ul class="social-icon-two">
                                        <li><NuxtLink to="https://www.facebook.com/catalina.rapiteanu"><i class="icon fab fa-facebook-f"></i></NuxtLink></li>
                                        <li><NuxtLink to="https://www.instagram.com/catalinarapi"><i class="icon fab fa-instagram"></i></NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="slide-item">
                        <!-- Team block -->
                        <div class="team-block-two">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="/images/resource/nasul.jpeg" alt=""></figure>
                                    <div class="icon-flower-10"></div>
                                    <div class="icon-flower-11"></div>
                                </div>
                                <div class="content-box">
                                    <h6 class="name">Ciprian Ispas</h6>
                                    <span class="designation">Nașul</span>
                                    <ul class="social-icon-two">
                                        <li><NuxtLink to="https://www.facebook.com/ispasflorinciprian"><i class="icon fab fa-facebook-f"></i></NuxtLink></li>
                                        <li><NuxtLink to="https://www.instagram.com/ciprian.isp"><i class="icon fab fa-instagram"></i></NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="slide-item">
                        <!-- Team block -->
                        <div class="team-block-two">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="/images/resource/socrii_mari.jpg" alt=""></figure>
                                    <div class="icon-flower-10"></div>
                                    <div class="icon-flower-11"></div>
                                </div>
                                <div class="content-box">
                                    <h6 class="name">Arina Rusu</h6>
                                    <span class="designation">Soacra mare</span>
                                    <ul class="social-icon-two">
                                        <li><NuxtLink to="https://www.facebook.com/profile.php?id=100004446046001"><i class="icon fab fa-facebook-f"></i></NuxtLink></li>
                                        <li><NuxtLink to="https://www.instagram.com/rusu4353"><i class="icon fab fa-instagram"></i></NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="slide-item">
                        <!-- Team block -->
                        <div class="team-block-two">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="/images/resource/socrii_mici.jpg" alt=""></figure>
                                    <!-- <div class="icon-flower-10"></div> -->
                                    <!-- <div class="icon-flower-11"></div> -->
                                </div>
                                <div class="content-box">
                                    <h6 class="name">Amalia si Marcel Stoean</h6>
                                    <span class="designation">Socrii mici</span>
                                    <ul class="social-icon-two">
                                        <li><NuxtLink to="https://www.facebook.com/marcel.stoean"><i class="icon fab fa-facebook-f"></i></NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="slide-item">
                        <!-- Team block -->
                        <div class="team-block-two">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><img src="/images/resource/olaf.jpg" alt=""></figure>
                                    <div class="icon-flower-10"></div>
                                    <div class="icon-flower-11"></div>
                                </div>
                                <div class="content-box">
                                    <h6 class="name">Olaf</h6>
                                    <span class="designation">Invitat surpriza</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide class="slide-item">
                        <!-- Team block -->
                        <div class="team-block-two">
                            <div class="inner-box">
                                <div class="image-box">
                                    <figure class="image"><NuxtLink to="https://www.sayalivemusic.ro"><img src="/images/resource/saya_logo.png" alt=""></NuxtLink></figure>
                                    <!-- <figure class="image"><i class="icon fab fa-instagram"></i><img src="/images/resource/saya_logo.png" alt=""></figure> -->
                                    <!-- <div class="icon-flower-10"></div> -->
                                    <!-- <div class="icon-flower-11"></div> -->
                                </div>
                                <div class="content-box">
                                    <h6 class="name">Saya Band</h6>
                                    <span class="designation">Trupa</span>
                                    <ul class="social-icon-two">
                                        <li><NuxtLink to="https://www.facebook.com/saya.livemusic"><i class="icon fab fa-facebook-f"></i></NuxtLink></li>
                                        <li><NuxtLink to="https://www.instagram.com/saya.livemusic"><i class="icon fab fa-instagram"></i></NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
    <!-- End Team Section -->
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    },
}
</script>