import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();

<section data-markdown>
  <textarea data-template>
    ## Slide 1 A paragraph with some text and a [link](http://hakim.se). --- ##
    Slide 2 --- ## Slide 3
  </textarea>
</section>;
