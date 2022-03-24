---
title: Projects
buttonTitle: Check Out My Projects
layout: base
tags: page
modified: 2022-01-09 00:00:00
order: 2
---

<div>
	{% include "headerCard.njk" %}
	{% include "now.njk" %}
		<h2 class="py-6 text-3xl font-bold text-center text-transparent  bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-slate-800 hover:bg-gradient-to-l hover:from-slate-800 hover:via-green-400 hover:to-green-400 ">
	{{ config.site[0].projectTitle }} 
		</h2>
	<div class="grid-cols-1">
	{% include "projectList.njk" %}
	</div>
		<strong class="p-2 m-2 text-gray-200 rounded-lg h-full block border border-green-700"> {% include "navigation.njk" %}</strong>	
</div>