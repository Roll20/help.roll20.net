---
layout: default
title: Welcome
---

Welcome to the Roll20 Help and Documentation site! We created Roll20 because we wanted a virtual tabletop that was easy to use, with layers of more powerful features underneath. However, making Roll20 is only half the battle; the other half is making sure that it's well-documented so that our users can actually make use of all the cool stuff we've built! 

We've endeavored to make this documentation site as easy to use as Roll20 itself, by utilizing good organization and ample real-world examples to illustrate the purpose of each feature. So feel free to dig in by using the category listing to the right, and enjoy!

Best regards,

Riley and Nolan, the Roll20 Team

<!-- <div class="list-module">
  <h2>Popular Guides</h2>
  <div class="list-body">
    <ul>
      {% for post in site.categories.popular reversed %}
        <li>
          <a href="{{ post.url }}" id="{{ cat }}">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div> -->

<h2>Popular Guides</h2>

<div class="well popular-list">

  <ul>
  {% for post in site.categories.popular reversed %}
    <li>
     
        <h3> <a href="{{ post.url }}" id="{{ cat }}">{{ post.title }}</a></h3>
        <p>{{ post.description }}</p>
      
    </li>
  {% endfor %}
  </ul>
</div>

<div class="alert alert-success" style="margin-top: 20px;">
  <p><strong>Welcome, brave adventurer!</strong> The Roll20 Help site is still very much a work in progress. We'll be adding more guides as the closed beta gets underway, so check back soon!</p>
</div>