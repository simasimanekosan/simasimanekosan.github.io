#!/usr/bin/env python

import random
import cgitb
cgitb.enable()

html_body = '''<html>
<head>
<meta charset="UTF-8">
<title>今日の運勢</title>
</head>
<body>
今日のあなたの運勢は{}です
</body>
</html>'''

today_fortune = random.choice(['大吉', '中吉', '吉', '末吉', '凶', '大凶'])

print('Content-type: text/html')
print('')
print(html_body.format(todays_fortune))
