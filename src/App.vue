<template>
    <div class="container">
      <header class="mb-40 mt-32">
        <div class="header-text-box">
          <h1 class="text-5xl font-bold tracking-tighter mb-10">
            We design and build better chairs, for a better life
          </h1>
          <p class="header-text text-lg">
            In a small shop in the heart of Lisbon, we spend our days
            relentlessly perfecting the chair. The result is a perfect blend of
            beauty and comfort, that will have a lasting impact on your health.
          </p>
          <a 
            class="btn btn--big bg-teal-800 text-gray-100 
            inline-block py-4 px-8 text-xl uppercase font-semibold
            hover:bg-teal-700 active:bg-teal-700 rounded-md" 
            href="#"
          >
            Shop chairs
          </a>
        </div>
        <img src="hero.jpg" alt="Photo" class="rounded" />
      </header>

      <section class="mb-40">
        <h2 class="text-4xl font-semibold tracking-tight mb-16">
          What makes our chairs special
        </h2>
        <div class="grid-3-cols">
          <div>
            <div class="bg-teal-800 p-2 inline-block rounded-md mb-8 mx-auto">
              <PhAtom size='36px' color="white" />
            </div>
            <p class="features-title text-xl"><strong>Science meets design</strong></p>
            <p class="features-text text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              similique adipisci praesentium.
            </p>
          </div>

          <div>
            <div class="bg-teal-800 p-2 inline-block rounded-md mb-8 mx-auto">
              <PhSmiley size='36px' color="white" />
            </div>
            <p class="features-title text-xl"> <strong>Maximal comfort</strong> </p>
            <p class="features-text text-lg">
              Reprehenderit optio placeat quasi excepturi architecto, explicabo
              facilis perspiciatis error maxime magnam.
            </p>
          </div>

          <div>
            <div class="bg-teal-800 p-2 inline-block rounded-md mb-8 mx-auto">
              <PhHeart size='36px' color="white" />
            </div>
            <p class="features-title text-xl"> <strong>Ethical and sustainable</strong> </p>
            <p class="features-text">
              Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat
              omnis est laudantium voluptatem voluptas!
            </p>
          </div>
        </div>
      </section>

      <section class="testimonial-section mb-40">
        <div class="grid grid-cols-[300px_1fr_1fr] gap-12 items-center bg-teal-800 p-6 rounded">
          <img src="customers.jpg" alt="People sitting on chairs" class="rounded" />
          <div class="testimonial-box text-teal-50 my-10">
            <h2 class="text-2xl font-semibold tracking-tight mb-6">
              "We couldn't live without these chairs anymore"
            </h2>
            <blockquote class="text-lg italic mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
              recusandae earum debitis doloribus in quasi voluptatibus!
            </blockquote>
            <p class="testimonial-author text-base text-teal-200">&mdash; Mary and Sarah Johnson</p>
          </div>
        </div>
      </section>

      <section class="mb-32">
        <h2 class="text-4xl font-semibold tracking-tight">Our bestselling chairs</h2>
        <div class="grid-3-cols">
          <figure class="chair shadow-xl rounded">
            <img src="chair-1.jpg" alt="Chair" class="rounded-tl rounded-tr mb-10" />
            <div class="chair-box">
              <h3 class="text-xl font-semibold">The Laid Back</h3>
              <ul class="chair-details text-base">
                <li>
                  <PhArmchair class="fill-teal-800" size="28px" />
                  <!-- Span is a generic INLINE text element, it doesn't have any meaning. It's like a div element, but inline -->
                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <PhTimer class="fill-teal-800" size="28px" />
                  <span>Comfortable for 4h</span>
                </li>
                <li>
                  <PhT-shirt class="fill-teal-800" size="28px" />
                  <span>Vegan leather</span>
                </li>
                <li>
                  <PhBarbell class="fill-teal-800" size="28px" />
                  <span>Weighs 16 kg</span>
                </li>
              </ul>
              <div class="chair-price items-center text-xl">
                <strong>250€</strong>
                <a 
                  href="#" 
                  class="btn btn--small bg-teal-800 text-gray-100 
                  inline-block py-2 px-5 text-sm uppercase font-semibold
                  hover:bg-teal-700 active:bg-teal-700 rounded-md"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </figure>

          <figure class="chair shadow-xl rounded">
            <img src="chair-2.jpg" alt="Chair" class="rounded-tl rounded-tr mb-10" />
            <div class="chair-box">
              <h3 class="text-xl font-semibold">The Worker Bee</h3>
              <ul class="chair-details text-base">
                <li>
                  <PhArmchair class="fill-teal-800" size="28px" />
                  <span>Work</span>
                </li>
                <li>
                  <PhTimer class="fill-teal-800" size="28px" />
                  <span>Comfortable for 8h</span>
                </li>
                <li>
                  <PhT-shirt class="fill-teal-800" size="28px" />
                  <span>Vegan leather</span>
                </li>
                <li>
                  <PhBarbell class="fill-teal-800" size="28px" />
                  <span>Weighs 22 kg</span>
                </li>
              </ul>
              <div class="chair-price items-center text-xl">
                <strong>525€</strong>
                <a href="#" class="btn btn--small bg-teal-800 text-gray-100 
          inline-block py-2 px-5 text-sm uppercase font-semibold
          hover:bg-teal-700 active:bg-teal-700 rounded-md">Add to cart</a>
              </div>
            </div>
          </figure>

          <figure class="chair shadow-xl rounded">
            <img src="chair-3.jpg" alt="Chair" class="rounded-tl rounded-tr mb-10" />
            <div class="chair-box">
              <h3 class="text-xl font-semibold">The Chair 4/2</h3>
              <ul class="chair-details text-base">
                <li>
                  <PhArmchair class="fill-teal-800" size="28px" />
                  <span>Leisure and relaxing</span>
                </li>
                <li>
                  <PhTimer class="fill-teal-800" size="28px" />
                  <span>Comfortable all day!</span>
                </li>
                <li>
                  <PhT-shirt class="fill-teal-800" size="28px" />
                  <span>Organic cotton</span>
                </li>
                <li>
                  <PhBarbell class="fill-teal-800" size="28px" />
                  <span>Weighs 80 kg</span>
                </li>
              </ul>
              <div class="chair-price items-center text-xl">
                <strong>1450€</strong>
                <a href="#" class="btn btn--small bg-teal-800 text-gray-100 
          inline-block py-2 px-5 text-sm uppercase font-semibold
          hover:bg-teal-700 active:bg-teal-700 rounded-md">Add to cart</a>
              </div>
            </div>
          </figure>
        </div>
      </section>

      <footer class="text-sm text-gray-700">
        Copyright &copy; 2027 by Jonas Schmedtmann. Part of "Build Responsive
        Real-World Websites with HTML and CSS" online course. Use for learning
        purposes only.
      </footer>
    </div>
</template>
