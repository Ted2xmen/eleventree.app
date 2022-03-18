---
title: Projects
buttonTitle: Check Out My Projects
layout: base
tags: page
modified: 2022-01-09 00:00:00
order: 2
---

<div class=" ">
	{% include "headerCard.njk" %}
	{% include "linkRow.njk" %}
	<h2 class="py-6 text-3xl font-bold text-center text-transparent  bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-slate-800 hover:bg-gradient-to-l hover:from-slate-800 hover:via-green-400 hover:to-green-400 ">
	{{ config.projectTitle }} 
</h2>
	<strong class="p-2 m-2 text-gray-400 h-full block border border-green-500"> {% include "navigation.njk" %}</strong>	
	<div class="grid-cols-1">
	{% include "projectList.njk" %}
	</div>	
</div>