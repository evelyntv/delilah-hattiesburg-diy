---
title: 'Delilah Chamberlain'
layout: 'layouts/home.njk'
intro:
  eyebrow: 'Digital Marketing is our'
  main: 'Bread & Butter'
  summary: 'Let us help you create the perfect campaign with our multi-faceted team of talented creatives.'
  buttonText: 'See our work'
  buttonUrl: '/work'
  image: '/images/bg/toast.jpg'
  imageAlt: 'Buttered toasted white bread'
---
# Poems
<ul>
    {%- for work in collections.poetry -%}
        <li><a href="{{ work.url | url }}"> {{ work.data.title }} </a></li>
    {%- endfor -%}
</ul>

# Poetry Collections
<ul>
    {%- for work in collections["poetry-collection"] -%}
        <li><a href="{{ work.url | url }}"> {{ work.data.title }} </a></li>
    {%- endfor -%}
</ul>

# Fiction
<ul>
    {%- for work in collections.fiction -%}
        <li><a href="{{ work.url | url }}"> {{ work.data.title }} </a></li>
    {%- endfor -%}
</ul>

# Creative Nonfiction
<ul>
    {%- for work in collections["creative-nonfiction"] -%}
        <li><a href="{{ work.url | url }}"> {{ work.data.title }} </a></li>
    {%- endfor -%}
</ul>