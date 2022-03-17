---
title: Projects
buttonTitle: Check Out My Projects
layout: base
tags: page
modified: 2022-01-09 00:00:00
order: 2
---
<h2 class="py-12 text-4xl font-bold text-center text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-slate-800 hover:bg-gradient-to-l hover:from-slate-800 hover:via-green-400 hover:to-green-400 ">
	{{ config.projectTitle }} 
</h2>
<div class=" ">
	<strong class="p-2 m-2 text-gray-400 h-full block border border-green-600"> {% include "navigation.njk" %}</strong>	
		{% include "now.njk" %}
	<div class="grid-cols-1">
	{% include "projectList.njk" %}
	</div>	
</div>