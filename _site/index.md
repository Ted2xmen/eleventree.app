---
title: Home
buttonTitle: Back to Home
layout: home
tags: page
modified: 2022-01-09 00:00:00
order: 1
---

<h2 class="py-6 text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-600 to-slate-800 hover:bg-gradient-to-l hover:from-slate-800 hover:via-green-400 hover:to-green-600 uppercase ">
	{{ config.siteTitle }} 
</h2>
	{% include "headerCard.njk" %}
	{% include "linkRow.njk" %}
	{% include "homelinks.njk" %}
	<strong class="p-2 m-2 text-gray-200 h-full rounded-lg block border border-green-700"> 
	{% include "navigation.njk" %}
	</strong>	
	

