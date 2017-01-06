class dailyRitual:
	"""a ritual is a series of steps that one takes every day over a certain time period"""
	steps = []

	def __init__(self, period, steps):
		self.period = period
		self.steps = steps

	def ask():
		question = "What is the first thing you thing when you wake up?"

	def askNext(that):
		question = "What is the next thing you do when after..." + that	

	def askDifficulty():
		question = "how difficult is this task? (from 1 to 5 - 5 being the hardest)"

	def addTask(self,task):
		self.steps.append(task)

	def getDefaut(period):
		mStep1 = "wake up 7AM and shower where I wake up my brain and plan major goals for the day";
		mStep2 = "take my 2 daugters (2 & 5) to school"
		mStep3 = "3KM walk to work (24-7) where I refine my game plan while listening to podcasts"
		mStep4 = "I'm usually at my desk around 8:30" 
		mStep5 = "I have coffee & cereal" 
		mStep6 = "fire up my machine and open this project"
		mStep7 = "I work on an meaniful side project like this for 2 hrs"
		mSteps = (mStep1,mStep2,mStep2,mStep3,mStep4,mStep5,mStep6,mStep7); 

		nStep1 = "read twitter"
		nStep2 = "make dinner";
		nStep3 = "do the dishes";
		nStep4 = "put one of the girls to bed"
		nStep5 = "read a book or possibly code"
		nStep6 = "watch tv, movie or gaming on twitch"
		nStep7 = "go to sleep around 11:30"
		nSteps = (nStep1,nStep2,nStep3,nStep5,nStep6,nStep7);  

		options = {"morning" : mSteps, "night" : nSteps}

		return mSteps

