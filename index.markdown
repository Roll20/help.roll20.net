---
layout: default
title: Welcome to the Roll20 Help & Documentation
---

<div class="bootcamp-help">
  <h1>Roll20 Bootcamp <span>New to Roll20 or virtual tabletops? This will get you started.</span>
  </h1>
  <div class="bootcamp-body">
  <ul>
    <li class="setup">
      <a href="#">
        <div class="image">&nbsp;</div>
        <div class="desc">
          <h2>New Campaign</h2>
        </div>
      </a>
    </li>
    <li class="create-a-repo">
      <a href="#">
        <div class="image">&nbsp;</div>
        <div class="desc">
          <h2>Maps &amp; Tokens</h2>
        </div>
      </a>
    </li>
    <li class="fork-a-repo">
      <a href="#">
        <div class="image">&nbsp;</div>
        <div class="desc">
          <h2>Invite Players</h2>
        </div>
      </a>
    </li>
    <li class="be-social">
      <a href="#">
        <div class="image">&nbsp;</div>
        <div class="desc">
          <h2>Run Game</h2>
        </div>
      </a>
    </li>
  </ul>
  </div> <!-- /bootcamp-body -->
</div>

<div class="list-module">
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
</div>

<div style="padding: 10px; background-color: #FFFFD6;">
  <p><strong>Howdy, stranger!</strong> We're currently working on building the Roll20 Help site. We'll be adding more guides as the closed beta gets underway, so check back soon!</p>
</div>