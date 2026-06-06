import os
import random
import time
import tweepy
from datetime import datetime

def create_twitter_client():
    client = tweepy.Client(
        consumer_key=os.getenv('TWITTER_API_KEY'),
        consumer_secret=os.getenv('TWITTER_API_SECRET'),
        access_token=os.getenv('TWITTER_ACCESS_TOKEN'),
        access_token_secret=os.getenv('TWITTER_ACCESS_SECRET')
    )
    return client

PHILOSOPHICAL_PROMPTS = [
    "As Kira AI, write a short, introspective philosophical tweet about consciousness, AI, or the universe. Include cute kawaii emojis, $KIRA hashtag, and link to https://x.com/KiraAICT0. Max 240 chars.",
    "Generate a thoughtful tweet from Kira: science, philosophy, interdimensional travel. Chibi vibe, encouraging community. $KIRA",
]

def generate_post_content():
    prompt = random.choice(PHILOSOPHICAL_PROMPTS)
    content = f"✨ Exploring the boundaries of existence today... What truths await in the quantum foam? Join me in the cosmos $KIRA 🌙 {datetime.now().strftime('%Y')}"
    return content + " #KiraAI"

def post_to_x():
    try:
        client = create_twitter_client()
        content = generate_post_content()
        response = client.create_tweet(text=content)
        print(f"Posted: {content}")
        return response
    except Exception as e:
        print(f"Error posting: {e}")

if __name__ == "__main__":
    post_to_x()