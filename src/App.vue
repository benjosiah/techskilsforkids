<template>
<div>
  <header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="text-2xl font-bold text-yellow-600">Train a Child</span>
    
      </a>
    </div>
    <div class="flex lg:hidden" @click="show=true">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12 text-lg">
      <div class="relative">
        <a href="#about">
        <button type="button" class="flex hover:text-yellow-600 items-center gap-x-1  font-semibold leading-6 text-gray-900" aria-expanded="false">
          Our System
        </button>
      </a>
      </div>

      <a href="#courses" class="hover:text-yellow-600 font-semibold leading-6 text-gray-900">Courses</a>
      <a href="#price" class="hover:text-yellow-600 font-semibold leading-6 text-gray-900">pricing</a>
      <a href="#testimonial" class="hover:text-yellow-600 font-semibold leading-6 text-gray-900">Testimonial</a>
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" class="text-lg hover:text-yellow-600 font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div v-if="show" class="w-full" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="#" class=" p-1.5">
          <!-- <span class="sr-only">Your Company</span> -->
          <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""> -->
        </a>
        <button type="button" class=" rounded-md p-2.5 text-gray-700 " @click="show=false">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <div class="">
              <a href="#about">
              <button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                Our System
                <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                -->

              </button>
              </a>
              <!-- 'Product' sub-menu, show/hide based on menu state. -->

            </div>
            <a href="#courses" class="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Courses</a>
            <a href="#price" class=" block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Pricing</a>
            <a href="#testimonial" class=" block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Testimonial</a>
          </div>
          <div class="py-6">
            <a href="#" class=" block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  <section class="bg h-screen w-full text-center text-white justify-center relative">
    <div class="h-screen w-full text-center sm:px-1 absolute bg-over top-0 flex text-white justify-center items-center" >
      <div class="w-full lg:px-32 md:px-3 sm:px-3 px-2">
        <span class="lg:text-5xl md:text-5xl text-5xl py-10 mb-5" >
          Train a Child for kids 6-16
        </span>

        <p class="pt-5 lg:px-56 md:px-2 sm:px-1  text-xl ">
          "Train A Child" is a website that addresses the limited opportunities for kids to build ICT skills in Nigeria by focusing on Nigeria kids who are passionate about ICT skills.
        </p>


        <div class="mt-4 flex flex-wrap py-10 justify-evenly">
          <button class=" my-2 px-10 lg:py-5 py-3 border-2 rounded-full border-yellow-600 text-yellow-600">
              Quick start
          </button>

          <button class=" my-2 px-10 lg:py-5 py-3 border-2 rounded-full border-white bg-yellow-600">
            Learn more
          </button>
        </div>
    </div>
    </div>
  </section>

  <section id="about" class="w-full bg-gray-50 py-10 justify-around px-10">
    <div class="m-auto text-center py-5 lg:px-64">
      <h3  class="text-3xl font-semibold text--600"> Our Learning Styles </h3>

      <p class="my-2 font-sans text-lg font- px-2">
            At Train a child, we believe that the future belongs to the young innovators and problem solvers of today. Our mission is to empower children with the knowledge and skills to thrive in a technology-driven world. We offer engaging and interactive courses designed to introduce kids to the exciting world of technology, coding, and problem-solving.
      </p>
    </div>



    <div class="w-full flex flex-wrap items-center justify-evenly">
      <div class=" lg:w-2/5 md:w-full sm:w-full my-2 text-right">
        <img class="w-full h-full" src="./assets/portrait-black.jpg" alt="">
      </div>
      <div class="lg:w-2/5 md:w-full sm:w-full text-gray-700 text-lg my-2 px-3">

        <div class="w-full my-3">

          <span class="text-2xl my-4 font-semibold text-yellow-600 ">Our Approach:</span>
          <p class="my-2">
            <span class="font-bold text-yellow-500">Inspire Creativity:</span> We foster creativity by encouraging children to think outside the box, explore their imaginations, and come up with innovative solutions.
          </p>
          <p class="my-2">
            <span class="font-bold text-yellow-500">Collaborative Environment:</span> We believe in the power of collaboration. Children work in teams, exchanging ideas, and learning from each other.
          </p>
          <p>
            <span class="font-bold text-yellow-500">Age-Appropriate Curriculum: </span>We offer carefully curated courses tailored to different age groups, ensuring that the content is age-appropriate, engaging, and aligned with the children's cognitive abilities.
          </p>
          <p class="my-2">
            <span class="font-bold text-yellow-500">Experienced Instructors:</span> Our instructors are passionate about technology and have experience working with children. 
            </p>
        </div>

      </div>
    </div>
  </section>

  <section id="courses" class="w-full bg-white py-10 px-10 h-auto">
    <div class="m-auto text-center text-3xl font-semibold py-5 ">
      Courses We offer 
    </div>
    <div class="w-full flex flex-wrap justify-center items-center">
      <div class="lg:w-2/5 md:w-full w-full px-5 text-gray-700 text-2xl my-10 ">
        <h3 class="text-2xl my-4 font-semibold text-yellow-600" >
          Courses
        </h3>
        <div class="w-full my-3 ">
          <span>
            <font-awesome-icon icon="fa-solid fa-bolt"  class="text-yellow-500"/>
          </span> 
            Web Development (Frontend And Backend)
        </div>

        <div class="w-full my-3">
          <span>
            <font-awesome-icon icon="fa-solid fa-bolt" class="text-yellow-500" />
          </span> 
            Graphics abd Brand Design
        </div>

        <div class="w-full my-3">
          <span>
            <font-awesome-icon icon="fa-solid fa-bolt" class="text-yellow-500" />
          </span> 
          Degital Marketing and Analysis 
        </div>

        <div class="w-full my-3">
          <span>
            <font-awesome-icon icon="fa-solid fa-bolt" class="text-yellow-500" />
          </span> 
            User Interface and Experience Design (UI/UX)
        </div>

      </div>
      <div class=" lg:w-2/5 md:w-full w-full text-center">
        <img class="w-full" src="./assets/b12d2c8d-0970-4c20-afe8-e8260edd6d95.jpeg" alt="">
      </div>
    </div>
  </section>

  <section class="border-y border-1 border-gray-300 w-full py-5 px-5 my-2">
    <div class="m-auto text-center text-2xl font-semibold py-10">
      Benefits of learning with "Train a child"
    </div>
    <div class="flex flex-wrap justify-evenly items-center text-xl">

      <div class="text-center lg:w-40 md:w-40 w-full my-3"> 
        <div class="h-24 w-24  m-auto rounded mb-2">
          <img class="h-24 w-24 " src="./assets/5188769_51965.jpg" alt="">
        </div>
        <div>
          Learning buddy
        </div>
      </div>
      
      <div class="text-center lg:w-40 md:w-40 w-full my-3">
        <div class="h-24 w-24 m-auto rounded mb-2">
          <img class="h-24 w-24 " src="./assets/5188774_51970.jpeg" alt="">
        </div>
        <div>
          Online real-time learning
        </div>
      </div>

      <div class="text-center lg:w-40 md:w-40 w-full my-3">
        <div class="h-24 w-24 m-auto rounded mb-2">
          <img class="h-24 w-24" src="./assets/6600427_3372062.jpeg" alt="">
        </div>
        <div>
          Hand on learning environment
        </div>
      </div>

      <div class="text-center lg:w-40 md:w-40 w-full my-3">
        <div class="h-24 w-24 m-auto rounded mb-2">
          <img class="h-24 w-24"  src="./assets/8555885.jpg" alt="">
        </div>
        <div>
          Online mentors
        </div>
      </div>

    </div>
  </section>
  <section id="price" class="px-3"> 
    <div class="w-full text-center ">
      <div class="m-auto text-center text-3xl font-semibold py-2 text-green-600 underline ">
          Our Price.
      </div>
      <div class="lg:w-1/2 w-full rounded-xl py-10 border-4 text-white  bg-green-600 border-green-700 m-auto ">
        <div class="text-3xl">
          Pricing Starts at N7,000 (Naira)/ Month 
        </div>
        <div class="text-gray-100 text-lg">
            N67,200/Year @ <span> 20% Discount</span>
        </div>
      </div>
      
    </div>
  </section>
  <section id="testimonial"  class="w-full my-10"> 
    <div class="m-auto text-center text-3xl font-semibold py-2 ">
      What our students are saying.
    </div>

    <div class="w-2/3 m-auto flex flex-wrap justify-between items-center">
      <div class="lg:w-2/5 md:w-full sm:w-ful px-3 pt-24 py-3 text-center border border-gray-900 relative my-5">
            <span class="absolute bg-black w-20 h-20 rounded-full top-1 left-0 right-0 m-auto  ">
                <img class="w-20 h-20 rounded-full" src="./assets/student.jpeg" alt="">
            </span>
          <span>
            I really enjoy using "train a child" for my learnig
          </span>
      </div>

      <div class="lg:w-2/5 md:w-full sm:w-ful px-3 pt-24 py-3 text-center border border-gray-900 relative my-5">
            <span class="absolute bg-black w-20 h-20 rounded-full top-1 left-0 right-0 m-auto  ">
              <img class="w-20 h-20 rounded-full" src="./assets/student2.jpeg" alt="">
            </span>
          <span>
            It's been 4months since I started using train a child and it has really helped me alot
          </span>
      </div>

    </div>
  </section>

  <section class="bg-orange-800 text-white pt-10 px-5 ">
    <div class="flex flex-wrap justify-between items-start">
      <div class="lg:w-2/5 md:w-full sm:w-full">
        <span class="lg:text-5xl md:text-5xl text-5xl py-10 mb-5" >
          Train a Child 
        </span>

          <p>
            "Train A Child" is a website that addresses the limited opportunities for kids to build ICT skills in Nigeria by focusing on Nigeria kids who are passionate about ICT skills.
          </p>


      </div>
      <div class="lg:w-1/5 md:w-full sm:w-full text-rght py-7">
          <ul>
            <li>
              Our learning style.
            </li>
            <li>
              Our courses.
            </li>
            <li>
              Prices.
            </li>
            <li>
              Testimonials.
            </li>
          </ul>
      </div>

    </div>
    <div class="text-center flex flex-wrap justify-center py-3">

      <span class="px-2"><svg class="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></span>
      <span class="px-2"><svg class="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></span>
      <span class="px-2"><svg class="w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></span>
      <span class="px-2">info@trainachild.org.ng</span>
          
        
    </div>
  </section>

  
  
</div>
</template>

<script>
// import { config, dom } from '@fortawesome/fontawesome-svg-core'
// import { faCoffee, faStroopwafel, faDragon } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default{
  name: 'App',
  components: [ ],
  data(){
    return{
      show:false
    }
  
  }
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.bg{
  background-image: url("./assets/childhood-modern.jpeg");
  background-size: cover;
  background-position: center;
}
.bg-over{
  background: #000000b3;
}
</style>
