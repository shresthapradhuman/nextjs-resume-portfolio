---
title: "Sidebar With Pure CSS"
date: "Feb 8, 2022"
excerpt: "Both the sidebar and main content are overlaid on top of each other, occupying the same area in the grid"
cover_image: "/images/posts/purecsssidebar.webp"
category: ["Html", "CSS"]
---

## Let's build Pure CSS Sidebar.

## Let's Mark Up

```
 <!-- wrapper  -->
    <div class="wrapper">
      <!-- sidebar section -->
      <div class="sidebar" id="sidebar">
        <!-- sidebar content -->
        <div class="head">
          <h1>Sidebar</h1>
          <!-- close button -->
          <a href="#">
            <i class="fas fa-times"></i>
          </a>
        </div>
      </div>
      <div class="main">
        <!-- main content section -->
        <!-- place this link where require -->
        <!-- open sidebar button -->
        <a href="#sidebar">
          <i class="fas fa-bars"></i>
        </a>
      </div>
    </div>
```

## Let's Style

```
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}
.main {
  height: 100%;
  padding: 10px;
}
.main > a {
  display: block;
  font-size: 20px;
}
.sidebar {
  position: fixed;
  width: 320px;
  height: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 0 10px;
}
/* When the anchor tag with href #sidebar is 
clicked, the URL hash is set to #sidebar */
/* :target psuedo class selects the element 
when the URL hash matches the Id of the element */
.sidebar:target {
  transform: translateX(0);
  transition: transform 500ms;
}
.sidebar:not(:target) {
  transform: translateX(-100%);
  transition: transform 500ms, display 0ms linear 500ms;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head > a {
  text-decoration: none;
  font-size: 20px;
}
```
