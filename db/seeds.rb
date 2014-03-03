User.create(username: "wu", password: "Poop1", email: "jpwu03@yahoo.com")
User.create(username: "matthew", password: "Poop1", email: "matthew@matthew.com")
Form.create(title: "Team Topher", url: "", user_id: 1)
Question.create(question: "Who would win in a wizard duel", form_id: 1)
Option.create(answer: "Topher", question_id: 1)
Option.create(answer: "Dumbledore", question_id: 1)
Question.create(question: "Who would lose in a wizard duel", form_id: 1)
Option.create(answer: "Topher", question_id: 2)
Option.create(answer: "Gandalf", question_id: 2)


Form.create(title: "Topher Magic Questions", url: "", user_id: 1)
Question.create(question: "Is it true Topher once beat a olympian at gymnastics", form_id: 2)
Option.create(answer: "Definitely", question_id: 3)
Option.create(answer: "Of Course", question_id: 3)
Question.create(question: "Does Topher do handstands often?", form_id: 2)
Option.create(answer: "Yes", question_id: 4)
Option.create(answer: "No", question_id: 4)

Entry.create(user_id: 1, option_id: 5, form_id: 2)
Entry.create(user_id: 1, option_id: 7, form_id: 2)
Entry.create(user_id: 1, option_id: 4, form_id: 1)
Entry.create(user_id: 1, option_id: 1, form_id: 1)


Entry.create(user_id: 2, option_id: 6, form_id: 2)
Entry.create(user_id: 2, option_id: 8, form_id: 2)
Entry.create(user_id: 2, option_id: 3, form_id: 1)
Entry.create(user_id: 2, option_id: 2, form_id: 1)


