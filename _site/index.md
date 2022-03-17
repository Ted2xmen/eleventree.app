---
title: Home
buttonTitle: Back to Home
layout: home
tags: page
modified: 2022-01-09 00:00:00
order: 1
---
<div class="  items-center mx-auto justify-center  ">
<h2 class="py-12 text-4xl font-bold text-center text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-slate-800 hover:bg-gradient-to-l hover:from-slate-800 hover:via-green-400 hover:to-green-400 ">
	{{ config.siteTitle }} 
</h2>
	{% include "headerCard.njk" %}
	{% include "linkRow.njk" %}
	<strong class="p-2 m-2 text-gray-400 h-full block border border-green-400"> {% include "navigation.njk" %}</strong>	
	<div class="grid-cols-1">
		{% include "homelinks.njk" %}
	</div>	
</div>


