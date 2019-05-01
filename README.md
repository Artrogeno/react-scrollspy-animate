https://github.com/Artrogeno/react-scrollspy-animate

> Scrollspy Animate Component
> [Demo](https://artrogeno.github.io/lab/react-scrollspy-animate/)

## Install

```sh
$ yarn add react-scrollspy-animate
```

## Usage

```js
import Scrollspy from 'react-scrollspy-animate'

...
```

## Properties

```js
Scrollspy.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  componentClass: PropTypes.string,
  scrolledPastClassName: PropTypes.string,
  active: PropTypes.string,
  level: PropTypes.number,
  offset: PropTypes.number,
  timeout: PropTypes.number,
  rootEl: PropTypes.string,
  animete: PropTypes.object,
  onUpdate: PropTypes.func
}
```

## Exemple

### Default

```html
<body>
  <Scrollspy>
    <li>
      <a href="#section-1">Section 1</a>
    </li>
    <li>
      <a href="#section-2">Section 2</a>
    </li>
    <li>
      <a href="#section-3">Section 3</a>
    </li>
  </Scrollspy>

  <div id="section-1"></div>
  <div id="section-2"></div>
  <div id="section-3"></div>
</body>
```

### Level 1 ( tag --> a )

```html
<Scrollspy level={1} >
  <a href="#section-1">Section 1</a>
  <a href="#section-2">Section 2</a>
  <a href="#section-3">Section 3</a>
</Scrollspy>
```

### Level 2 ... ( tag --> li > a )

```
<Scrollspy level={2} >
  <li>
    <a href="#section-1">Section 1</a>
  </li>
  <li>
    <a href="#section-2">Section 2</a>
  </li>
  <li>
    <a href="#section-3">Section 3</a>
  </li>
</Scrollspy>
```

### Active ( default ==> class="active"  )
```
<Scrollspy active="nav-active" >
  <li>
    <a href="#section-1">Section 1</a>
  </li>
  <li class="nav-active"> <!--- Scroll Activite ---->
    <a href="#section-2">Section 2</a>
  </li>
  <li>
    <a href="#section-3">Section 3</a>
  </li>
</Scrollspy>
```


### Animate & Timeout from Mozilla (scrollIntoView)
[![Mozilla](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mozilla_dinosaur_head_logo.png/150px-Mozilla_dinosaur_head_logo.png)](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView)

```
// --> Animete
// <Scrollspy animate={ behavior: 'smooth', block: 'start' } >
{
  behavior: "auto"  | "instant" | "smooth",
  block:    "start" | "end",
}

// --> Set hash your browser in 500 milliseconds
// <Scrollspy timeout={500} >
setTimeout(() => {
  window.location.hash = '#section-2'
}, timeout);

```

