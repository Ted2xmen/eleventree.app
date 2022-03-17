---
title: Projects
buttonTitle: Check Out My Projects
layout: base
tags: page
modified: 2022-01-09 00:00:00
order: 2
---

<h2 class="pb-2 text-4xl font-bold  text-center text-gray-500">
	{{ config.projectTitle }}
</h2>
<div class=" w-1/3 items-center mx-auto justify-center  ">
	{% include "headerCard.njk" %}
	<strong class="p-2 m-2 text-gray-400 h-full block border border-green-400">
	 {% include "navigation.njk" %}</strong>
	<div class="grid-cols-1">
		{% include "projectList.njk" %}
	</div>
</div>


