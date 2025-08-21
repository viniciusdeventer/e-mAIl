# import re
# import nltk
# from nltk.corpus import stopwords
# from nltk.stem import WordNetLemmatizer

# nltk.download("stopwords", quiet=True)
# nltk.download("wordnet", quiet=True)

# lemmatizer = WordNetLemmatizer()
# stop_words = set(stopwords.words("portuguese"))

# def preprocess_text(text: str) -> str:
#     text = re.sub(r"[^A-Za-zÀ-ÖØ-öø-ÿ\s]", "", text.lower())
#     tokens = [lemmatizer.lemmatize(w) for w in text.split() if w not in stop_words]
#     return " ".join(tokens)
