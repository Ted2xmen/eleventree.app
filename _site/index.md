---
title: Home
buttonTitle: Back to Home
layout: home
tags: page
modified: 2022-01-09 00:00:00
order: 1
---


<h2 class="py-12 text-4xl font-bold text-center text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-600 via-slate-400 to-slate-700">
	{{ config.siteTitle }} 
</h2>
<div class=" w-1/3 items-center mx-auto justify-center  ">
	{% include "headerCard.njk" %}
	<strong class="p-2 m-2 text-gray-400 h-full block border border-green-400"> {% include "navigation.njk" %}</strong>	
	<div class="grid-cols-1">
		{% include "list.njk" %}
	</div>	
</div>


