---
title: Projects
buttonTitle: Check Out My Projects
layout: base
tags: page
modified: 2022-01-09 00:00:00
order: 2
---

<div>
			{% include "now.njk" %}
	<div class="grid-cols-1">
		<h2
			class="py-6 text-4xl font-bold text-center text-transparent  bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-slate-800 hover:bg-gradient-to-l hover:from-slate-800 hover:via-green-400 hover:to-green-400 ">
			{{title}}
		</h2>
			<strong class=" m-2 text-gray-400 h-full block">
			{% include "navigation.njk"%}</strong>
		{% include "projectList.njk" %}
	</div>
</div>