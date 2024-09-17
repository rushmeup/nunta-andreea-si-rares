<template>
  <ul class="navigation">
    <li class="current">
      <NuxtLink to="/index">Acasa</NuxtLink>
      <!-- <ul> -->
        <!-- <li><NuxtLink to="/">Home page 01</NuxtLink></li> -->
        <!-- <li><NuxtLink to="/index-2">Home page 02</NuxtLink></li> -->
        <!-- <li><NuxtLink to="/index-3">Home page 03</NuxtLink></li> -->
        <!-- <li><NuxtLink to="/index-4">Home page 04</NuxtLink></li> -->
        <!-- <li><NuxtLink to="/index-5">Home page 05</NuxtLink></li> -->
      <!-- </ul> -->
    </li>
    <li class="dropdown">
      <NuxtLink to="#">Despre</NuxtLink>
      <ul>
        <li><NuxtLink to="/page-about">About</NuxtLink></li>
        <li><NuxtLink to="/page-rsvp">RSVP</NuxtLink></li>
        <!-- <li><NuxtLink to="/page-gift">Gift</NuxtLink></li> -->
        <li><NuxtLink to="/page-gallery">Gallery</NuxtLink></li>
        <li><NuxtLink to="/page-bride-groom">Bride & Grooms</NuxtLink></li>
        <li><NuxtLink to="/page-story">Our Story</NuxtLink></li>
        <li><NuxtLink to="/page-timeline">Timeline</NuxtLink></li>
      </ul>
    </li>
    <li class="dropdown">
      <NuxtLink to="#">Pages</NuxtLink>
      <ul>
        <li class="dropdown">
          <NuxtLink to="/">Events</NuxtLink>
          <ul>
            <li><NuxtLink to="/page-events">Event grid</NuxtLink></li>
            <li><NuxtLink to="/page-event-details">Event Details</NuxtLink></li>
          </ul>
        </li>
        <li class="dropdown">
          <NuxtLink to="/">Team</NuxtLink>
          <ul>
            <li><NuxtLink to="/page-team">Team grid</NuxtLink></li>
            <li><NuxtLink to="/page-team-details">Team Details</NuxtLink></li>
          </ul>
        </li>
        <li><NuxtLink to="/page-pricing">Pricing</NuxtLink></li>
        <li><NuxtLink to="/page-testimonial">Testimonials</NuxtLink></li>
        <li><NuxtLink to="/page-faq">Faq</NuxtLink></li>
        <li><NuxtLink to="/page-error">404</NuxtLink></li>
      </ul>
    </li>
    <li>
      <NuxtLink to="/page-contact">Contact</NuxtLink>
    </li>
  </ul>
</template>