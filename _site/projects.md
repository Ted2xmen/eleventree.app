---
title: Projects
buttonTitle: Check Out My Projects
layout: base
tags: page
modified: 2022-01-09 00:00:00
order: 2
---

<div>
	<div class="grid-cols-1">
		<h2
			class="py-6 custom-title text-4xl font-bold text-center">
			{{title}}
		</h2>
			<strong class=" m-2 text-gray-400 h-full block">
			{% include "navigation.njk"%}</strong>
		{% include "projectList.njk" %}
	</div>
</div>