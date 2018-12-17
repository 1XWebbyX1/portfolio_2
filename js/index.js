var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //DATA USED __________________________________________________________________
var graphs = [
[{ color: '#CD7635', name: 'React', width: '350px' },
{ color: '#CD7635', name: 'jQuery', width: '150px' },
{ color: '#CD7635', name: 'Sass', width: '150px' }],

[{ color: '#CD7635', name: 'React', width: '250px' },
{ color: '#CD7635', name: 'jQuery', width: '30px' },
{ color: '#CD7635', name: 'Sass', width: '380px' },
{ color: '#CD7635', name: 'Redux', width: '50px' }],

[{ color: '#e68a00', name: 'React', width: '150px' },
{ color: 'white', name: 'jQuery', width: '50px' },
{ color: '#330066', name: 'Sass', width: '150px' }],

[{ color: 'white', name: 'jQuery', width: '80px' },
{ color: '#330066', name: 'Sass', width: '200px' }],

[{ color: '#e68a00', name: 'React', width: '60px' },
{ color: 'white', name: 'jQuery', width: '100px' },
{ color: '#330066', name: 'Sass', width: '150px' },
{ color: '#608000', name: 'AJAX', width: '50px' }],

[{ color: '#e68a00', name: 'React', width: '200px' },
{ color: 'white', name: 'jQuery', width: '30px' },
{ color: '#330066', name: 'Sass', width: '350px' }],

[{ color: '#e68a00', name: 'React', width: '120px' },
{ color: 'white', name: 'jQuery', width: '100px' },
{ color: '#330066', name: 'Sass', width: '400px' }],

[{ color: '#e68a00', name: 'React', width: '280px' },
{ color: 'white', name: 'jQuery', width: '100px' },
{ color: '#330066', name: 'Sass', width: '200px' },
{ color: '#608000', name: 'Redux', width: '100px' }],

[{ color: '#e68a00', name: 'React', width: '300px' },
{ color: 'white', name: 'jQuery', width: '50px' },
{ color: '#330066', name: 'Sass', width: '140px' },
{ color: '#608000', name: 'Redux', width: '80px' }]];




//icons --------
var icons = [
"fab fa-html5 fa-4x icon i-1 anim alt",
"fab fa-css3-alt fa-4x icon i-2 anim ",
"fab fa-js-square fa-4x icon i-3 anim rev",
"fab fa-react fa-4x icon i-4 anim rev",
"fab fa-sass fa-4x icon i-5 anim rev",
"fab fa-github-square fa-4x icon i-6 anim rev",
"fab fa-git-square fa-4x icon i-7 anim ",
'icon devicons devicons-java size i-8 anim alt',
'icon devicons devicons-bootstrap size i-9 anim alt',
'icon devicons devicons-jquery size i-10 anim alt',
'icon devicons devicons-illustrator size i-11 anim '];


//array of objects to hold projects and their description_______


var projects = [
{ project: 'Markdown Previewer', description: 'JavaScript, jQuery, Sass, Redux and React', graph: graphs[1], codepen: 'https://codepen.io/1xwebbyx1/full/KrqyBM', github: 'https://github.com/1XWebbyX1/markdown-previewer' },
{ project: 'Documentation Page', description: 'JavaScript, Sass, jQuery and React', graph: graphs[0], codepen: 'https://codepen.io/1xwebbyx1/full/LXVQzW', github: 'https://github.com/1XWebbyX1/documentation-page' },
{ project: 'Pomodoro Clock', description: 'JavaScript, jQuery, Redux, Sass and React', graph: graphs[7], codepen: 'https://codepen.io/1xwebbyx1/full/ReXgaR', github: 'https://github.com/1XWebbyX1/pomodoro-clock' },
{ project: 'Quote Machine', description: 'JavaScript, jQuery, jQuery-AJAX, Sass and React', graph: graphs[4], codepen: 'https://codepen.io/1xwebbyx1/full/XyKXxz', github: 'https://github.com/1XWebbyX1/quote-machine' },
{ project: 'Survey Form', description: 'JavaScript, jQuery, Sass and React', graph: graphs[5], codepen: 'https://codepen.io/1xwebbyx1/full/NEPymW', github: 'https://github.com/1XWebbyX1/survey-form' },
{ project: 'Calculator', description: 'JavaScript, jQuery, Redux, Sass and React', graph: graphs[8], codepen: 'https://codepen.io/1xwebbyx1/full/zMdENQ', github: 'https://github.com/1XWebbyX1/calculator' },
{ project: 'Product Landing Page', description: 'JavaScript, jQuery, mousewheel, Sass and React', graph: graphs[6], codepen: 'https://codepen.io/1xwebbyx1/full/VVvGdw', github: 'https://github.com/1XWebbyX1/product-landing-page' },
{ project: 'Drum Machine', description: 'JavaScript, jQuery, Sass and React', graph: graphs[2], codepen: 'https://codepen.io/1xwebbyx1/full/LXQBap', github: 'https://github.com/1XWebbyX1/drum-machine' },
{ project: 'Tribute Page', description: 'JavaScript, jQuery, HTML and Sass', graph: graphs[3], codepen: 'https://codepen.io/1xwebbyx1/full/mQBXJJ', github: 'https://github.com/1XWebbyX1/tribute-page' }];

//-----------------------------------------------------------------------------


var fallback = [
'https://i.ibb.co/tzHM9Zs/2011965-Krqy-BM-small-42d76ca2-9d5e-41e9-b464-b5a19a9e7944-1.png',
'https://i.ibb.co/92LFwY3/2011965-LXVQz-W-6593663f-d6eb-4c4e-b0ac-d3ac3f2f613b-1.png',
'https://i.ibb.co/54pfCqJ/2011965-Re-Xga-R-small-c71e81da-b2ad-47cb-95b2-cc8d7ec36d54-1.png',
'https://i.ibb.co/4W76rHq/2011965-WYg-Rze-small-09085b79-ca1d-4e22-be34-d74eb6a33518-1.png',
'https://i.ibb.co/FYytGdW/Screen-Shot-2018-12-11-at-13-37-00-2.png',
'https://s3-us-west-2.amazonaws.com/i.cdpn.io/2011965.zMdENQ.small.b994a06c-abaf-4622-a133-ae8f82ee0b05.png',
'https://i.ibb.co/v3C4qW3/2011965-VVv-Gdw-small-9be0de7e-2c70-4644-a83b-1723cfe7d340-1.png',
'https://i.ibb.co/h74v259/2011965-LXQBap-small-ce2c9b4a-bd56-4e02-8754-ff559779b0cb-1.png',
'https://s3-us-west-2.amazonaws.com/i.cdpn.io/2011965.mQBXJJ.small.03687f15-d51d-40c5-b513-103fe96f1ca5.png'];


var src = [
'http://a.webpurr.com/5zdn.webp',
'http://a.webpurr.com/6MnK.webp',
'http://a.webpurr.com/BMZy.webp',
'http://a.webpurr.com/gvAr.webp',
'http://a.webpurr.com/p8nE.webp',
'https://s3-us-west-2.amazonaws.com/i.cdpn.io/2011965.zMdENQ.small.b994a06c-abaf-4622-a133-ae8f82ee0b05.png',
'http://a.webpurr.com/Gl7K.webp',
'http://a.webpurr.com/4zvE.webp',
'https://s3-us-west-2.amazonaws.com/i.cdpn.io/2011965.mQBXJJ.small.03687f15-d51d-40c5-b513-103fe96f1ca5.png'];


//preload images __________________________________________________________
function preloadImage(url)
{
  var img = new Image();
  img.src = url;
}

function load() {
  projects.map(function (a) {
    preloadImage(a.src);
  });
}


load();
//--------------------------------------------------------------------------


//HOME SECTION-____________________________________________________________
var Home = function (_React$Component) {_inherits(Home, _React$Component);

  function Home(props) {_classCallCheck(this, Home);var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this,
    props));
    _this.scrollToProjects = _this.scrollToProjects.bind(_this);
    _this.scrollToAbout = _this.scrollToAbout.bind(_this);return _this;
  }_createClass(Home, [{ key: 'scrollToProjects', value: function scrollToProjects()

    {
      $('html, body').animate({
        scrollTop: $('#projects').offset().top },
      500);
    } }, { key: 'scrollToAbout', value: function scrollToAbout()

    {
      $('html, body').animate({
        scrollTop: $('#about').offset().top },
      500);
    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('section', { id: 'home' },
          React.createElement('canvas', { id: 'map' }),
          React.createElement('h1', null, 'Khayati Asrani'),
          React.createElement('p', null, ' Front End Developer'),
          React.createElement(Lines, { id: 'line-0' }),
          React.createElement('button', { id: 'project-btn', onClick: this.scrollToProjects }, 'Projects'),
          React.createElement('button', { id: 'about-btn', onClick: this.scrollToAbout }, 'About'),
          React.createElement(Lines, { id: 'line-1' }),
          React.createElement(Lines, { id: 'line-2' })));


    } }]);return Home;}(React.Component);var






Lines = function (_React$Component2) {_inherits(Lines, _React$Component2);function Lines() {_classCallCheck(this, Lines);return _possibleConstructorReturn(this, (Lines.__proto__ || Object.getPrototypeOf(Lines)).apply(this, arguments));}_createClass(Lines, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { 'class': 'line', id: this.props.id },
          React.createElement('div', { 'class': 'in-line one' }),
          React.createElement('div', { 'class': 'in-line two' })));


    } }]);return Lines;}(React.Component);


//-------------------------------------------------------------------------------



function hasWebP() {
  var rv = $.Deferred();
  var img = new Image();
  img.onload = function () {rv.resolve();};
  img.onerror = function () {rv.reject();};
  img.src = 'http://www.gstatic.com/webp/gallery/1.webp';
  return rv.promise();
}



//PROJECTS SECTION______________________________________________________________
var Projects = function (_React$Component3) {_inherits(Projects, _React$Component3);function Projects() {_classCallCheck(this, Projects);return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));}_createClass(Projects, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('section', { id: 'projects' },
          React.createElement('h3', null, 'PROJECT'),
          React.createElement(Article, null)));


    } }]);return Projects;}(React.Component);var


Article = function (_React$Component4) {_inherits(Article, _React$Component4);
  function Article(props) {_classCallCheck(this, Article);var _this4 = _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this,
    props));
    _this4.state = {
      index: 0,
      arr: src,
      project: function project() {return projects[this.index].project;},
      description: function description() {return projects[this.index].description;},
      src: function src() {return this.arr[this.index];},
      graph: function graph() {return projects[this.index].graph;},
      codepen: function codepen() {return projects[this.index].codepen;},
      github: function github() {return projects[this.index].github;} };

    _this4.handleNext = _this4.handleNext.bind(_this4);
    _this4.handlePrev = _this4.handlePrev.bind(_this4);
    _this4.animateChange = _this4.animateChange.bind(_this4);
    _this4.set = _this4.set.bind(_this4);return _this4;
  }

  //disable previous button initially
  _createClass(Article, [{ key: 'componentDidMount', value: function componentDidMount() {
      $('.fa-arrow-circle-left').css('opacity', '0.1');

      hasWebP().then(function () {
        // ... code to take advantage of WebP ...
        //this.state.arr = src;
        this.set(true);
      }.bind(this), function () {
        this.set(false);
        // ... code to deal with the lack of WebP ...
      }.bind(this));
    } }, { key: 'set', value: function set(



    bool) {
      if (bool) {
        this.setState({
          index: 0,
          arr: src,
          project: function project() {return projects[this.index].project;},
          description: function description() {return projects[this.index].description;},
          src: function src() {return this.arr[this.index];},
          graph: function graph() {return projects[this.index].graph;},
          codepen: function codepen() {return projects[this.index].codepen;},
          github: function github() {return projects[this.index].github;} });

      } else {
        this.setState({
          index: 0,
          arr: fallback,
          project: function project() {return projects[this.index].project;},
          description: function description() {return projects[this.index].description;},
          src: function src() {return this.arr[this.index];},
          graph: function graph() {return projects[this.index].graph;},
          codepen: function codepen() {return projects[this.index].codepen;},
          github: function github() {return projects[this.index].github;} });

      }
    }

    //animation between transition
  }, { key: 'animateChange', value: function animateChange() {
      var tl = new TimelineMax({ delay: 0.3, repeat: 1, repeatDelay: 0.2, yoyo: true, ease: Elastic.easeOut });
      tl.to('.arrow', 0.4, { visibility: 'hidden' }, '-=0.4').
      fromTo('.mask', 0.2, { boxShadow: '0px 0px 0px inset #CA7564' }, { boxShadow: '0px -350px 0px inset #CA7564' }).
      to('.graph', 0.2, { height: '0px' }, '-=0.25').
      to('.inner img, .inner .mask', 0.5, { height: '175px', boxShadow: '0px -350px 0px inset #212121	' });
    }

    //on next button click
  }, { key: 'handleNext', value: function handleNext() {
      if (this.state.index <= 7) {// if not last project
        this.animateChange();
        setTimeout(function () {
          this.setState({
            index: this.state.index + 1 });

        }.bind(this), 300);
      }
    }

    //on prev button click
  }, { key: 'handlePrev', value: function handlePrev() {
      if (this.state.index >= 1) {//if not first project
        this.animateChange();
        setTimeout(function () {
          this.setState({
            index: this.state.index - 1 });

        }.bind(this), 300);
      }
    }

    //update button opacity
  }, { key: 'componentDidUpdate', value: function componentDidUpdate() {
      if (this.state.index < 1) {
        $('.fa-arrow-circle-left').css('opacity', '0.1');
        $('.fa-arrow-circle-right').css('opacity', '1');
      } else
      if (this.state.index > 7) {
        $('.fa-arrow-circle-left').css('opacity', '1');
        $('.fa-arrow-circle-right').css('opacity', '0.1');
      } else {
        $('.fa-arrow-circle-left').css('opacity', '1');
        $('.fa-arrow-circle-right').css('opacity', '1');
      }
    } }, { key: 'render', value: function render()


    {
      return (
        React.createElement('div', null,
          React.createElement('h1', { 'class': 'anim' }, this.state.project()),

          React.createElement('div', { 'class': 'small-icon' },
            React.createElement('div', { 'class': 'holder', onClick: this.handlePrev }, React.createElement('i', { 'class': 'fas fa-3x icon-s fa-arrow-circle-left' })),
            React.createElement('p', { 'class': 'anim' }, 'A ', this.state.project(), ' created by fulfilling user stories at freeCodeCamp. The Project used ', React.createElement('span', { 'class': 'highlight' }, this.state.description()), '. The design is fully responsive and cross-browser compatible.'),
            React.createElement('div', { 'class': 'holder', onClick: this.handleNext }, React.createElement('i', { 'class': 'fas fa-3x icon-s fa-arrow-circle-right', onClick: this.handleNext }))),


          React.createElement('div', { 'class': 'slider anim' },
            React.createElement(Arrow, { id: 'left', direction: 'fa-arrow-circle-left', onClick: this.handlePrev }),
            React.createElement('figure', { 'class': 'inner' },
              React.createElement('div', { 'class': 'mask' }),
              React.createElement('img', { src: this.state.src() }),
              React.createElement(Graph, { src: this.state.graph() })),

            React.createElement(Arrow, { id: 'right', direction: 'fa-arrow-circle-right', onClick: this.handleNext })),


          React.createElement('div', { id: 'buttons' },
            React.createElement('a', { href: this.state.codepen(), target: '_blank' }, React.createElement('button', { 'class': 'code-pen button anim-butt ' }, 'View on CodePen ', React.createElement('i', { 'class': 'fab fa-codepen' }))),
            React.createElement('a', { href: this.state.github(), target: '_blank' }, React.createElement('button', { 'class': 'git-hub button anim-butt' }, 'View on GitHub ', React.createElement('i', { 'class': 'fab fa-github' }))))));



    } }]);return Article;}(React.Component);var


Arrow = function (_React$Component5) {_inherits(Arrow, _React$Component5);function Arrow() {_classCallCheck(this, Arrow);return _possibleConstructorReturn(this, (Arrow.__proto__ || Object.getPrototypeOf(Arrow)).apply(this, arguments));}_createClass(Arrow, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { id: this.props.id, 'class': 'arrow', onClick: this.props.onClick },
          React.createElement('div', { 'class': 'outer-circle ' },
            React.createElement('div', { 'class': 'inner-circle ' },
              React.createElement('i', { 'class': "fas fa-3x icon " + this.props.direction, onClick: this.props.onClick })))));




    } }]);return Arrow;}(React.Component);var



Graph = function (_React$Component6) {_inherits(Graph, _React$Component6);function Graph() {_classCallCheck(this, Graph);return _possibleConstructorReturn(this, (Graph.__proto__ || Object.getPrototypeOf(Graph)).apply(this, arguments));}_createClass(Graph, [{ key: 'render', value: function render()
    {var _this7 = this;
      var arr = this.props.src; //get graph for current project
      var i = 1;
      var bars = arr.map(function (a) {
        var id = 'bar-' + i;
        i++;
        return React.createElement(Bar, { id: id, name: a.name, src: _this7.props.src });
      });
      return (
        React.createElement('div', { 'class': 'graph' },
          bars));


    } }]);return Graph;}(React.Component);var




Bar = function (_React$Component7) {_inherits(Bar, _React$Component7);
  function Bar(props) {_classCallCheck(this, Bar);var _this8 = _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).call(this,
    props));
    _this8.createGraph = _this8.createGraph.bind(_this8);
    _this8.animate = _this8.animate.bind(_this8);return _this8;
  }_createClass(Bar, [{ key: 'animate', value: function animate()

    {
      shadow = this.createGraph() + ' 0px inset ' + '#CD7635';
      $('#' + this.props.id + ' .shadow').css('box-shadow', shadow);
      id = $('#' + this.props.id + ' .shadow');
      var tl = new TimelineMax({ delay: 1.6 });
      tl.fromTo(id, 0.8, { boxShadow: '0px 0px inset #CD7635' }, { boxShadow: shadow });
    } }, { key: 'createGraph', value: function createGraph()

    {
      var width;
      var object = this.props.src; //get current project graph
      switch (this.props.name) {//find width for current bar
        case object[0].name:width = object[0].width;
          break;
        case object[1].name:width = object[1].width;
          break;
        case object[2].name:width = object[2].width;
          break;
        case object[3].name:width = object[3].width;}


      return width;
    }

    //animate when intially rendered
  }, { key: 'componentDidMount', value: function componentDidMount() {
      this.animate();
    }

    //animate on each project update
  }, { key: 'componentDidUpdate', value: function componentDidUpdate() {
      this.animate();
    } }, { key: 'render', value: function render()


    {
      return (
        React.createElement('div', { id: this.props.id, 'class': 'bar' },
          React.createElement('p', null, this.props.name),
          React.createElement('div', { 'class': 'shadow' })));


    } }]);return Bar;}(React.Component);

//-------------------------------------------------------------------------------


//ABOUT SECTION________________________________________________________________
var

About = function (_React$Component8) {_inherits(About, _React$Component8);function About() {_classCallCheck(this, About);return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));}_createClass(About, [{ key: 'render', value: function render()
    {
      //loop through icons arr to create i elements
      var arr = icons.map(function (a) {
        return React.createElement('i', { 'class': a });
      });

      return (
        React.createElement('section', { id: 'about' },
          React.createElement('h3', { 'class': 'anim' }, 'Introduction'),
          React.createElement('h1', { 'class': 'anim' }, 'About Me'),

          React.createElement('p', { 'class': 'anim' }, ' A passionate front end developer, a self learner, who aims to bring perfection in design and efficiency within each project taken. I target a great user experience through a creative visual design in my work.', React.createElement('br', null), '  My mantra for work would be  \'Learn, Use, Research and Improve\'.'),
          React.createElement('hr', { 'class': 'anim' }),
          React.createElement('h3', { 'class': 'anim', id: 'head' }, 'SKILLS AND ABILITIES'),

          React.createElement('p', { 'class': 'anim skills' }, 'HTML5, CSS3, jQuery, Javascript, React, Sass, Bootstrap, Redux, Java,   Git, Git Hub, Three, GASP, Command line Experience,  Adobe Illustrator and Photoshop, Working with Browser developer tools for debugging, creating Responsive and Cross Browser Compatible designs, FontAwesome, Devicon, Atom.'),

          React.createElement('div', { 'class': 'container' },
            arr)));



    } }]);return About;}(React.Component);

//-----------------------------------------------------------------------------


//CONTACT SECTION______________________________________________________________
var Contact = function (_React$Component9) {_inherits(Contact, _React$Component9);function Contact() {_classCallCheck(this, Contact);return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));}_createClass(Contact, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('section', { id: 'contact' },
          React.createElement('h3', { 'class': 'anim' }, 'Get in Touch'),
          React.createElement('h1', { 'class': 'anim' }, 'Contact'),

          React.createElement('div', { 'class': 'wrapper anim' },
            React.createElement(Card, { id: 'email', icon: 'far fa-envelope fa-3x icon', text: 'khayatiasrani@gmail.com', button: 'Email', link: 'mailto:khayatiasrani@gmail.com' }),
            React.createElement(Card, { id: 'codepen', icon: 'fab fa-codepen fa-3x icon', text: 'https://codepen.io/1xwebbyx1/', button: 'Codepen Profile', link: 'https://codepen.io/1xwebbyx1/' }),
            React.createElement(Card, { id: 'git', icon: 'fab fa-github fa-3x icon', text: 'https://github.com/1XWebbyX1', button: 'GitHub Profile', link: 'https://github.com/1XWebbyX1' })),


          React.createElement('div', { 'class': 'snap-wrap' },
            React.createElement('figure', { id: 'snap' },
              React.createElement('img', { src: 'https://i.ibb.co/mH3cvXx/mike-wilson-48019-unsplashedited.jpg' }))),


          React.createElement('p', null, 'Copyright 2018 Khayati Asrani, All Rights Reserved')));


    } }]);return Contact;}(React.Component);var



Card = function (_React$Component10) {_inherits(Card, _React$Component10);function Card() {_classCallCheck(this, Card);return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));}_createClass(Card, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { 'class': 'card', id: this.props.id },
          React.createElement('i', { 'class': this.props.icon }),
          React.createElement('p', null, this.props.text),
          React.createElement('a', { href: this.props.link, target: '_blank' }, React.createElement('button', null, this.props.button))));


    } }]);return Card;}(React.Component);

//-----------------------------------------------------------------------------
var


App = function (_React$Component11) {_inherits(App, _React$Component11);function App() {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));}_createClass(App, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement(Home, null),
          React.createElement(Projects, null),
          React.createElement(About, null),
          React.createElement(Contact, null)));


    } }]);return App;}(React.Component);




ReactDOM.render(React.createElement(App, null), document.getElementById('app'));



//jquery animation______________________________________________

$(document).ready(function () {

  setTimeout(function () {
    //display app after load--------
    $('#loader').css('display', 'none');
    $('#app').css('display', 'block');

    //hover on project function------------
    $('.inner').hover(function () {
      $(this).css('mask-image', 'none');
      $('.inner .graph').css('visibility', 'hidden');
    }, function () {
      $(this).css('mask-image', 'radial-gradient(black 30%, rgba(0, 0, 0, 0.8) , rgba(255, 255, 255, 0.1) )');
      $('.inner .graph').css('visibility', 'visible');
    });

    //hover on buttons in home section---------------
    $('#project-btn').hover(function () {
      $('#line-1').css('box-shadow', '0px 1px 4px inset #d3d3d3');

    }, function () {
      $('#line-1').css('box-shadow', '0px 1px 4px inset #111');
    });

    $('#about-btn').hover(function () {
      $('#line-2').css('box-shadow', '0px 1px 4px inset #d3d3d3');

    }, function () {
      $('#line-2').css('box-shadow', '0px 1px 4px inset #111');
    });



    //GSAP for animations_____________________________________________________________________________________


    //main home page animation-------------------

    var tl = new TimelineMax({ delay: 2.8 });
    tl.from('#home h1', .75, { left: '150%', boxShadow: '1500px 0px 0px inset #050505', color: '#050505', ease: Back.easeOut, textShadow: 'none' }).
    to('#home h1', 0.5, { boxShadow: '0px 0px 0px inset #050505', color: '#d9d9d9', textShadow: '  0 1px 0 hsl(174,5%,80%),\n\t                 0 2px 0 hsl(174,5%,75%),\n\t                 0 3px 0 hsl(174,5%,70%),\n\t                 0 4px 0 hsl(174,5%,66%),\n\t                 0 5px 0 hsl(174,5%,64%),\n\t                 0 6px 0 hsl(174,5%,62%),\n\t                 0 7px 0 hsl(174,5%,61%),\n\t                 0 8px 0 hsl(174,5%,60%),\n\t\n\t                 0 0 5px rgba(0,0,0,.05),\n\t                0 1px 3px rgba(0,0,0,.2),\n\t                0 3px 5px rgba(0,0,0,.2),\n\t               0 5px 10px rgba(0,0,0,.2),\n\t              0 10px 10px rgba(0,0,0,.2),\n\t              0 20px 20px rgba(0,0,0,.3)' },













    '+=.1').
    from('#home p, #home button, .line', 1, { opacity: 0, ease: Bounce.easeOut, scale: 0.2 }, '-=.75').
    to('#home p', 0.5, { boxShadow: '0px 0px 0px inset #050505', color: '#ddd' }).
    to('.line .one', 3, { x: 150, repeat: -1, yoyo: true, ease: Back.easeOut }).
    to('.line .two', 3, { x: -50, repeat: -1, yoyo: true, ease: Back.easeOut }, '-=2.5');
    //----------------------------------------------------------------


    //scroll animations with debouncing---------------------------------------
    var latestKnownScrollPos = 0,
    elements = $('.anim'), // all elements to be animated
    ticking = false;


    function onScroll() {
      latestKnownScrollPos = $(window).scrollTop();
      requestTick();
    }

    function update() {
      ticking = false;
      var window_height = $(window).height();
      var currentScrollY = latestKnownScrollPos;
      if (currentScrollY == 0) {
        $('.anim').removeClass('come-in'); //if at the top 
      }
      var window_bottom_position = currentScrollY + window_height;


      // read offset of DOM elements
      $.each(elements, function () {// iterate through each item in array elements
        var $element = $(this);
        var element_top_position = $element.offset().top;
        var element_height = $element.height();
        var element_bottom_position = element_top_position + element_height;


        if (element_top_position <= window_bottom_position && element_top_position >= currentScrollY) {
          $($element).addClass('come-in'); //if visible in viewport apply css class for animation
          if ($element.attr('id') == 'about') {// extra animation for icons in about section
            TweenMax.staggerFromTo($('#about .icon'), 1, { scale: 0.2, x: 0 }, { scale: 1, x: 20 }, 0.2);
          }
        }
      });
    }


    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(update);
      }
      ticking = true;
    }


    $(window).scroll(onScroll);






    //canvas setup _____________________________________________________________________
    //-----the below effect was forked from a pen(https://codepen.io/Mamboleoo/pen/wKqwPN) by Louis Hoebregts and edited by 1XWebbyX1----// 
    var renderer, scene, camera, ww, wh, particles;

    ww = window.innerWidth,
    wh = window.innerHeight;

    var centerVector = new THREE.Vector3(0, 0, 0);
    var previousTime = 0,
    speed = 10,
    isMouseDown = false;

    var getImageData = function getImageData(image) {
      var canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);

      return ctx.getImageData(0, 0, image.width, image.height);
    };


    var drawTheMap = function drawTheMap() {
      var geometry = new THREE.Geometry();
      var material = new THREE.PointsMaterial({
        size: 3,
        color: 0xca7564,
        sizeAttenuation: false });

      for (var y = 0, y2 = imagedata.height; y < y2; y += 2) {
        for (var x = 0, x2 = imagedata.width; x < x2; x += 2) {
          if (imagedata.data[x * 4 + y * 4 * imagedata.width] < 128) {

            var vertex = new THREE.Vector3();
            vertex.x = x - imagedata.width / 2;
            vertex.y = -y + imagedata.height / 2;
            vertex.z = -Math.random() * 500;

            vertex.speed = Math.random() / speed + 0.015;

            geometry.vertices.push(vertex);
          }
        }
      }
      particles = new THREE.Points(geometry, material);

      scene.add(particles);

      requestAnimationFrame(render);
    };


    var init = function init() {
      renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("map"),
        antialias: true });

      renderer.setSize(ww, wh);
      renderer.setClearColor(0x000000);

      scene = new THREE.Scene();

      camera = new THREE.OrthographicCamera(ww / -2, ww / 2, wh / 2, wh / -2, 1, 1000);
      camera.position.set(7, 0, 4);
      camera.lookAt(centerVector);
      scene.add(camera);
      var x = window.matchMedia("(max-width: 600px)");
      if (x.matches) {// If media query matches
        camera.zoom = 2;
      } else {
        camera.zoom = 4;
      }

      camera.updateProjectionMatrix();

      imagedata = getImageData(image);
      drawTheMap();
      window.addEventListener('resize', onResize, false);

    };


    var onResize = function onResize() {
      ww = window.innerWidth;
      wh = window.innerHeight;
      renderer.setSize(ww, wh);
      camera.left = ww / -2;
      camera.right = ww / 2;
      camera.top = wh / 2;
      camera.bottom = wh / -2;
      camera.updateProjectionMatrix();
    };


    var render = function render(a) {

      requestAnimationFrame(render);
      particles.geometry.verticesNeedUpdate = true;
      if (!isMouseDown) {
        camera.position.x += (0 - camera.position.x) * 0.06;
        camera.position.y += (0 - camera.position.y) * 0.06;
        camera.lookAt(centerVector);
      }

      renderer.render(scene, camera);
    };


    var imgData = 'data:image/jpeg;base64,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';
    var image = document.createElement("img");
    image.onload = init;
    image.src = imgData;

  }, 8000);

});