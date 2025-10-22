---
layout: gallery
title: test
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