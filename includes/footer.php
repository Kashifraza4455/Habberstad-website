<section class="footer">
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div class="footer2">
          <div class="footerlogo">
            <a href="index.php">
              <img src="images/logo.png" class="img-fluid" alt="footerlogo">
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <ul class="footer1 mt-4 list-unstyled">
            <li><a href="locations.php">Locations</a></li>
            <li><a href="dash.php">Inventory</a></li>
            <li><a href="about.php">About</a></li>
            <li><a href="">Services</a></li>
            <li><a href="teams.php">Team</a></li>
          </ul>
          <hr class="hr1">
          <div class="footer3">
            <p>Copyright © 2024 - All Rights Reserved.</p>

            <div class="footer4">
              <!-- <p>Download The App</p> -->

            </div>
            <p>Privacy &amp; Policy</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<script src="js/jquery-3.6.0.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<!-- <script src="js/bootstrap.min.js.map"></script> -->
<script src="js/slick.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/owl-custom.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/jquery.inputmask.bundle.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
<script src="js/custom.js"></script>
<script>
  $('#carousel1').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    animateOut: 'fadeOut',
    // autoplay: true,
    // autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
</script>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-btn");
    const tabs = document.querySelectorAll(".tab");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const targetTab = button.getAttribute("data-tab");

        buttons.forEach(btn => {
          btn.classList.remove("active");
        });

        tabs.forEach(tab => {
          tab.classList.remove("active");
        });

        button.classList.add("active");
        document.getElementById(targetTab).classList.add("active");
      });
    });

    // Activate the first tab by default
    buttons[0].classList.add("active");
    tabs[0].classList.add("active");
  });
</script>

<script>
  document.getElementsByTagName("body")[0].style.overflowX = "hidden";
</script>

</body>

</html>