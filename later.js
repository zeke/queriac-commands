// Save for Later with Instapaper

/*
A fast, easy, free tool to save web pages for reading later.
*/

function iprl5() {
  var d = document,z = d.createElement('scr' + 'ipt'),b = d.body;
  try {if (!b) throw (0);
    d.title = '(Saving...) ' + d.title;
    z.setAttribute('src', 'https://www.instapaper.com/j/wvWqxRLQN0yY?u=' + encodeURIComponent(d.location.href) + '&t=' + (new Date().getTime()));
    b.appendChild(z);
  } catch(e) {
    alert('Please wait until the page has loaded.');
  }
}
iprl5();
void(0);