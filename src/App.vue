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
  <div v-if="show" class="" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <!-- <span class="sr-only">Your Company</span> -->
          <!-- <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""> -->
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 " @click="show=false">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <div class="-mx-3">
              <button type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                Product
                <!--
                  Expand/collapse icon, toggle classes based on menu open state.

                  Open: "rotate-180", Closed: ""
                -->

              </button>
              <!-- 'Product' sub-menu, show/hide based on menu state. -->

            </div>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
          </div>
          <div class="py-6">
            <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
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
  <section id="price"> 
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
      What our studends say.
    </div>

    <div class="w-2/3 m-auto flex flex-wrap justify-between items-center">
      <div class="lg:w-2/5 md:w-full sm:w-ful px-3 pt-24 py-3 text-center border border-gray-900 relative my-5">
            <span class="absolute bg-black w-20 h-20 rounded-full top-1 left-0 right-0 m-auto  ">

            </span>
          <span>
            I really enjoy using "train a child" for my learnig
          </span>
      </div>

      <div class="lg:w-2/5 md:w-full sm:w-ful px-3 pt-24 py-3 text-center border border-gray-900 relative my-5">
            <span class="absolute bg-black w-20 h-20 rounded-full top-1 left-0 right-0 m-auto  ">

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
      <div class="lg:w-1/5 md:w-full sm:w-full text-rght">
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
    <div class="text-center flex justify-between px-10 py-3">
        <span>@copy right - train a child - 2023</span>
        <div>
          <span class="px-5">LinkedIn</span>
          <span class="px-5">LinkedIn</span>
          <span class="px-5">LinkedIn</span>
        </div>
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
