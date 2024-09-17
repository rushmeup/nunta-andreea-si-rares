<template>
    <!-- Contact Section -->
    <section class="contact-section-two">
        <div class="icon-leaves-7 bounce-y"></div>
        <div class="auto-container">
            <div class="row">
                <!-- Form Column -->
                <div class="form-column col-xl-5 col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column">
                        <div class="icon-circle-star"></div>
                        <!-- Contact Form -->
                        <div class="contact-form-two wow fadeInLeft">
                            <div class="icon-flower-8"></div>
                            <div class="icon-flower-9"></div>
                            <figure class="image text-center"><img src="/images/icons/icon-circle-star.png" alt="Image"></figure>
                            <h3 class="title">Confirmati participarea?</h3>
                            <!--Contact Form-->
                            <form method="post" action="get" id="contact-form">
                                <div class="row">
                                    <div class="form-group col-lg-6 col-md-6 col-sm-6">
                                        <label class="custom-radio-box">Da, voi veni
                                            <input type="radio" name="party" :value="true" v-model="party">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>         
                                    <div class="form-group col-lg-6 col-md-6 col-sm-6">
                                        <label class="custom-radio-box">Nu pot participa
                                            <input type="radio" name="party" :value="false" v-model="party">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div v-show="party" class="form-group col-lg-6 col-md-6 col-sm-6">
                                        <label class="custom-radio-box">Meniu normal
                                            <input type="radio" name="menu">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div v-show="party" class="form-group col-lg-6 col-md-6 col-sm-6">
                                        <label class="custom-radio-box">Meniu vegetarian
                                            <input type="radio" name="menu">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <input type="text" name="name" placeholder="Numele complet" required>
                                        </div>
                                    </div>
                        
                                    <div class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <input type="email" name="email" placeholder="Adresa de email" required>
                                        </div>
                                    </div>
                        
                                    <div class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <input type="text" name="number" placeholder="Numarul de invitati" required>
                                        </div>
                                    </div>

                                    <div class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <textarea name="message" placeholder="Ai un mesaj?"></textarea>
                                        </div>
                                    </div>
                    
                                    <div class="form-group text-center col-lg-12">
                                        <button class="theme-btn btn-style-two yellow-bg" type="submit" name="submit-form"><span class="btn-title">Trimite</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!--End Contact Form -->
                    </div>
                </div>

                <!-- Image Column -->
                <div class="image-column col-xl-7 col-lg-6 col-md-12 wow fadeInRight" data-wow-delay="200ms">
                    <div class="inner-column">
                        <div class="image-box">
                            <figure class="image overlay-anim"><NuxtLink to="/images/resource/contact2-1.jpg" class="lightbox-image" data-fancybox=""><img src="/images/resource/IMG_2066.jpg" alt="Image"></NuxtLink></figure>
                        </div>
                        <div class="content-box">
                            <figure class="image"><img src="/images/icons/icon-cone.png" alt="Image"></figure>
                            <div class="title-box">
                                <h4 class="title">In curand casatoriti</h4>
                                <div class="text">Drumul către altar a fost lung, dar am ajuns!</div> <div>Pentru cei care nu stiu am facut deja cununia civila, nu va faceti griji nu am sarit peste nimic.</div>
                                <!-- <a class="theme-btn btn-style-two" href="page-about.html"><span class="btn-title">Discover Now</span></a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Contact Section -->
</template>

<script setup lang="ts">
    const party = defineModel(false)
</script>