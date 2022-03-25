---
title: Home
buttonTitle: Back to Home
layout: home
tags: page
modified: 2022-01-09 00:00:00
order: 1
---

<h2 class="py-4 my-4 text-3xl font-mono font-bold text-center hover:text-slate-600 text-slate-800 uppercase">
	 <!-- {{config.title}}  -->
</h2>
	{% include "headerCard.njk" %}
	{% include "linkRow.njk" %}
	<!-- ss -->
<ul>{% for item in links.homelinks  %}
    <li class="list-none p-1">
        <a href="{{item.url}}"
            target="_blank"
            rel="noopener noreferrer"
            class="block no-underline h-full p-4 border border-gray-700 rounded-lg hover:border-green-600">
            <h3 class="text-bold custom-link-title">
                <i class="text-green-500 text-lg fa-regular {{item.icon}} mr-2"></i>{{item.name}}</h3>
            <p class="mt-1 custom-description">{{item.description}}</p>
            <div class="flex items-center justify-end mt-2">
                <p class="small-gradient">{{item.category}} </p>
            </div>
        </a>
    </li> {% endfor %}
</ul>
	<!-- ss -->
<strong class="p-2 m-2 text-gray-400 h-full rounded-lg block border border-green-700"> 
	{% include "navigation.njk" %}
</strong>	


