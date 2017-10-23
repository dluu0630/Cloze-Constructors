# Cloze-Constructors

Backend for a basic flashcard application.

Backend will essentially constitute an API that allows users to create two type of flashcards.

1. Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

2. Cloze flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

A cloze deletion is simply a sentence that has had some of its text removed. For example, given the sentence:
"George Washington was the first president of the United States."
...We can create a "cloze deletion" by removing the words "George Washington":
"... was the first president of the United States."


