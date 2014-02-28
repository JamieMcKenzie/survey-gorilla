survey1 = Survey.create(title: "test survey")
q1 = Question.create(survey_id: survey1.id, text: "What's your name?")
q2 = Question.create(survey_id: survey1.id, text: "What's your favorite color?")
q3 = Question.create(survey_id: survey1.id, text: "What's your favorite city?")
q4 = Question.create(survey_id: survey1.id, text: "What's your favorite drink?")
q5 = Question.create(survey_id: survey1.id, text: "What's your favorite season?")


