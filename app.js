const app = {};

document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    app.softLanding();
    app.init();
  }
};

app.init = () => {
  app.menuReveal();
  app.formSubmission();
};

app.softLanding = () => {
  window.addEventListener("load", function () {
    //     the video floats in from z space
    const softLanding = document.getElementById("containerID");
    softLanding.classList.add("softLanding", "opacity");

    //     the paragraph and h1 slide in from left
    const textSlide = document.getElementById("titleContainer");
    textSlide.classList.add("textSlide");

    //     delay the h1
    const filmTitle = document.getElementById("filmTitle");
    filmTitle.classList.add("filmTitle");

    //     fade on the nav icon
    const iconLoad = document.getElementById('icon');
    iconLoad.style.opacity = '1';
  });
};

app.menuReveal = () => {
  const icon = document.querySelector('i');
  icon.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('navItemContainer').classList.toggle("menuReveal");
    document.getElementById('navItemContainer').classList.toggle("visible");
    icon.classList.toggle("rotate");
  })

}

// to make the font awesome icon accessible to keyboard enter
app.menuRevealAccessible = () => {
  const iconA11y = document.getElementById('iconLink');
  iconA11y.addEventListener('click', function(e) {
    e.preventDefault();
    app.menuReveal();
  })
}


// ******this is modified code supplied from https://formspree.io/forms/xyybawja/integration who supply free accounts, for free form submissions.************* 
app.formSubmission = () => {

  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    let form = document.getElementById("myForm");
    let status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.innerHTML = "we look forward to chatting with you :)";
      status.classList.add("success");
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
      status.classList.add("error");
    }

    // handle the form submission event

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
}
