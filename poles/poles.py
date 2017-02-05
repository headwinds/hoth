#!/usr/bin/python

#-----------------------------------------------------------------------
# twitter-search-geo
#  - performs a search for tweets close to Iqaluit ( the capital of Nunavut - 63.7467, 68.5170 ), and outputs
#    them to a CSV file.
# https://github.com/ideoforms/python-twitter-examples/blob/master/twitter-search-geo.py
#-----------------------------------------------------------------------

from twitter import *

import sys
import csv
import json

latitude = 63.7467	# geographical centre of search
longitude = 68.5170	# geographical centre of search
max_range = 1000 		# search range in kilometres
num_results = 10		# minimum results to obtain
outfileCSV = "northern.csv"
outfileJSON = "northern.json"
outfileJSONRaw = "northernRaw.json"

bellwoodslat = 43.647459
bellwoodslong = -79.413852
bellwoodsCSV = "bellwoods.csv"
bellwoods_max_range = 1 	

#-----------------------------------------------------------------------
# load our API credentials 
#-----------------------------------------------------------------------
config = {}
execfile("config.py", config)

#-----------------------------------------------------------------------
# create twitter API object
#-----------------------------------------------------------------------
twitter = Twitter(
		        auth = OAuth(config["access_token"], config["access_secret"], config["consumer_key"], config["consumer_secret"]))

#-----------------------------------------------------------------------
# open a file to write (mode "w"), and create a CSV writer object
#-----------------------------------------------------------------------
csvfile = file(outfileCSV, "w")
csvwriter = csv.writer(csvfile)

#-----------------------------------------------------------------------
# add headings to our CSV file
#-----------------------------------------------------------------------
row = [ "id", "value", "user", "text", "latitude", "longitude" ]
rowText = [ "text", "latitude", "longitude" ]
csvwriter.writerow(rowText)

#-----------------------------------------------------------------------
# row validation
#-----------------------------------------------------------------------
def validateRow(row):
	validRow = True
	# if row["text"]

	return validRow;
#-----------------------------------------------------------------------
# the twitter API only allows us to query up to 100 tweets at a time.
# to search for more, we will break our search up into 10 "pages", each
# of which will include 100 matching tweets.
#-----------------------------------------------------------------------
result_count = 0
last_id = None
while result_count <  num_results:
	#-----------------------------------------------------------------------
	# perform a search based on latitude and longitude
	# twitter API docs: https://dev.twitter.com/docs/api/1/get/search
	#-----------------------------------------------------------------------
	query = twitter.search.tweets(q = "", geocode = "%f,%f,%dkm" % (bellwoodslat, bellwoodslong, bellwoods_max_range), count = 100, max_id = last_id)

	for result in query["statuses"]:
		#-----------------------------------------------------------------------
		# only process a result if it has a geolocation
		#-----------------------------------------------------------------------
		if result["geo"]:
			userid = result["user"]["id"]
			user = result["user"]["screen_name"]
			value = result["user"]["followers_count"]
			text = result["text"]
			text = text.encode('ascii', 'replace')
			latitude = result["geo"]["coordinates"][0]
			longitude = result["geo"]["coordinates"][1]
			# validate the content 
			validRow = validateRow(row)
			if validRow: 
				# now write this row to our CSV file if its valid 
				# row = [ userid, value, user, text, latitude, longitude ]
			 	rowText = [ text, latitude, longitude ]
				csvwriter.writerow(rowText)
				# now write this row to our JSON file too except there is a problem here since they prints only 1 result
				# objData = {"id": userid, "value": value, "name": user, "text": text, "latitude": latitude, "longitude": longitude}
				# jsonData = json.dumps(objData)
				#with open(outfileJSON, 'w') as outfile:
				#  json.dump(jsonData, outfile)
				#with open(outfileJSONRaw, 'w') as outfile:
				#  json.dump(result, outfile)  
				result_count += 1
		last_id = result["id"]

	#-----------------------------------------------------------------------
	# let the user know where we're up to
	#-----------------------------------------------------------------------
	print "got %d results" % result_count

#-----------------------------------------------------------------------
# we're all finished, clean up and go home.
#-----------------------------------------------------------------------
csvfile.close()

# print "written to %s" % outfile

