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
                        <div class="contact-form-two wow fadeInLeft animated">
                            <div class="icon-flower-8"></div>
                            <div class="icon-flower-9"></div>
                            <figure class="image text-center"><img src="/images/icons/icon-circle-star.png" alt="Image"></figure>
                            <h3 class="title">Confirmati participarea?</h3>
                            <!--Contact Form-->
                            <form ref="form" @submit.prevent="sendEmail" method="post" id="contact-form">
                                <div class="row">
                                    <div class="form-group col-lg-6 col-md-6 col-sm-6">
                                        <label class="custom-radio-box">Da! Voi participa
                                            <input type="radio" name="party" :value="true" v-model="party">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>         
                                    <div class="form-group col-lg-6 col-md-6 col-sm-6">
                                        <label class="custom-radio-box">Nu pot veni
                                            <input type="radio" name="party" :value="false" v-model="party">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div v-show="party" class="form-group col-lg-6 col-md-6 col-sm-6">
                                        <label class="custom-radio-box">Meniu normal
                                            <input type="radio" name="vegetarian" :value="false" v-model="vegetarian">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div v-show="party" class="form-group col-lg-6 col-md-6 col-sm-6">
                                        <label class="custom-radio-box">Meniu vegetarian
                                            <input type="radio" name="vegetarian" :value="true" v-model="vegetarian">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                                                    
                                    <div v-show="party" class="form-group col-lg-8 col-md-8 col-sm-8">
                                        <label class="custom-radio-box">Am restrictii dietetice
                                            <input type="checkbox" name="restrictions" :value="true" v-model="restrictions">
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>                            
                                   
                                    <div class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <input type="text" name="name" placeholder="Numele complet" v-model="name" required>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <input type="email" name="email" placeholder="Adresa de email" v-model="email" required>
                                        </div>
                                    </div>
                                    
                                    <div v-show="party" class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <input type="number" min="0" name="number" placeholder="Numarul de invitati" v-model="guestNumber">
                                        </div>
                                    </div> 
                                    
                                    <div v-show="vegetarian" class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <input type="number" min="0" name="number" placeholder="Numarul de meniuri vegetariane" v-model="vegetarianNumber">
                                        </div>
                                    </div>
                                    <div class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <textarea name="message" v-model="message" placeholder="Ai un mesaj pentru noi?"></textarea>
                                        </div>
                                    </div>      
                                    <div v-show="restrictions" class="form-group col-lg-12">
                                        <div class="input-outer">
                                            <textarea name="diet_restrictions" v-model="diet_restrictions" placeholder="Restrictii alimentare etice, religioase sau alergice?"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group text-center col-lg-12">
                                        <button class="theme-btn btn-style-two yellow-bg" type="submit" name="submit-form" ><span class="btn-title">Trimite</span></button>
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
                            <figure class="image overlay-anim"><img src="/images/resource/IMG_2066.jpg" alt="Image"></figure>
                        </div>
                        <div class="content-box">
                            <figure class="image"><img src="/images/icons/icon-cone.png" alt="Image"></figure>
                            <div class="title-box">
                                <h4 class="title">In curand casatoriti</h4>
                                <div class="text">Drumul către altar a fost lung, dar am ajuns!</div> 
                                <!-- <div class="text">Pentru cei care nu stiu am facut deja cununia civila, nu va faceti griji nu am sarit peste nimic.</div> -->
                                <div class="text">Fii pe faza! Aici, pe site, vor ajunge si pozele de la eveniment!</div>
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
import emailjs from '@emailjs/browser'

const party = defineModel('party', {type: Boolean, default: false})
const vegetarian = defineModel('vegetarian', {type: Boolean, default: false})
const restrictions = defineModel('restrictions', {type: Boolean, default: false})
const name = defineModel<string>('name')
const email = defineModel<string>('email')
const guestNumber = defineModel('guestNumber', { type: Number })
const vegetarianNumber = defineModel('vegetarianNumber', { type: Number })
const message = defineModel<string>('message')
const diet_restrictions = defineModel<string>('diet_restrictions')

const sendEmail = () => {
    const answer = party.value === true ? "participate" : "not participate"
    const preference = restrictions.value === true ? "restrictions to: " + diet_restrictions.value : "not special dietary requirements"
    const veg_count = vegetarianNumber.value >= 0 ? vegetarianNumber.value : 0
    const menu_count = guestNumber.value >= 0 ? (guestNumber.value - veg_count) : 1
    const templateParams = {
        guest_name: name.value, 
        guest_email: email.value, 
        guest_answer: answer, 
        guest_count: guestNumber.value, 
        guest_menu_count: menu_count, 
        guest_veg_count: veg_count, 
        guest_dietary_preference: preference, 
        guest_message: message.value,
    }    
    emailjs.send('service_rnafhnr', 'template_v2a3qv9', templateParams, {
        publicKey: 'wKNbU_8OFzvrr9Ekc',
    }).then(
    (response) => {
        console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
        console.log('FAILED...', error);
    },
    )

}

</script>