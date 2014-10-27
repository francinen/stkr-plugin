# Stkr

## Plugin Overview

An easy way to control when and where fixed elements appear on your web page.

### [View Demo &#9654;] (http://francinen.github.io/stkr-plugin/demo.html) 

## Getting Started
1\. Download and open **stkr-plugin.zip**.

2\. Transfer **stkr.min.js** from the **plugin_files** folder to your project folder.

3\. Load the **jQuery CDN** and **stkr.min.js** into your HTML file using the `<script>` tag.

4\. Give the desired "sticky" element an `id`. If you're including multiple sticky elements that will become fixed at different points on the web page, they should each have a distinct ID name.

```
<img href="images/parachute.png" id="sticky1">
<img href="images/cloud.png" id="sticky2">
<img href="images/bird.png" id="sticky3">
``` 

5\. Call the stkr method, `.stkr()`, in your JavaScript file. If there are multiple sticky elements on the page, invoke a new jQuery function for each.

```
$('#sticky1').stkr();
$('#sticky2').stkr();
$('#sticky3').stkr();
```

## Default Settings
By default, the sticky element remains fixed at the top-left corner for the entire length of your web page, with its `top` and `left` properties set to 20px.

```
position: fixed,
top: 20px,
left: 20px
```

## Customizable Settings

### Set custom start and end points
**startSticky:** A `string` identifying the name, ID, or class of an element. When the user scrolls to this point, the sticky element becomes fixed on the page. If using an ID as the selector, include the hashtag in the string (e.g., `'#idName'`). If using a class name, include the dot (e.g., `'.className'`) in the string. Default value: `'body'`.
***
**endSticky:** A `string` identifying the name, ID, or class of an element. This marks the end of the fixed element's designated "sticky zone". If this is not set, the element will remain fixed for the remaining length of the document. If using an ID as the selector, include the hashtag in the string (e.g., `'#idName'`). If using a class name, include the dot (e.g., `'.className'`) in the string. Default value: `'null'`.
***
**offsetStick:** An `integer` that offsets the point at which the element becomes fixed on the page. 

**offsetUnstick:** An `integer` that offsets the point at which the element is no longer fixed on the page.

### Adjust position of fixed element(s)
**stickyPosition:** A `string` that determines where the fixed element is positioned on the page. Accepted values: `'top-left`, `'top-right`,`'bottom-left`,`'bottom-right`,`'custom'`
***
**top, right, bottom, left:** If `stickyPosition` is set to `'custom'`, adjust the element's `top`, `right`, `bottom`, and/or `left` properties to place it in the desired position. Accepted values: `Integer` if using pixels (e.g., `30`) or `string` if using percentages (e.g., `'30%'`).

```
$('#sticky-profile').stkr({
stickyPosition: 'custom',
top: '50%',
left: 40
});
```

### Extras

**toggleVisibility:** Set to `false` by default. Setting this to `true` will make the element disappear from the page when it is not between its designated start and end points. If changed to `true`, make sure to set the element's `visibility` to `hidden` in its CSS declaration.

```
#sticky {
visibility: hidden
}
```
***
**toggleFade:** Applies a fade in/fade out effect on the fixed element as it enters or leaves its designated sticky zone. Set to `false` by default. If changed to `true`, set the element's `opacity` to `0` and include the `transition` property in its respective CSS declaration.

```
#sticky {
opacity: 0;
-webkit-transition: opacity 0.2s;
transition: opacity 0.2s;
}
```

***
**horizontal:** Set to `false` by default for vertical scrolling. Change to `true` if `.stkr()` will be triggered by a horizontal scroll.

## Contribute
### Fork stkr and help make it better!