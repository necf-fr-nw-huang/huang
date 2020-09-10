# import necessary library
import requests
import codecs
import os
import sys
import json
import re
from datetime import datetime

# prepare and import some valiables
curpath = os.getcwd()
date = datetime.now().strftime("%Y%m%d-%H%M%S")
base_url = 'https://n280.meraki.com/api/v1'
apikey = input()
orgid = '599315'
headers = {
	'x-cisco-meraki-api-key': format(str(apikey)),
	'Content-Type': 'application/json'
}

#
serialID = ''
netName = ''

data = curpath + '/serial.log'

print('STORE Number' + '\t'+ 'Total min' + '\t'+ 'Total %' + '\t' +'Average min'+ '\t' +'0%'+ '\t' +'Less 5%' +'\t'+ '5%' + '\t'+ '10%' + '\t'+ '15%' + '\t'+ '20%' + '\t'+ '25%', file=codecs.open(curpath + '/data/daytime-0903loss.log', 'a', 'utf-8'))
with open(data, 'r', encoding='utf-8') as file:
	filedata = file.readline()
	while filedata:
		serialID = filedata[0:14]
		netName = filedata[18:-1]
		targeturl = str(base_url) + '/devices/' + serialID + '/lossAndLatencyHistory?uplink=wan1&ip=8.8.8.8&timespan=604800'
		dashboard = requests.get(targeturl, headers=headers)
		print(dashboard.status_code, netName)
		dashboard = dashboard.json()
		print(netName)
		lossPercentage = 0
		total = 0
		p0 = 0
		p01 = 0
		p5 = 0
		p10 = 0
		p15 = 0
		p20 = 0
		p25 = 0
		for item in dashboard:
			sTime = int(item['startTs'][-9:-7])
			if 10 <=  sTime <= 20:
				try:
					lossPercentage += item['lossPercent']
					total += 1
				except Exception as e:
					print(e)
				if 0.00000001 > int(item['lossPercent']):
					p0 += 1
				if 0.00000001 <= int(item['lossPercent']) <= 4.999999:
					p01 += 1
				if 5 <= int(item['lossPercent']):
					p5 += 1
				if 10 <= int(item['lossPercent']):
					p10 += 1
				if 15 <= int(item['lossPercent']):
					p15 += 1
				if 20 <= int(item['lossPercent']):
					p20 += 1
				if 25 <= int(item['lossPercent']):
					p25 += 1
		filedata = file.readline()
		avrg = 0
		try:
			avrg = lossPercentage/total
		except Exception as e:
			print(e)
		totalLoss =str(lossPercentage)
		total = str(total)
		print(netName + '\t'+ total + '\t'+ totalLoss + '\t' + str(avrg) + '\t' +str(p0) +'\t'+ str(p01) +'\t'+str(p5) + '\t'+ str(p10) + '\t'+ str(p15) + '\t'+ str(p20) + '\t'+ str(p25), file=codecs.open(curpath + '/data/daytime-0903loss.log', 'a', 'utf-8'))
	file.close()
	

